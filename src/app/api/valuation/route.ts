import { NextRequest, NextResponse } from 'next/server'

interface ValuationInput {
  industry: string
  revenue: number
  ebitda: number
  growthRate: number
  employees: number
  assets: number
  marketPosition: 'leader' | 'strong' | 'average'
  email?: string
  name?: string
  phone?: string
  company?: string
}

interface ValuationResult {
  lowRange: number
  midRange: number
  highRange: number
  methods: {
    ebitdaMultiple: number
    revenueMultiple: number
    assetBased: number
  }
  confidence: number
  reportUrl?: string
}

// Industry multipliers based on German M&A market data
const industryMultipliers = {
  'technology': { ebitda: 8.5, revenue: 2.5 },
  'manufacturing': { ebitda: 5.5, revenue: 0.8 },
  'services': { ebitda: 6.0, revenue: 1.2 },
  'retail': { ebitda: 4.5, revenue: 0.6 },
  'healthcare': { ebitda: 7.5, revenue: 1.8 },
  'construction': { ebitda: 4.0, revenue: 0.5 },
  'logistics': { ebitda: 5.0, revenue: 0.7 },
  'food': { ebitda: 5.5, revenue: 0.9 },
  'energy': { ebitda: 6.5, revenue: 1.5 },
  'real-estate': { ebitda: 8.0, revenue: 2.0 },
}

export async function POST(request: NextRequest) {
  try {
    const body: ValuationInput = await request.json()

    // Validate required fields
    if (!body.industry || !body.revenue || !body.ebitda) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get industry multipliers
    const multipliers = industryMultipliers[body.industry as keyof typeof industryMultipliers] || industryMultipliers.services

    // Calculate base valuations
    const ebitdaValue = body.ebitda * multipliers.ebitda
    const revenueValue = body.revenue * multipliers.revenue
    const assetValue = body.assets * 1.2

    // Apply adjustments based on growth and market position
    let growthAdjustment = 1
    if (body.growthRate > 20) growthAdjustment = 1.3
    else if (body.growthRate > 10) growthAdjustment = 1.15
    else if (body.growthRate > 5) growthAdjustment = 1.05

    let positionAdjustment = 1
    if (body.marketPosition === 'leader') positionAdjustment = 1.25
    else if (body.marketPosition === 'strong') positionAdjustment = 1.1

    // Calculate adjusted values
    const adjustedEbitda = ebitdaValue * growthAdjustment * positionAdjustment
    const adjustedRevenue = revenueValue * growthAdjustment * positionAdjustment

    // Calculate final ranges
    const avgValue = (adjustedEbitda + adjustedRevenue + assetValue) / 3
    const lowRange = avgValue * 0.8
    const highRange = avgValue * 1.2

    // Calculate confidence score based on data completeness
    let confidence = 60
    if (body.ebitda && body.revenue) confidence += 15
    if (body.growthRate) confidence += 10
    if (body.assets) confidence += 10
    if (body.marketPosition) confidence += 5

    const result: ValuationResult = {
      lowRange: Math.round(lowRange),
      midRange: Math.round(avgValue),
      highRange: Math.round(highRange),
      methods: {
        ebitdaMultiple: Math.round(adjustedEbitda),
        revenueMultiple: Math.round(adjustedRevenue),
        assetBased: Math.round(assetValue)
      },
      confidence: Math.min(confidence, 95)
    }

    // If email provided, store lead and send email
    if (body.email) {
      // Store lead in database (implementation would go here)
      await storeLead({
        ...body,
        valuation: result,
        timestamp: new Date().toISOString()
      })

      // Send email with results (implementation would go here)
      if (process.env.RESEND_API_KEY) {
        await sendValuationEmail(body.email, body.name, result)
      }

      // Track conversion in analytics (implementation would go here)
      trackConversion('valuation_completed', {
        industry: body.industry,
        value: result.midRange
      })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Valuation calculation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to store lead (placeholder)
async function storeLead(data: any) {
  // TODO: Implement database storage
  console.log('Storing lead:', data)
  
  // If using a CRM API like HubSpot:
  // await fetch('https://api.hubspot.com/contacts/v1/contact', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     properties: [
  //       { property: 'email', value: data.email },
  //       { property: 'firstname', value: data.name },
  //       { property: 'company', value: data.company },
  //       { property: 'phone', value: data.phone },
  //       { property: 'valuation_result', value: data.valuation.midRange }
  //     ]
  //   })
  // })
}

// Helper function to send email (placeholder)
async function sendValuationEmail(email: string, name: string | undefined, result: ValuationResult) {
  // TODO: Implement email sending with Resend or similar service
  console.log('Sending email to:', email)
  
  // If using Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'SONNTAG AG <noreply@sonntag-ag.com>',
  //   to: email,
  //   subject: 'Ihre Unternehmensbewertung - SONNTAG AG',
  //   html: generateEmailHTML(name, result)
  // })
}

// Helper function to track analytics (placeholder)
function trackConversion(event: string, data: any) {
  // TODO: Implement Google Analytics or similar tracking
  console.log('Tracking conversion:', event, data)
  
  // If using Google Analytics:
  // gtag('event', event, {
  //   event_category: 'Lead Generation',
  //   event_label: data.industry,
  //   value: data.value
  // })
}

// GET method to retrieve valuation parameters (for reference)
export async function GET() {
  return NextResponse.json({
    industries: Object.keys(industryMultipliers),
    multipliers: industryMultipliers,
    currency: 'EUR',
    version: '1.0'
  })
}