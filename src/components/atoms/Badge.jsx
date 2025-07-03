import React from 'react'

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30",
    secondary: "bg-secondary/20 text-secondary border border-secondary/30",
    success: "bg-success/20 text-success border border-success/30",
    warning: "bg-warning/20 text-warning border border-warning/30",
    error: "bg-error/20 text-error border border-error/30",
    glass: "glass-panel text-white"
  }

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  }

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim()

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge