import React from 'react'

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="8" 
    height="12" 
    viewBox="0 0 8 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" 
      fill="currentColor"
    />
  </svg>
)

export const CallMadeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 15 15" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z" 
      fill="currentColor"
    />
  </svg>
)