import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ContentSlide = ({ slide }) => {
  const { content } = slide

  const renderBulletPoints = () => (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {content.points?.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-6 glass-panel rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
            <p className="text-xl text-gray-300 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderProblemGrid = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.problems?.map((problem, index) => (
          <motion.div
            key={index}
            className="glass-panel rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-error/20 to-warning/20 
                           rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="AlertTriangle" size={32} className="text-error" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
            <p className="text-gray-300">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderSolutionFeatures = () => (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-6">
        {content.features?.map((feature, index) => (
          <motion.div
            key={index}
            className="glass-panel rounded-xl p-8 flex items-center space-x-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 
                           rounded-full flex items-center justify-center flex-shrink-0">
              <ApperIcon name="Zap" size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-xl text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderCapabilitiesGrid = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.capabilities?.map((capability, index) => (
          <motion.div
            key={index}
            className="glass-panel rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 
                           rounded-full flex items-center justify-center mx-auto mb-4 
                           group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow duration-300">
              <ApperIcon name={capability.icon} size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
            <p className="text-gray-300">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderBenefitsShowcase = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.benefits?.map((benefit, index) => (
          <motion.div
            key={index}
            className="glass-panel rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 
                           rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name={benefit.icon} size={32} className="text-success" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{benefit.metric}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (slide.layout) {
      case 'bullet-points':
        return renderBulletPoints()
      case 'problem-grid':
        return renderProblemGrid()
      case 'solution-features':
        return renderSolutionFeatures()
      case 'capabilities-grid':
        return renderCapabilitiesGrid()
      case 'benefits-showcase':
        return renderBenefitsShowcase()
      default:
        return renderBulletPoints()
    }
  }

  return (
    <div className="w-full h-full bg-gradient-primary flex flex-col justify-center px-8 py-12">
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content.mainTitle || slide.title}
        </motion.h1>
        
        {(content.subtitle || slide.subtitle) && (
          <motion.p
            className="text-2xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle || slide.subtitle}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  )
}

export default ContentSlide