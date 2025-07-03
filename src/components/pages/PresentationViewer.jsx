import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import SlideRenderer from "@/components/organisms/SlideRenderer";
import Empty from "@/components/ui/Empty";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import ProgressBar from "@/components/molecules/ProgressBar";
import NavigationControls from "@/components/molecules/NavigationControls";
import useFullscreen from "@/hooks/useFullscreen";
import useKeyboardNavigation from "@/hooks/useKeyboardNavigation";
import { presentationService } from "@/services/api/presentationService";
const PresentationViewer = () => {
  const [slides, setSlides] = useState([])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [direction, setDirection] = useState('forward')
  
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  // Load slides on mount
  useEffect(() => {
    loadSlides()
  }, [])

  const loadSlides = async () => {
    try {
      setLoading(true)
      setError('')
      const slidesData = await presentationService.getAllSlides()
      setSlides(slidesData)
      
      if (slidesData.length === 0) {
        setError('No slides found in presentation')
      }
    } catch (err) {
      setError(err.message || 'Failed to load presentation')
      toast.error('Failed to load presentation slides')
    } finally {
      setLoading(false)
    }
  }

  const goToNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setDirection('forward')
      setCurrentSlideIndex(prev => prev + 1)
      toast.info(`Slide ${currentSlideIndex + 2} of ${slides.length}`)
    }
  }

  const goToPrevious = () => {
    if (currentSlideIndex > 0) {
      setDirection('backward')
      setCurrentSlideIndex(prev => prev - 1)
      toast.info(`Slide ${currentSlideIndex} of ${slides.length}`)
    }
  }

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlideIndex ? 'forward' : 'backward')
      setCurrentSlideIndex(index)
    }
  }

  const canGoNext = currentSlideIndex < slides.length - 1
  const canGoPrevious = currentSlideIndex > 0

  // Keyboard navigation
  useKeyboardNavigation({
    onNext: goToNext,
    onPrevious: goToPrevious,
    onToggleFullscreen: toggleFullscreen,
    canGoNext,
    canGoPrevious
  })

  // Loading state
  if (loading) {
    return <Loading type="slide" />
  }

  // Error state
  if (error) {
    return (
      <Error 
        message={error}
        onRetry={loadSlides}
        type="slide"
      />
    )
  }

  // Empty state
  if (slides.length === 0) {
    return (
      <Empty 
        title="No Slides Available"
        message="This presentation doesn't contain any slides yet."
        actionText="Reload Presentation"
        onAction={loadSlides}
        type="slide"
      />
    )
  }

  const currentSlide = slides[currentSlideIndex]

return (
    <div 
      className="presentation-container w-full h-screen relative overflow-hidden min-w-[320px] min-h-[240px]"
      style={{
        minWidth: '320px',
        minHeight: '240px',
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Progress Bar */}
      <ProgressBar 
        currentSlide={currentSlideIndex} 
        totalSlides={slides.length} 
      />

      {/* Slide Container */}
      <div 
        className="relative w-full h-full min-w-[320px] min-h-[240px]"
        style={{
          minWidth: '320px',
          minHeight: '240px',
          width: '100%',
          height: '100%'
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <SlideRenderer
            key={currentSlideIndex}
            slide={currentSlide}
            isActive={true}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentSlide={currentSlideIndex}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Slide Thumbnails (hidden by default, can be toggled) */}
      <div className="fixed top-4 right-4 z-30 hidden">
        <div className="glass-panel rounded-xl p-2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-200
                ${index === currentSlideIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
/>
          ))}
        </div>
      </div>

      {/* Presentation Info (only visible in dev mode) */}
      {/* eslint-disable-next-line no-undef */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 z-30 glass-panel rounded-lg p-3 text-sm">
          <div className="text-white font-medium">SlideFlow Pro</div>
          <div className="text-gray-300">
            {currentSlide?.title} ({currentSlideIndex + 1}/{slides.length})
          </div>
          <div className="text-gray-400 text-xs">
            Type: {currentSlide?.type} | Layout: {currentSlide?.layout}
          </div>
</div>
      )}
    </div>
  )
}
export default PresentationViewer