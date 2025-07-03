import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ type = 'slide' }) => {
  if (type === 'slide') {
    return (
      <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
        <div className="glass-panel rounded-3xl p-12 max-w-4xl w-full mx-8">
          {/* Title skeleton */}
          <div className="text-center mb-12">
            <motion.div
              className="h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl mx-auto mb-6"
              style={{ width: '60%' }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="h-8 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-lg mx-auto"
              style={{ width: '40%' }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
          </div>

          {/* Content skeleton */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.1 
                }}
              >
                <div className="w-6 h-6 bg-primary/30 rounded-full" />
                <div className="h-6 bg-gradient-to-r from-white/10 to-white/5 rounded-lg flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default Loading