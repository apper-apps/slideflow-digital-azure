import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No Slides Available",
  message = "This presentation doesn't contain any slides yet.",
  actionText = "Go Back",
  onAction,
  type = 'slide'
}) => {
  if (type === 'slide') {
    return (
      <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
        <div className="glass-panel rounded-3xl p-12 max-w-2xl w-full mx-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 
                          rounded-full flex items-center justify-center mx-auto mb-8">
              <ApperIcon name="FileText" size={64} className="text-primary" />
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">
              {title}
            </h3>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {message}
            </p>
            
            {onAction && (
              <motion.button
                onClick={onAction}
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl 
                         text-white font-semibold hover:scale-105 transition-all duration-200 
                         inline-flex items-center space-x-2 shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="ArrowLeft" size={20} />
                <span>{actionText}</span>
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="glass-panel rounded-xl p-8 text-center">
        <ApperIcon name="FileText" size={48} className="text-primary mx-auto mb-4" />
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-300 mb-4">{message}</p>
        {onAction && (
          <button
            onClick={onAction}
            className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-lg 
                     text-white font-medium hover:scale-105 transition-all duration-200"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  )
}

export default Empty