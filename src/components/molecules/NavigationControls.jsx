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
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-panel rounded-2xl p-4 flex items-center space-x-4">
        {/* Previous Button */}
        <Button
          variant="glass"
          size="md"
          icon="ChevronLeft"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="w-12 h-12 !p-0"
        />

        {/* Slide Counter */}
        <div className="glass-panel rounded-xl px-6 py-2 min-w-[120px] text-center">
          <span className="text-white font-semibold">
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
          className="w-12 h-12 !p-0"
        />

        {/* Fullscreen Toggle */}
        <div className="w-px h-8 bg-white/20 mx-2" />
        <Button
          variant="glass"
          size="md"
          icon={isFullscreen ? "Minimize2" : "Maximize2"}
          onClick={onToggleFullscreen}
          className="w-12 h-12 !p-0"
        />
      </div>
    </motion.div>
  )
}

export default NavigationControls