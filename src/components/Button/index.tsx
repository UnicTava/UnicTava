'use client'

import React from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'circular'
export type ButtonSize = 'small' | 'medium' | 'default' | 'large'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    variant !== 'circular' ? styles[size] : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
    </button>
  )
}