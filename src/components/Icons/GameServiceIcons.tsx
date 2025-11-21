import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// Ícone Desempenho - Velocímetro/Raio
export const PerformanceIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 12L28 28H36L32 44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
  </svg>
)

// Ícone Qualidade Visual - Olho/Estrela
export const VisualQualityIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 18C20 18 12 32 12 32C12 32 20 46 32 46C44 46 52 32 52 32C52 32 44 18 32 18Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="32"
      cy="32"
      r="6"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
)

// Ícone Controle Total - Engrenagens
export const ControlIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="26"
      cy="28"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <circle cx="26" cy="28" r="4" fill="currentColor" />
    <circle
      cx="40"
      cy="38"
      r="8"
      stroke="currentColor"
      strokeWidth="3"
    />
    <circle cx="40" cy="38" r="3" fill="currentColor" />
    <path
      d="M26 18V14M26 42V38M16 28H12M40 28H36M20 22L17 19M32 34L35 37"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone Flexibilidade - Camadas/Níveis
export const FlexibilityIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="16"
      y="14"
      width="32"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="20"
      y="27"
      width="24"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="24"
      y="40"
      width="16"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
)

// Ícone Colaboração - Pessoas conectadas
export const CollaborationIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="22"
      cy="22"
      r="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <circle
      cx="42"
      cy="22"
      r="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      d="M14 42C14 36 17 32 22 32C27 32 30 36 30 42"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M34 42C34 36 37 32 42 32C47 32 50 36 50 42"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M28 38H36"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)
