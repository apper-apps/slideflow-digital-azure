import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25",
    secondary: "glass-button text-primary border border-primary/30",
    ghost: "text-primary hover:bg-primary/10",
    glass: "glass-button text-white hover:bg-white/10"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28
  }

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `.trim()

  const iconSize = iconSizes[size]

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <ApperIcon name={icon} size={iconSize} className="mr-2" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ApperIcon name={icon} size={iconSize} className="ml-2" />
      )}
    </motion.button>
  )
}

export default Button