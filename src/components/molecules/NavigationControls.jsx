import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const NavigationControls = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onToggleFullscreen,
  isFullscreen = false
}) => {
  const canGoBack = currentSlide > 0
  const canGoForward = currentSlide < totalSlides - 1

return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
<div className="glass-panel rounded-2xl p-4 flex items-center justify-between md:justify-center space-x-2 md:space-x-4">
<div className="flex items-center space-x-2 md:space-x-4">
          {/* Previous Button */}
          <Button
            variant="glass"
            size="md"
            icon="ChevronLeft"
            onClick={onPrevious}
            disabled={!canGoBack}
            className="w-10 h-10 md:w-12 md:h-12 !p-0"
          />

{/* Slide Counter */}
          <div className="glass-panel rounded-xl px-3 py-2 md:px-6 md:py-2 min-w-[100px] md:min-w-[120px] text-center">
            <span className="text-white font-semibold text-sm md:text-base">
              {currentSlide + 1} <span className="text-gray-400">of</span> {totalSlides}
            </span>
          </div>

{/* Next Button */}
          <Button
            variant="glass"
            size="md"
            icon="ChevronRight"
            onClick={onNext}
            disabled={!canGoForward}
            className="w-10 h-10 md:w-12 md:h-12 !p-0"
          />
        </div>

{/* Fullscreen Toggle */}
        <div className="flex items-center">
          <div className="w-px h-6 md:h-8 bg-white/20 mx-2" />
          <Button
            variant="glass"
            size="md"
            icon={isFullscreen ? "Minimize2" : "Maximize2"}
            onClick={onToggleFullscreen}
            className="w-10 h-10 md:w-12 md:h-12 !p-0"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default NavigationControls