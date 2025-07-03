import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const CaseStudySlide = ({ slide }) => {
  const { content } = slide

  return (
    <div className="w-full h-full bg-gradient-primary flex flex-col justify-center px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="primary" size="lg" className="text-lg px-6 py-3">
            {content.industry}
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {content.title}
        </motion.h1>
      </div>

      {/* Case Study Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Problem */}
        <motion.div
          className="glass-panel rounded-xl p-8 text-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-error/20 to-warning/20 
                         rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertTriangle" size={32} className="text-error" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Problem</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{content.problem}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="glass-panel rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 
                         rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Lightbulb" size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{content.solution}</p>
        </motion.div>

        {/* Outcome */}
        <motion.div
          className="glass-panel rounded-xl p-8 text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 
                         rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Outcome</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{content.outcome}</p>
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.metrics?.map((metric, index) => (
            <motion.div
              key={index}
              className="glass-panel rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-primary/20 
                             rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={metric.icon} size={24} className="text-success" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
              <p className="text-lg text-gray-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CaseStudySlide