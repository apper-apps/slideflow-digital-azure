import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const RoadmapSlide = ({ slide }) => {
  const { content } = slide

  const getStatusColor = (status) => {
    switch (status) {
      case 'planning':
        return 'text-info'
      case 'development':
        return 'text-primary'
      case 'research':
        return 'text-warning'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'planning':
        return 'info'
      case 'development':
        return 'primary'
      case 'research':
        return 'warning'
      default:
        return 'secondary'
    }
  }

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
          {content.subtitle}
        </motion.p>
      </div>

      {/* Roadmap Items */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary hidden md:block" />
          
          <div className="space-y-8">
            {content.roadmapItems?.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center md:items-start space-x-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 
                               rounded-full items-center justify-center glass-panel flex-shrink-0 relative z-10">
                  <ApperIcon name={item.icon} size={24} className="text-primary" />
                </div>

                {/* Content Card */}
                <div className="glass-panel rounded-xl p-6 flex-1 group hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <div className="md:hidden w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 
                                     rounded-full flex items-center justify-center">
                        <ApperIcon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={getStatusBadge(item.status)} size="md">
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                      <span className="text-lg font-semibold text-primary">{item.phase}</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="glass-panel rounded-xl p-8 max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 
                         rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Rocket" size={40} className="text-primary" />
          </div>
          <h3 className="text-3xl font-bold gradient-text mb-4">The Future is Now</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our roadmap reflects our commitment to staying at the forefront of AI innovation, 
            delivering solutions that evolve with your business needs.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default RoadmapSlide