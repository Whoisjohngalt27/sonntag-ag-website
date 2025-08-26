import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  message: string
  urgency?: 'normal' | 'urgent' | 'emergency'
  source?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone)
}

function getUrgencyLabel(urgency?: string): string {
  switch (urgency) {
    case 'emergency':
      return '🚨 NOTFALL'
    case 'urgent':
      return '⚡ DRINGEND'
    default:
      return '📧 NORMAL'
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validation
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Pflichtfelder fehlen' },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    if (body.phone && !validatePhone(body.phone)) {
      return NextResponse.json(
        { error: 'Ungültige Telefonnummer' },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      company: body.company?.trim() || '',
      message: body.message.trim(),
      urgency: body.urgency || 'normal',
      source: body.source || 'Kontaktformular'
    }

    const urgencyLabel = getUrgencyLabel(sanitizedData.urgency)
    const subject = `${urgencyLabel} Neue Anfrage von ${sanitizedData.firstName} ${sanitizedData.lastName}`

    // Send notification email to team
    const notificationEmail = await resend.emails.send({
      from: 'SONNTAG AG Website <noreply@sonntag-ag.com>',
      to: process.env.NOTIFICATION_EMAIL || 'service@sonntag-ag.com',
      replyTo: sanitizedData.email,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #000; }
              .urgent { border-left-color: #ff6b6b !important; }
              .emergency { border-left-color: #ff0000 !important; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Neue Kontaktanfrage</h1>
                <p>${urgencyLabel}</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${sanitizedData.firstName} ${sanitizedData.lastName}</div>
                </div>
                <div class="field">
                  <div class="label">E-Mail:</div>
                  <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                </div>
                ${sanitizedData.phone ? `
                <div class="field">
                  <div class="label">Telefon:</div>
                  <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
                </div>
                ` : ''}
                ${sanitizedData.company ? `
                <div class="field">
                  <div class="label">Unternehmen:</div>
                  <div class="value">${sanitizedData.company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Nachricht:</div>
                  <div class="value ${sanitizedData.urgency === 'emergency' ? 'emergency' : sanitizedData.urgency === 'urgent' ? 'urgent' : ''}">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="field">
                  <div class="label">Quelle:</div>
                  <div class="value">${sanitizedData.source}</div>
                </div>
                <div class="field">
                  <div class="label">Zeitstempel:</div>
                  <div class="value">${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</div>
                </div>
              </div>
              <div class="footer">
                <p>Diese E-Mail wurde automatisch vom Kontaktformular der SONNTAG AG Website generiert.</p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: 'SONNTAG AG <noreply@sonntag-ag.com>',
      to: sanitizedData.email,
      subject: 'Ihre Anfrage bei SONNTAG AG - Wir haben Ihre Nachricht erhalten',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: white; padding: 30px; text-align: center; }
              .content { padding: 30px; }
              .cta { display: inline-block; padding: 12px 30px; background: #000; color: white; text-decoration: none; margin-top: 20px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>SONNTAG AG</h1>
                <p>M&A Beratung & Unternehmensnachfolge</p>
              </div>
              <div class="content">
                <h2>Sehr geehrte(r) ${sanitizedData.firstName} ${sanitizedData.lastName},</h2>
                <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                
                <h3>Ihre Anfrage im Überblick:</h3>
                <div style="background: #f9f9f9; padding: 20px; margin: 20px 0;">
                  <p><strong>Ihre Nachricht:</strong><br>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <h3>Was passiert als Nächstes?</h3>
                <ul>
                  <li>Wir prüfen Ihre Anfrage sorgfältig</li>
                  <li>Ein Experte aus unserem Team wird sich innerhalb von 24 Stunden bei Ihnen melden</li>
                  <li>Gemeinsam besprechen wir Ihre individuelle Situation und mögliche Lösungswege</li>
                </ul>
                
                ${sanitizedData.urgency === 'emergency' ? `
                <div style="background: #fff3cd; border-left: 4px solid #ff0000; padding: 15px; margin: 20px 0;">
                  <strong>🚨 Ihre Anfrage wurde als Notfall markiert</strong><br>
                  Wir werden uns umgehend bei Ihnen melden. Bei dringenden Fällen erreichen Sie uns auch telefonisch unter: <a href="tel:+496419798500">+49 641 97985-00</a>
                </div>
                ` : ''}
                
                <p>Bei Fragen stehen wir Ihnen gerne zur Verfügung:</p>
                <p>
                  <strong>Telefon:</strong> <a href="tel:+496419798500">+49 641 97985-00</a><br>
                  <strong>E-Mail:</strong> <a href="mailto:service@sonntag-ag.com">service@sonntag-ag.com</a>
                </p>
                
                <p>Mit freundlichen Grüßen<br>
                Ihr SONNTAG AG Team</p>
              </div>
              <div class="footer">
                <p><strong>SONNTAG AG</strong><br>
                Südanlage 17 | 35390 Gießen<br>
                www.sonntag-ag.com</p>
                <p style="margin-top: 20px; font-size: 12px;">
                  Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    // Log the submission for monitoring
    console.log(`[CONTACT] New submission from ${sanitizedData.email} - Urgency: ${urgencyLabel}`)

    return NextResponse.json(
      { 
        success: true,
        message: 'Ihre Nachricht wurde erfolgreich gesendet.',
        data: {
          notificationId: notificationEmail.data?.id,
          confirmationId: confirmationEmail.data?.id
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT] Error processing submission:', error)
    
    // Check if it's a Resend API error
    if (error instanceof Error && error.message.includes('RESEND_API_KEY')) {
      return NextResponse.json(
        { 
          error: 'E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.',
          fallback: true 
        },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}