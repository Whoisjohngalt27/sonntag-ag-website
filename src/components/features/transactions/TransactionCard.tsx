/**
 * Component: TransactionCard
 * Feature: Individual transaction card with sector-specific background images
 */

import Image from 'next/image'
import { ClockIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline'
import { TransactionCardProps } from './TransactionCard.types'

export function TransactionCard({ transaction, className = '' }: TransactionCardProps) {
  const getSectorImage = (sector: string) => {
    const sectorImages: Record<string, string> = {
      'manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'technology': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'healthcare': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'retail': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'construction': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'automotive': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'food': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'logistics': 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'education': 'https://images.unsplash.com/photo-1523050854058-8df90110cfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'default': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
    
    return sectorImages[sector.toLowerCase()] || sectorImages.default
  }

  const getStatusColor = (status?: string) => {
    const statusColors: Record<string, string> = {
      'successful': 'bg-green-100 text-green-800 border-green-200',
      'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'completed': 'bg-blue-100 text-blue-800 border-blue-200'
    }
    
    return statusColors[status || 'successful'] || statusColors.successful
  }

  const getStatusText = (status?: string) => {
    const statusTexts: Record<string, string> = {
      'successful': 'Erfolgreich',
      'pending': 'In Bearbeitung',
      'completed': 'Abgeschlossen'
    }
    
    return statusTexts[status || 'successful'] || statusTexts.successful
  }

  return (
    <article className={`relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-6 pt-64 pb-6 sm:pt-48 lg:pt-64 ${className}`}>
      {/* Background Image */}
      <Image
        src={getSectorImage(transaction.sector)}
        alt={`${transaction.sector} sector background`}
        fill
        className="absolute inset-0 -z-10 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {/* Ring Effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-white/10" />

      {/* Transaction Details */}
      <div className="relative z-10">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <time 
            dateTime={transaction.date} 
            className="text-sm font-medium text-gray-300"
          >
            {transaction.date}
          </time>
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getStatusColor(transaction.status)}`}>
            {getStatusText(transaction.status)}
          </span>
        </div>

        {/* Company Name */}
        <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
          {transaction.company}
        </h3>

        {/* Sector */}
        {transaction.sector && (
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <BuildingOfficeIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="capitalize">{transaction.sector}</span>
          </div>
        )}

        {/* Buyer */}
        <div className="flex items-center text-sm text-gray-300 mb-3">
          <UserIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>Käufer: {transaction.buyer}</span>
        </div>

        {/* Timeframe */}
        <div className="flex items-center text-sm text-gray-300">
          <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>Abschluss in {transaction.timeframe}</span>
        </div>

        {/* Additional Info */}
        {transaction.value && (
          <div className="mt-3 pt-3 border-t border-gray-600/30">
            <p className="text-sm text-gray-300">
              <span className="font-medium">Transaktionswert:</span> {transaction.value}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
