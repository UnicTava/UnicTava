import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// Ícone Educacional - Livro com estrela
export const EducationalIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V52C36 54.2091 34.2091 56 32 56H16C13.7909 56 12 54.2091 12 52V16Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 16C36 13.7909 37.7909 12 40 12H48C50.2091 12 52 13.7909 52 16V52C52 54.2091 50.2091 56 48 56H40C37.7909 56 36 54.2091 36 52V16Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 24H28M20 32H28M20 40H28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="44" cy="28" r="2" fill="currentColor" />
    <circle cx="44" cy="36" r="2" fill="currentColor" />
    <circle cx="44" cy="44" r="2" fill="currentColor" />
  </svg>
)

// Ícone Jurídico - Balança
export const LegalIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 12V52"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 52H48"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M20 16L12 28H28L20 16Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 16L36 28H52L44 16Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12H44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="20" cy="16" r="2.5" fill="currentColor" />
    <circle cx="44" cy="16" r="2.5" fill="currentColor" />
  </svg>
)

// Ícone Corporativo - Prédio
export const CorporateIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="12"
      y="8"
      width="40"
      height="48"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 18H28M20 26H28M20 34H28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M36 18H44M36 26H44M36 34H44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect
      x="26"
      y="42"
      width="12"
      height="14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 56H56"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone Contabilidade - Calculadora
export const AccountingIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="14"
      y="8"
      width="36"
      height="48"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="20"
      y="14"
      width="24"
      height="10"
      rx="2"
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="24" cy="34" r="2" fill="currentColor" />
    <circle cx="32" cy="34" r="2" fill="currentColor" />
    <circle cx="40" cy="34" r="2" fill="currentColor" />
    <circle cx="24" cy="42" r="2" fill="currentColor" />
    <circle cx="32" cy="42" r="2" fill="currentColor" />
    <circle cx="40" cy="42" r="2" fill="currentColor" />
    <circle cx="24" cy="50" r="2" fill="currentColor" />
    <circle cx="32" cy="50" r="2" fill="currentColor" />
    <circle cx="40" cy="50" r="2" fill="currentColor" />
  </svg>
)

// Ícone Psicologia - Cérebro
export const PsychologyIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 10C22 10 14 18 14 28C14 32 15 35 17 38C17 38 16 42 16 46C16 50 18 54 22 54C24 54 26 53 28 51C29 52 30.5 52.5 32 52.5C33.5 52.5 35 52 36 51C38 53 40 54 42 54C46 54 48 50 48 46C48 42 47 38 47 38C49 35 50 32 50 28C50 18 42 10 32 10Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 22C26 22 28 24 32 24C36 24 38 22 38 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="25" cy="32" r="2" fill="currentColor" />
    <circle cx="39" cy="32" r="2" fill="currentColor" />
    <path
      d="M28 40C28 40 29.5 42 32 42C34.5 42 36 40 36 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone Turismo - Globo
export const TourismIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="32"
      cy="28"
      r="18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 28C14 28 18 32 24 32C30 32 32 28 32 28C32 28 34 32 40 32C46 32 50 28 50 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 10V46"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="32"
      cy="28"
      rx="8"
      ry="18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 52H44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M28 46L32 52L36 46"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Ícone Formação Profissional - Pessoa com Certificado
export const ProfessionalTrainingIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="32"
      cy="18"
      r="8"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 52C18 52 18 38 32 38C46 38 46 52 46 52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="22"
      y="28"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 34H38M26 38H38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.3" />
    <path
      d="M12 56H52"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone Avatar 3D - Pessoa com Headset
export const Avatar3DIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="32"
      cy="24"
      r="12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 24C20 24 18 22 16 22C14 22 12 24 12 26C12 28 14 30 16 30C18 30 20 28 20 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 24C44 24 46 22 48 22C50 22 52 24 52 26C52 28 50 30 48 30C46 30 44 28 44 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 22C26 22 28 20 32 20C36 20 38 22 38 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <ellipse cx="28" cy="26" rx="2" ry="2.5" fill="currentColor" />
    <ellipse cx="36" cy="26" rx="2" ry="2.5" fill="currentColor" />
    <path
      d="M28 32C28 32 30 34 32 34C34 34 36 32 36 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 40C16 40 20 52 32 52C44 52 48 40 48 40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Ícone Jurídico Personalizado - Documento com Martelo
export const LegalCustomIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="14"
      y="8"
      width="28"
      height="48"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16H36M20 22H36M20 28H32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="38"
      y="32"
      width="16"
      height="6"
      rx="1"
      transform="rotate(45 38 32)"
      fill="currentColor"
      opacity="0.3"
    />
    <rect
      x="44"
      y="38"
      width="4"
      height="14"
      rx="1"
      transform="rotate(45 44 38)"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48 48L52 52"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone LLM - Rede Neural
export const LLMIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="16" cy="32" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="48" cy="32" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="20" cy="52" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="44" cy="52" r="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 16L32 28" stroke="currentColor" strokeWidth="2" />
    <path d="M30 14L18 30" stroke="currentColor" strokeWidth="2" />
    <path d="M34 14L46 30" stroke="currentColor" strokeWidth="2" />
    <path d="M18 34L22 50" stroke="currentColor" strokeWidth="2" />
    <path d="M30 34L22 50" stroke="currentColor" strokeWidth="2" />
    <path d="M34 34L42 50" stroke="currentColor" strokeWidth="2" />
    <path d="M46 34L42 50" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="12" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone Multi-Agente - Nós Conectados
export const MultiAgentIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="14" r="5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="14" cy="50" r="5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M18 17L27 28" stroke="currentColor" strokeWidth="2" />
    <path d="M46 17L37 28" stroke="currentColor" strokeWidth="2" />
    <path d="M18 47L27 36" stroke="currentColor" strokeWidth="2" />
    <path d="M46 47L37 36" stroke="currentColor" strokeWidth="2" />
    <path d="M32 26L32 20M32 44L32 38" stroke="currentColor" strokeWidth="2" />
    <path d="M26 32L20 32M44 32L38 32" stroke="currentColor" strokeWidth="2" />
  </svg>
)

// Ícone Embeddings - Vetores/Camadas
export const EmbeddingsIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="12" y="12" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <rect x="12" y="28" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.25" />
    <rect x="12" y="44" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.35" />
    <path d="M16 16L20 32M24 16L28 32M32 16L36 32M40 16L44 32M48 16L52 32" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 32L20 48M24 32L28 48M32 32L36 48M40 32L44 48M48 32L52 48" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
)

// Ícone Base de Conhecimento - Database/Livros
export const KnowledgeBaseIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="14" y="10" width="36" height="44" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <path d="M14 20H50M14 30H50M14 40H50" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="20" cy="15" r="2" fill="currentColor" />
    <circle cx="26" cy="15" r="2" fill="currentColor" />
    <circle cx="32" cy="15" r="2" fill="currentColor" />
    <rect x="20" y="24" width="24" height="3" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="20" y="34" width="18" height="3" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="20" y="44" width="20" height="3" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone Servidor - Server/Cloud
export const ServerIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="10" y="12" width="44" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <rect x="10" y="28" width="44" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <rect x="10" y="44" width="44" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
    <circle cx="25" cy="18" r="2" fill="currentColor" />
    <circle cx="18" cy="34" r="2" fill="currentColor" />
    <circle cx="25" cy="34" r="2" fill="currentColor" />
    <circle cx="18" cy="50" r="2" fill="currentColor" />
    <circle cx="25" cy="50" r="2" fill="currentColor" />
    <rect x="35" y="16" width="14" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="35" y="32" width="14" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="35" y="48" width="14" height="4" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone Dashboard - Painel Administrativo
export const DashboardIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M8 18H56" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="14" cy="13" r="1.5" fill="currentColor" />
    <circle cx="20" cy="13" r="1.5" fill="currentColor" />
    <circle cx="26" cy="13" r="1.5" fill="currentColor" />
    <rect x="14" y="26" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <rect x="30" y="34" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <rect x="46" y="30" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.25" />
  </svg>
)

// Ícone Modular - Blocos Conectáveis
export const ModularIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="10" y="10" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <rect x="36" y="10" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <rect x="10" y="36" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <rect x="36" y="36" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <path d="M28 19H36" stroke="currentColor" strokeWidth="2.5" />
    <path d="M19 28V36" stroke="currentColor" strokeWidth="2.5" />
    <path d="M45 28V36" stroke="currentColor" strokeWidth="2.5" />
    <path d="M28 45H36" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="19" cy="19" r="3" fill="currentColor" />
    <circle cx="45" cy="19" r="3" fill="currentColor" />
    <circle cx="19" cy="45" r="3" fill="currentColor" />
    <circle cx="45" cy="45" r="3" fill="currentColor" />
  </svg>
)
