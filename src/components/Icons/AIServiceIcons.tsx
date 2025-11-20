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

// Ícone VR Headset - Óculos VR
export const VRHeadsetIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="8"
      y="22"
      width="48"
      height="20"
      rx="10"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="currentColor"
      opacity="0.1"
    />
    <circle cx="24" cy="32" r="7" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="40" cy="32" r="7" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M31 32H33"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 22L14 18C14 18 16 14 20 14H44C48 14 50 18 50 18L52 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 32L4 36C4 36 2 38 2 42V46C2 48 4 50 6 50H10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M56 32L60 36C60 36 62 38 62 42V46C62 48 60 50 58 50H54"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="32" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="40" cy="32" r="3" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone AR (Realidade Aumentada) - Câmera com Overlay
export const ARIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="10"
      y="18"
      width="44"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle
      cx="32"
      cy="34"
      r="8"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle cx="32" cy="34" r="4" fill="currentColor" opacity="0.3" />
    <path
      d="M20 18L24 12H40L44 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="46" cy="24" r="2" fill="currentColor" />
    <path
      d="M16 26L16 22L20 22M48 22L44 22L44 26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <path
      d="M20 46L16 46L16 42M44 42L44 46L48 46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
)

// Ícone Game Engine - Unreal/Unity
export const GameEngineIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8L52 20V44L32 56L12 44V20L32 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.1"
    />
    <path
      d="M32 8V32M32 32L12 20M32 32L52 20M32 32V56M32 56L12 44M32 56L52 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="32" cy="8" r="3" fill="currentColor" />
    <circle cx="12" cy="20" r="3" fill="currentColor" />
    <circle cx="52" cy="20" r="3" fill="currentColor" />
    <circle cx="12" cy="44" r="3" fill="currentColor" />
    <circle cx="52" cy="44" r="3" fill="currentColor" />
    <circle cx="32" cy="56" r="3" fill="currentColor" />
  </svg>
)

// Ícone Treinamento Policial - Escudo com estrela
export const PoliceTrainingIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8C32 8 20 12 12 12C12 12 12 28 12 36C12 44 20 56 32 56C44 56 52 44 52 36C52 28 52 12 52 12C44 12 32 8 32 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.1"
    />
    <path
      d="M32 20L34.5 27.5H42.5L36 32L38.5 39.5L32 35L25.5 39.5L28 32L21.5 27.5H29.5L32 20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
    <path d="M32 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
)

// Ícone Tour Arquitetônico - Casa com detalhes
export const ArchitectureTourIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 28L32 12L52 28V52C52 54 50 56 48 56H16C14 56 12 54 12 52V28Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.1"
    />
    <path
      d="M8 28L32 8L56 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="26" y="40" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <circle cx="35" cy="48" r="1.5" fill="currentColor" />
    <rect x="16" y="32" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <rect x="40" y="32" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M20 32V40M16 36H24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M44 32V40M40 36H48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
)

// Ícone Impressora 3D
export const Printer3DIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="12" y="14" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="16" y="22" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 30H44M20 34H44M20 38H44" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <path d="M24 46L32 50L40 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="18" r="2" fill="currentColor" opacity="0.5" />
    <path d="M28 54L32 56L36 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// Ícone Materiais Técnicos - Estrutura Molecular
export const MaterialsIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="18" cy="40" r="5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <circle cx="46" cy="40" r="5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <path d="M30 26L22 36M34 26L42 36M20 44L28 50M44 44L36 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 14L32 10M38 22L41 19M26 22L23 19" stroke="currentColor" strokeWidth="2" opacity="0.4" />
  </svg>
)

// Ícone Eletrônica Embarcada - Chip/Circuito
export const EmbeddedElectronicsIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="20" y="20" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="26" y="26" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <path d="M20 28H16M20 32H16M20 36H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 28H48M44 32H48M44 36H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 20V16M32 20V16M36 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 44V48M32 44V48M36 44V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// Ícone Microcontrolador - Arduino/Chip
export const MicrocontrollerIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="18" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="22" y="24" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M24 18V14M28 18V14M32 18V14M36 18V14M40 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 46V50M28 46V50M32 46V50M36 46V50M40 46V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="28" r="1.5" fill="currentColor" />
    <circle cx="38" cy="28" r="1.5" fill="currentColor" />
    <path d="M26 32H38M26 36H38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
)

// Ícone Sensores - Detector/Sensor
export const SensorIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M32 16V20M32 44V48M16 32H20M44 32H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M21 21L24 24M40 40L43 43M43 21L40 24M24 40L21 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
  </svg>
)

// Ícone Feedback Haptic - Vibração/Ondas
export const HapticIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="24" y="16" width="16" height="32" rx="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <path d="M32 24V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 28C14 28 14 32 16 32C18 32 18 28 20 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M44 28C46 28 46 32 48 32C50 32 50 28 52 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M12 36C14 36 14 40 16 40C18 40 18 36 20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M44 36C46 36 46 40 48 40C50 40 50 36 52 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone Calibração - Alvo/Mira
export const CalibrationIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.05" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M32 8V14M32 50V56M8 32H14M50 32H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 18L22 22M42 42L46 46M46 18L42 22M22 42L18 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
)

// Ícone Firmware - Código/Programação
export const FirmwareIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.05" />
    <path d="M20 24L26 30L20 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 36H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 42H44M20 46H36" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <circle cx="40" cy="20" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="46" cy="20" r="2" fill="currentColor" opacity="0.5" />
  </svg>
)

// Ícone Pistola Simulada
export const PistolIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cano principal */}
    <rect x="8" y="24" width="28" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="8" y="26.5" width="28" height="3" rx="1" fill="currentColor" opacity="0.15" />

    {/* Slide/Ferrolho */}
    <path d="M36 20H50C51.1046 20 52 20.8954 52 22V30C52 31.1046 51.1046 32 50 32H36V20Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <rect x="38" y="22" width="10" height="2" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="38" y="28" width="8" height="1.5" rx="0.75" fill="currentColor" opacity="0.25" />

    {/* Mira frontal e traseira */}
    <rect x="33" y="18" width="2.5" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="47" y="17" width="2.5" height="5" rx="1" fill="currentColor" opacity="0.5" />

    {/* Frame/Armação */}
    <path d="M36 32V34H40V46C40 47.6569 38.6569 49 37 49C35.3431 49 34 47.6569 34 46V36C34 33.7909 34.8954 32 36 32Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" strokeLinejoin="round" />

    {/* Empunhadura texturizada */}
    <path d="M34 38C34 36.8954 34.8954 36 36 36H44C45.1046 36 46 36.8954 46 38V50C46 52.2091 44.2091 54 42 54C39.7909 54 38 52.2091 38 50V40C38 38.8954 36.8954 38 36 38H34Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />

    {/* Textura grip */}
    <line x1="40" y1="40" x2="40" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="42" y1="40" x2="42" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />

    {/* Guarda-mato/Trigger guard */}
    <ellipse cx="33" cy="36" r="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />

    {/* Gatilho */}
    <rect x="31" y="35" width="3" height="5" rx="1.5" fill="currentColor" opacity="0.4" />

    {/* Magazine release */}
    <circle cx="44" cy="34" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
)

// Ícone Taser
export const TaserIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Corpo principal superior */}
    <path d="M18 22H48C49.6569 22 51 23.3431 51 25V29C51 30.6569 49.6569 32 48 32H18C16.3431 32 15 30.6569 15 29V25C15 23.3431 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />

    {/* Trilho superior tech */}
    <rect x="20" y="22" width="26" height="1.5" rx="0.75" fill="currentColor" opacity="0.3" />

    {/* Eletrodos frontais */}
    <circle cx="12" cy="24" r="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="30" r="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <line x1="14.5" y1="24" x2="15" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="14.5" y1="30" x2="15" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    {/* Raios elétricos */}
    <path d="M8 22L10 24L8 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    <path d="M8 28L10 30L8 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

    {/* Display/LEDs de status */}
    <rect x="22" y="25" width="8" height="4" rx="1" fill="currentColor" opacity="0.15" />
    <circle cx="24" cy="27" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="26.5" cy="27" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="29" cy="27" r="0.8" fill="currentColor" opacity="0.5" />

    {/* Compartimento de cartucho */}
    <rect x="32" y="24" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    <line x1="34" y1="27" x2="40" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    {/* Empunhadura moderna */}
    <path d="M38 32C38 32 38 34 38 36V48C38 50 36.5 52 35 53C33.5 54 32 53 32 51V40C32 36 34 34 36 32H38Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" strokeLinejoin="round" strokeLinecap="round" />

    {/* Textura empunhadura */}
    <path d="M34 40L34 50M36 40L36 50" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />

    {/* Gatilho moderno */}
    <path d="M32 36C32 36 30 37 30 39C30 41 31 42 32 42C33 42 33.5 41 33.5 40C33.5 38 32 36 32 36Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />

    {/* Bateria traseira */}
    <rect x="44" y="24" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <rect x="45" y="26" width="3" height="1" rx="0.5" fill="currentColor" opacity="0.4" />

    {/* Trilho de acessórios */}
    <rect x="18" y="32" width="22" height="1" rx="0.5" fill="currentColor" opacity="0.2" />
  </svg>
)

// Ícone Submetralhadora
export const SubmachineIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cano com heat shield */}
    <rect x="6" y="25" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="6" y="26.5" width="32" height="3" rx="1" fill="currentColor" opacity="0.15" />

    {/* Ventilação do cano */}
    <line x1="12" y1="25" x2="12" y2="31" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="16" y1="25" x2="16" y2="31" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="20" y1="25" x2="20" y2="31" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="24" y1="25" x2="24" y2="31" stroke="currentColor" strokeWidth="1" opacity="0.2" />

    {/* Muzzle/Bocal */}
    <circle cx="6" cy="28" r="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />

    {/* Receiver/Corpo principal */}
    <path d="M38 19H52C53.6569 19 55 20.3431 55 22V28C55 29.6569 53.6569 31 52 31H38V19Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />

    {/* Trilho Picatinny superior */}
    <rect x="38" y="17" width="16" height="2" rx="0.5" fill="currentColor" opacity="0.3" />
    <path d="M40 17.5L40 19M43 17.5L43 19M46 17.5L46 19M49 17.5L49 19M52 17.5L52 19" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />

    {/* Mira frontal e traseira */}
    <rect x="36" y="16" width="2" height="4" rx="0.8" fill="currentColor" opacity="0.5" />
    <path d="M51 15H53V19H51V15Z M52 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" opacity="0.4" />

    {/* Ejection port */}
    <rect x="42" y="21" width="8" height="3" rx="1" fill="currentColor" opacity="0.2" />
    <circle cx="44" cy="22.5" r="0.8" fill="currentColor" opacity="0.3" />

    {/* Charging handle */}
    <rect x="48" y="27" width="4" height="2" rx="0.8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />

    {/* Magazine bem */}
    <rect x="42" y="31" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <line x1="44" y1="34" x2="50" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="44" y1="37" x2="50" y2="37" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="44" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="44" y1="43" x2="50" y2="43" stroke="currentColor" strokeWidth="1" opacity="0.2" />

    {/* Pistol grip/Empunhadura */}
    <path d="M36 31C36 31 34 32 34 34V46C34 48.5 32.5 51 30.5 52.5C28.5 54 27 53 27 51V40C27 36 30 33 33 31H36Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" strokeLinejoin="round" strokeLinecap="round" />

    {/* Textura grip */}
    <path d="M30 38L30 48M32 38L32 48" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />

    {/* Trigger guard */}
    <ellipse cx="28" cy="34" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />

    {/* Gatilho */}
    <rect x="26" y="33" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.4" />

    {/* Stock/Coronha retrátil */}
    <rect x="55" y="22" width="2" height="6" rx="0.8" fill="currentColor" opacity="0.3" />
    <line x1="57" y1="23" x2="57" y2="29" stroke="currentColor" strokeWidth="4" opacity="0.15" />
    <line x1="59" y1="24" x2="59" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.2" />

    {/* Selector switch */}
    <circle cx="38" cy="28" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
)

// Ícone Ferramenta Industrial
export const IndustrialToolIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Chave ajustável principal */}
    <path d="M14 38L24 28L28 32L18 42L14 38Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" opacity="0.15" />

    {/* Corpo da chave com detalhes */}
    <rect x="24" y="24" width="18" height="8" rx="1" transform="rotate(-45 24 24)" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />

    {/* Mandíbula fixa */}
    <path d="M34 18L40 12L44 16L38 22L34 18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" opacity="0.2" />

    {/* Mandíbula móvel */}
    <path d="M38 22L44 16L46 18L40 24L38 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" opacity="0.15" />

    {/* Parafuso de ajuste com rosca */}
    <circle cx="29" cy="29" r="3.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <circle cx="29" cy="29" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M27 29L31 29M29 27L29 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Marcações de escala */}
    <path d="M20 32L22 30M18 36L20 34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

    {/* Chave de boca (segunda ferramenta) */}
    <rect x="42" y="38" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" />
    <circle cx="44" cy="41" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
    <circle cx="56" cy="41" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />

    {/* Sensor digital integrado */}
    <rect x="46" y="39.5" width="8" height="3" rx="0.5" fill="currentColor" opacity="0.2" />
    <rect x="47" y="40.2" width="2" height="1.6" rx="0.3" fill="currentColor" opacity="0.4" />
    <rect x="49.5" y="40.2" width="2" height="1.6" rx="0.3" fill="currentColor" opacity="0.4" />
    <rect x="52" y="40.2" width="1.5" height="1.6" rx="0.3" fill="currentColor" opacity="0.4" />

    {/* LED de status */}
    <circle cx="32" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="14" r="1" fill="currentColor" opacity="0.5" />

    {/* Soquete/Socket */}
    <circle cx="14" cy="52" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <path d="M12 52L16 52M14 50L14 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <circle cx="14" cy="52" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />

    {/* Parafusadeira/Furadeira elétrica */}
    <rect x="40" y="48" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <circle cx="58" cy="52" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <circle cx="58" cy="52" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />

    {/* Gatilho da parafusadeira */}
    <rect x="44" y="56" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />

    {/* Display LCD */}
    <rect x="42" y="50" width="6" height="4" rx="0.5" fill="currentColor" opacity="0.2" />
    <path d="M43 51L43 53M44.5 51L44.5 53M46 51L46 53" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

    {/* Indicadores de precisão */}
    <path d="M24 12L26 10M28 12L30 10M32 12L34 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
  </svg>
)
