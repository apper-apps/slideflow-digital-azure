import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ 
  message = "Unable to load presentation slide", 
  onRetry,
  type = 'slide'
}) => {
  if (type === 'slide') {
    return (
      <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
        <div className="glass-panel rounded-3xl p-12 max-w-2xl w-full mx-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="AlertTriangle" size={48} className="text-error" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Presentation Error
            </h3>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {message}
            </p>
            
            {onRetry && (
              <motion.button
                onClick={onRetry}
                className="glass-button px-8 py-4 rounded-xl text-primary font-semibold 
                         hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="RotateCcw" size={20} />
                <span>Retry Loading</span>
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="glass-panel rounded-xl p-6 text-center">
        <ApperIcon name="AlertTriangle" size={24} className="text-error mx-auto mb-2" />
        <p className="text-gray-300 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="glass-button px-4 py-2 rounded-lg text-primary text-sm 
                     hover:scale-105 transition-all duration-200"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

export default Error