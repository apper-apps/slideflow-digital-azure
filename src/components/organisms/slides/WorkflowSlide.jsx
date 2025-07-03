import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const WorkflowSlide = ({ slide }) => {
  const { content } = slide

  return (
    <div className="w-full h-full bg-gradient-primary flex flex-col justify-center px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content.mainTitle}
        </motion.h1>
        
        <motion.p
          className="text-2xl text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.description}
        </motion.p>
      </div>

      {/* Workflow Steps */}
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {content.steps?.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Step Circle */}
                <div className={`
                  w-24 h-24 rounded-full flex items-center justify-center mb-6 relative
                  ${step.trigger ? 'bg-gradient-to-br from-warning/20 to-error/20' : ''}
                  ${step.action ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : ''}
                  ${step.decision ? 'bg-gradient-to-br from-info/20 to-primary/20' : ''}
                  ${step.outcome ? 'bg-gradient-to-br from-success/20 to-primary/20' : ''}
                  glass-panel group hover:scale-110 transition-all duration-300
                `}>
                  <ApperIcon 
                    name={step.icon} 
                    size={32} 
                    className={`
                      ${step.trigger ? 'text-warning' : ''}
                      ${step.action ? 'text-primary' : ''}
                      ${step.decision ? 'text-info' : ''}
                      ${step.outcome ? 'text-success' : ''}
                    `}
                  />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary 
                                rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.id}
                  </div>
                </div>

                {/* Step Content */}
                <div className="glass-panel rounded-xl p-6 max-w-xs">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < content.steps.length - 1 && (
                  <div className="lg:hidden mt-6 mb-2">
                    <ApperIcon name="ChevronDown" size={24} className="text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="glass-panel rounded-xl p-8 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 
                         rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Result</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{content.result}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkflowSlide