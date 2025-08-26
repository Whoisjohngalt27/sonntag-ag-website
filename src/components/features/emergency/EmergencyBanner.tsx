import { PhoneIcon } from '@heroicons/react/24/outline'

export interface EmergencyBannerProps {
  icon?: React.ElementType
  label?: string
  phone?: string
  description?: string
  bgColor?: string
  className?: string
}

export function EmergencyBanner({ 
  icon: Icon = PhoneIcon,
  label = 'NOTFALL-HOTLINE',
  phone = '+49 (0) 641 201 037 00',
  description = 'Diskrete Beratung',
  bgColor = 'bg-red-600',
  className = ''
}: EmergencyBannerProps) {
  return (
    <div className={`${bgColor} text-white py-3 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          <Icon className="h-5 w-5" />
          <span className="font-medium">{label}</span>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-bold hover:underline flex items-center">
            <PhoneIcon className="h-4 w-4 mr-1" />
            {phone}
          </a>
          <span className="text-white/70">|</span>
          <span className="text-sm">{description}</span>
        </div>
      </div>
    </div>
  )
}