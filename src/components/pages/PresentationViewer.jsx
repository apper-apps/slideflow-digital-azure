import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import useFullscreen from "@/hooks/useFullscreen";
import useKeyboardNavigation from "@/hooks/useKeyboardNavigation";
import SlideRenderer from "@/components/organisms/SlideRenderer";
import NavigationControls from "@/components/molecules/NavigationControls";
import ProgressBar from "@/components/molecules/ProgressBar";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import slidesData from "@/services/mockData/slides.json";
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
    }
  }

const goToPrevious = () => {
    if (currentSlideIndex > 0) {
      setDirection('backward')
      setCurrentSlideIndex(prev => prev - 1)
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
      {/* Slide Navigation List with Scrolling */}
      <div className="fixed top-4 right-4 z-30 slide-list-container">
        <div className="glass-panel rounded-xl p-3 max-h-80 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col space-y-1">
            <div className="text-xs text-white/60 mb-2 font-medium">
              Slides ({slides.length})
            </div>
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  flex items-center gap-2 p-2 rounded-lg transition-all duration-200 
                  text-left text-xs font-medium min-w-0 group
                  ${index === currentSlideIndex 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white border border-transparent'
                  }
                `}
                title={slide.title || `Slide ${index + 1}`}
              >
                <div className={`
                  w-2 h-2 rounded-full flex-shrink-0 transition-all duration-200
                  ${index === currentSlideIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/30 group-hover:bg-white/50'
                  }
                `} />
                <span className="truncate flex-1">
                  {index + 1}. {slide.title || slide.type || 'Untitled'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Presentation Info removed to prevent popup interference */}
    </div>
  );
};

export default PresentationViewer;