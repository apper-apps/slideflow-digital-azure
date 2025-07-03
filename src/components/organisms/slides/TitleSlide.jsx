import React from 'react'
import { motion } from 'framer-motion'

const TitleSlide = ({ slide }) => {
  const { content } = slide

  return (
    <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
      <div className="text-center max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6">
            {content.mainTitle}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8">
            {content.subtitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {content.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-panel rounded-2xl p-8 max-w-md mx-auto"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full 
                         flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">AI</span>
          </div>
          <p className="text-gray-300 text-lg font-medium">
            {content.company}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TitleSlide