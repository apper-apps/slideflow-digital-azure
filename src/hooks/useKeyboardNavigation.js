import { useEffect } from 'react'

const useKeyboardNavigation = ({ 
  onNext, 
  onPrevious, 
  onToggleFullscreen,
  canGoNext = true,
  canGoPrevious = true 
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Prevent default behavior for presentation navigation keys
      if (['ArrowLeft', 'ArrowRight', 'Space', 'F11'].includes(event.key)) {
        event.preventDefault()
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          if (canGoNext && onNext) {
            onNext()
          }
          break
        case 'ArrowLeft':
          if (canGoPrevious && onPrevious) {
            onPrevious()
          }
          break
        case 'F11':
          if (onToggleFullscreen) {
            onToggleFullscreen()
          }
          break
        case 'Escape':
          // Exit fullscreen if in fullscreen mode
          if (document.fullscreenElement && onToggleFullscreen) {
            onToggleFullscreen()
          }
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [onNext, onPrevious, onToggleFullscreen, canGoNext, canGoPrevious])
}

export default useKeyboardNavigation