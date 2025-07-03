import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const CTASlide = ({ slide }) => {
  const { content } = slide

  return (
    <div className="w-full h-full bg-gradient-primary flex flex-col justify-center px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content.mainTitle}
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* CTA Actions */}
      <motion.div
        className="max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.ctaItems?.map((item, index) => (
            <motion.div
              key={index}
              className={`
                glass-panel rounded-xl p-8 text-center group cursor-pointer
                transition-all duration-300 hover:scale-105
                ${item.primary ? 'ring-2 ring-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10' : ''}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className={`
                w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
                ${item.primary ? 'bg-gradient-to-br from-primary/30 to-secondary/30' : 'bg-gradient-to-br from-primary/20 to-secondary/20'}
                group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow duration-300
              `}>
                <ApperIcon name={item.icon} size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-xl text-gray-300 mb-6">{item.description}</p>
              
              <Button
                variant={item.primary ? "primary" : "secondary"}
                size="lg"
                fullWidth
                className="group-hover:scale-105 transition-transform duration-200"
              >
                {item.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="glass-panel rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">
            {content.contactInfo.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <ApperIcon name="Mail" size={24} className="text-primary mx-auto" />
              <p className="text-gray-300 font-medium">{content.contactInfo.email}</p>
            </div>
            
            <div className="space-y-2">
              <ApperIcon name="Phone" size={24} className="text-primary mx-auto" />
              <p className="text-gray-300 font-medium">{content.contactInfo.phone}</p>
            </div>
            
            <div className="space-y-2">
              <ApperIcon name="Globe" size={24} className="text-primary mx-auto" />
              <p className="text-gray-300 font-medium">{content.contactInfo.website}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xl text-gray-400">
          Let's transform your business with AI-powered solutions
        </p>
      </motion.div>
    </div>
  )
}

export default CTASlide