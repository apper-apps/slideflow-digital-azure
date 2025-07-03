import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ currentSlide, totalSlides, className = '' }) => {
  const progress = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 ${className}`}>
      <div className="h-1 bg-black/20 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary progress-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default ProgressBar