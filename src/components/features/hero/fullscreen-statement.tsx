/**
 * Component: Fullscreen Statement
 * Purpose: Bold statement sections with video backgrounds for narrative breathing room
 * Created for: SONNTAG AG homepage
 */

interface FullscreenStatementProps {
  headline: string
  subtext?: string
  videoSrc?: string
  darkOverlay?: boolean
  textColor?: 'white' | 'black'
}

export default function FullscreenStatement({
  headline,
  subtext,
  videoSrc,
  darkOverlay = true,
  textColor = 'white'
}: FullscreenStatementProps) {
  const textColorClass = textColor === 'white' 
    ? 'text-white' 
    : 'text-gray-900';
  
  const subtextColorClass = textColor === 'white'
    ? 'text-white/80'
    : 'text-gray-600';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="object-cover w-full h-full"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {darkOverlay && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </div>
      )}
      
      {/* Fallback gradient if no video */}
      {!videoSrc && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      )}
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light ${textColorClass} leading-[1.1] tracking-tight`}>
          {headline}
        </h2>
        {subtext && (
          <p className={`mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light ${subtextColorClass} max-w-2xl mx-auto leading-relaxed`}>
            {subtext}
          </p>
        )}
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className={`w-6 h-6 ${textColor === 'white' ? 'text-white/60' : 'text-gray-600'}`}
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}