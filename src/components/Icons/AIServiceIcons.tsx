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

// Ícone PC - Desktop Computer
export const PCIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Monitor principal */}
    <rect x="8" y="10" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />

    {/* Tela interna */}
    <rect x="11" y="13" width="42" height="26" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />

    {/* Brilho da tela */}
    <path d="M14 16L48 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <path d="M14 20L40 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

    {/* Base do monitor */}
    <path d="M28 42L28 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 42L36 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

    {/* Suporte/pé do monitor */}
    <rect x="20" y="48" width="24" height="4" rx="2" fill="currentColor" opacity="0.2" />

    {/* Detalhes da moldura */}
    <circle cx="32" cy="44" r="1.5" fill="currentColor" opacity="0.4" />

    {/* Elementos de interface na tela */}
    <rect x="15" y="24" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
    <rect x="26" y="24" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
    <rect x="37" y="24" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
  </svg>
)

// Ícone Simulação Operacional - Engrenagens/Industrial
export const OperationalSimIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Engrenagem principal grande */}
    <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.08" />
    <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
    <circle cx="32" cy="32" r="5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />

    {/* Dentes principais - 8 dentes */}
    <rect x="30" y="10" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.6" />
    <rect x="30" y="47" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.6" />
    <rect x="10" y="30" width="7" height="4" rx="1.5" fill="currentColor" opacity="0.6" />
    <rect x="47" y="30" width="7" height="4" rx="1.5" fill="currentColor" opacity="0.6" />

    {/* Dentes diagonais */}
    <rect x="19" y="15" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.55" transform="rotate(-45 21 18.5)" />
    <rect x="41" y="15" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.55" transform="rotate(45 43 18.5)" />
    <rect x="19" y="42" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.55" transform="rotate(45 21 45.5)" />
    <rect x="41" y="42" width="4" height="7" rx="1.5" fill="currentColor" opacity="0.55" transform="rotate(-45 43 45.5)" />

    {/* Engrenagem menor conectada */}
    <circle cx="52" cy="16" r="9" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.08" />
    <circle cx="52" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />
    <circle cx="52" cy="16" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.12" />

    {/* Dentes engrenagem menor - 6 dentes */}
    <rect x="50.5" y="5" width="3" height="5" rx="1" fill="currentColor" opacity="0.55" />
    <rect x="50.5" y="22" width="3" height="5" rx="1" fill="currentColor" opacity="0.55" />
    <rect x="60" y="14.5" width="5" height="3" rx="1" fill="currentColor" opacity="0.55" />
    <rect x="41" y="14.5" width="5" height="3" rx="1" fill="currentColor" opacity="0.55" />
    <rect x="56" y="9" width="3" height="5" rx="1" fill="currentColor" opacity="0.5" transform="rotate(45 57.5 11.5)" />
    <rect x="45" y="20" width="3" height="5" rx="1" fill="currentColor" opacity="0.5" transform="rotate(-45 46.5 22.5)" />

    {/* Parafusos centrais */}
    <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="52" cy="16" r="1.5" fill="currentColor" opacity="0.5" />

    {/* Detalhes industriais */}
    <path d="M12 52L16 52M12 56L16 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <circle cx="14" cy="54" r="1.5" fill="currentColor" opacity="0.4" />

    {/* Linha de conexão entre engrenagens */}
    <path d="M42 22L48 18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.25" />
  </svg>
)

// Ícone Simulação Educacional - Graduação/Conhecimento
export const EducationalSimIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Capelo de formatura - topo */}
    <path d="M6 22L32 12L58 22L32 32L6 22Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" strokeLinejoin="round" />

    {/* Linha central do capelo */}
    <line x1="32" y1="12" x2="32" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.2" />

    {/* Detalhes do capelo */}
    <path d="M10 24L14 26M22 20L26 22M38 22L42 20M50 26L54 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

    {/* Base do capelo - lateral */}
    <path d="M12 26L12 38C12 38 18 44 32 44C46 44 52 38 52 38V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />

    {/* Sombra interna da lateral */}
    <path d="M16 28C16 28 22 32 32 32C42 32 48 28 48 28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.2" />

    {/* Tassel (borla) no topo */}
    <line x1="32" y1="12" x2="32" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="5" r="2.5" fill="currentColor" opacity="0.7" />

    {/* Franjas da borla */}
    <path d="M32 5L28 3M32 5L36 3M32 5L29 7M32 5L35 7M32 5L30 8M32 5L34 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

    {/* Livro aberto na base */}
    <rect x="18" y="48" width="28" height="2" rx="1" fill="currentColor" opacity="0.15" />
    <path d="M18 48L18 58C18 58 22 56 28 56C32 56 32 58 32 58M32 58C32 58 32 56 36 56C42 56 46 58 46 58V48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Divisor central do livro */}
    <line x1="32" y1="48" x2="32" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

    {/* Páginas do livro - esquerda */}
    <path d="M22 50L28 50M22 52L27 52M22 54L26 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />

    {/* Páginas do livro - direita */}
    <path d="M36 50L42 50M37 52L42 52M38 54L42 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />

    {/* Marcador de página */}
    <rect x="31" y="46" width="2" height="4" rx="0.5" fill="currentColor" opacity="0.25" />

    {/* Estrelas de conhecimento */}
    <circle cx="8" cy="40" r="1.2" fill="currentColor" opacity="0.4" />
    <circle cx="56" cy="40" r="1.2" fill="currentColor" opacity="0.4" />
    <circle cx="10" cy="50" r="0.8" fill="currentColor" opacity="0.3" />
  </svg>
)

// Ícone Simulação Militar - Estrela Tática
export const MilitarySimIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Estrela militar (5 pontas) - mais definida */}
    <path d="M32 8L37 24L54 24L40 34L45 50L32 40L19 50L24 34L10 24L27 24L32 8Z"
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" strokeLinejoin="round" />

    {/* Linhas internas da estrela */}
    <path d="M32 8L32 40" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <path d="M27 24L40 34M37 24L24 34" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />

    {/* Círculos concêntricos centrais */}
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />

    {/* Mira tática - cruz principal */}
    <line x1="32" y1="26" x2="32" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="38" x2="32" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="26" y1="32" x2="22" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

    {/* Marcadores de mira diagonais */}
    <line x1="28" y1="28" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="36" y1="28" x2="38" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="28" y1="36" x2="26" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="36" y1="36" x2="38" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

    {/* Pontos cardinais nas pontas da estrela */}
    <circle cx="32" cy="8" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="54" cy="24" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="45" cy="50" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="19" cy="50" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="10" cy="24" r="2" fill="currentColor" opacity="0.6" />

    {/* Linhas táticas de rastreamento */}
    <path d="M32 32L36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.3" />
    <path d="M32 32L48 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.3" />
    <path d="M32 32L42 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.3" />
    <path d="M32 32L22 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.3" />
    <path d="M32 32L16 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.3" />

    {/* Centro focal */}
    <circle cx="32" cy="32" r="1.5" fill="currentColor" opacity="0.7" />

    {/* Indicadores de canto */}
    <path d="M8 8L10 8L10 10M56 8L54 8L54 10M8 56L10 56L10 54M56 56L54 56L54 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
  </svg>
)

// Ícone Simulação Judiciária - Martelo + Balança (Melhorado)
export const JudicialSimIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Martelo do juiz - cabeça principal */}
    <rect x="36" y="8" width="20" height="10" rx="2.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" />
    
    {/* Detalhes internos do martelo */}
    <rect x="38" y="10.5" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.2" />
    <line x1="40" y1="9" x2="40" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <line x1="52" y1="9" x2="52" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    
    {/* Cabo do martelo - com textura */}
    <rect x="32" y="13" width="7" height="26" rx="2.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" />
    
    {/* Linhas de grip no cabo */}
    <line x1="32.5" y1="18" x2="38.5" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <line x1="32.5" y1="23" x2="38.5" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <line x1="32.5" y1="28" x2="38.5" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <line x1="32.5" y1="33" x2="38.5" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    
    {/* Base do martelo (podium) */}
    <rect x="24" y="37" width="26" height="5" rx="2.5" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="2" />
    <rect x="26" y="39" width="22" height="2" rx="1" fill="currentColor" opacity="0.25" />
    
    {/* Ondas de impacto */}
    <path d="M20 38C20 38 22 36 24 36M50 36C52 36 54 38 54 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

    {/* Balança da justiça - poste central */}
    <line x1="14" y1="46" x2="14" y2="57" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="14" cy="46" r="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    
    {/* Base da balança - três camadas */}
    <ellipse cx="14" cy="57" rx="7" ry="2.5" fill="currentColor" opacity="0.2" />
    <ellipse cx="14" cy="56.5" rx="5" ry="1.5" fill="currentColor" opacity="0.25" />
    <rect x="7" y="57" width="14" height="3" rx="1.5" fill="currentColor" opacity="0.18" />
    
    {/* Braço da balança - com detalhes */}
    <line x1="4" y1="50" x2="24" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="5" y1="50" x2="23" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    
    {/* Ponto de equilíbrio central */}
    <circle cx="14" cy="50" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="14" cy="50" r="1" fill="currentColor" opacity="0.6" />

    {/* Correntes da balança - esquerda */}
    <line x1="4" y1="50" x2="4" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <circle cx="4" cy="51" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="4" cy="53" r="0.8" fill="currentColor" opacity="0.3" />
    
    {/* Correntes da balança - direita */}
    <line x1="24" y1="50" x2="24" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <circle cx="24" cy="51" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="24" cy="53" r="0.8" fill="currentColor" opacity="0.3" />

    {/* Pratos da balança - mais detalhados */}
    <ellipse cx="4" cy="54" rx="4" ry="1.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" />
    <ellipse cx="24" cy="54" rx="4" ry="1.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.12" />
    
    {/* Bordas dos pratos */}
    <path d="M1 54C1 54 1 55.5 4 55.5C7 55.5 7 54 7 54" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <path d="M21 54C21 54 21 55.5 24 55.5C27 55.5 27 54 27 54" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />

    {/* Livro de leis (canto superior direito) */}
    <rect x="50" y="46" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <line x1="52" y1="50" x2="58" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="52" y1="53" x2="57" y2="53" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="52" y1="56" x2="58" y2="56" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    
    {/* Marcador de página */}
    <rect x="54.5" y="46" width="1.5" height="8" fill="currentColor" opacity="0.3" />
    
    {/* Símbolos de parágrafo/artigo */}
    <circle cx="52" cy="48" r="1.2" fill="currentColor" opacity="0.35" />
    <circle cx="55" cy="48" r="1.2" fill="currentColor" opacity="0.35" />
  </svg>
)

// Ícone Simulação de Segurança - Escudo + Alerta (Melhorado)
export const SecuritySimIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Escudo principal - contorno externo */}
    <path d="M32 8C32 8 16 12 16 16C16 24 16 38 32 58C48 38 48 24 48 16C48 12 32 8 32 8Z"
      stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.12" strokeLinejoin="round" />
    
    {/* Escudo interno - segunda camada */}
    <path d="M32 12C32 12 20 15 20 18C20 24 20 36 32 52C44 36 44 24 44 18C44 15 32 12 32 12Z"
      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" strokeLinejoin="round" />

    {/* Divisão interna do escudo - cruz central */}
    <path d="M32 12L32 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    <path d="M20 26C24 26 28 26 32 26C36 26 40 26 44 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    
    {/* Quadrantes decorativos */}
    <circle cx="26" cy="20" r="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="38" cy="20" r="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="26" cy="32" r="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="38" cy="32" r="1.5" fill="currentColor" opacity="0.25" />

    {/* Símbolo de alerta/exclamação central - círculo externo */}
    <circle cx="32" cy="30" r="11" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />

    {/* Exclamação - linha principal */}
    <line x1="32" y1="23" x2="32" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    
    {/* Exclamação - ponto */}
    <circle cx="32" cy="36" r="2" fill="currentColor" />
    <circle cx="32" cy="36" r="1.2" fill="currentColor" opacity="0.5" />

    {/* Ondas de alerta emanando */}
    <path d="M24 22C22 24 20 26 19 28M40 22C42 24 44 26 45 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.3" />
    <path d="M24 38C22 40 20 42 19 44M40 38C42 40 44 42 45 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.3" />

    {/* Sistema de vigilância - câmera no topo */}
    <rect x="29" y="4" width="6" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    <circle cx="32" cy="6" r="1.5" fill="currentColor" opacity="0.4" />
    <path d="M30 4L32 2L34 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

    {/* Detalhes de proteção - laterais superiores */}
    <path d="M18 12L20 14M22 10L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    <path d="M46 12L44 14M42 10L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    
    {/* Escudos secundários nas laterais */}
    <path d="M12 20C12 20 10 21 10 22C10 24 10 28 14 32C14 32 12 28 12 24C12 22 12 20 12 20Z" 
      stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    <path d="M52 20C52 20 54 21 54 22C54 24 54 28 50 32C50 32 52 28 52 24C52 22 52 20 52 20Z" 
      stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />

    {/* Cruz de primeiros socorros (canto inferior direito) */}
    <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.12" />
    <line x1="52" y1="48" x2="52" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="48" y1="52" x2="56" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

    {/* Símbolo de fogo/emergência (canto inferior esquerdo) */}
    <path d="M12 48C12 48 14 44 16 44C18 44 18 46 18 48C18 52 16 54 14 54C12 54 10 52 10 50"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.1" />
    
    {/* Detalhes internos do fogo */}
    <path d="M14 48C14 48 15 46.5 15.5 46.5C16 46.5 16 47.5 16 48.5C16 50.5 15 51.5 14.5 51.5C14 51.5 13.5 50.5 13.5 49.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" fill="none" />
    
    {/* Cadeado de segurança na base do escudo */}
    <rect x="28" y="44" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.12" />
    <path d="M30 44C30 44 30 42 32 42C34 42 34 44 34 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="47" r="1.2" fill="currentColor" opacity="0.5" />
  </svg>
)

// Ícone Híbrido - PC + VR Combined
export const HybridIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Monitor/PC (lado esquerdo) */}
    <rect x="4" y="12" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <rect x="6" y="14" width="22" height="16" rx="1" fill="currentColor" opacity="0.05" />

    {/* Base do monitor */}
    <path d="M14 32L14 36M20 32L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="11" y="36" width="12" height="2" rx="1" fill="currentColor" opacity="0.2" />

    {/* VR Headset (lado direito) */}
    <path d="M34 16C34 14 36 12 40 12H48C52 12 54 14 54 16V22C54 24 52 26 48 26H40C36 26 34 24 34 22V16Z"
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />

    {/* Lentes do VR */}
    <circle cx="40" cy="19" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <circle cx="48" cy="19" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />

    {/* Alças do VR */}
    <path d="M34 19C32 19 30 20 28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <path d="M54 19C56 19 58 20 60 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

    {/* Símbolo de conexão/alternância no centro */}
    <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.05" />

    {/* Setas de alternância */}
    <path d="M28 30L32 26L36 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <path d="M36 34L32 38L28 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

    {/* Linhas de conexão */}
    <path d="M17 24L17 28L24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
    <path d="M44 26L44 30L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />

    {/* Indicador de sincronização */}
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.5" />

    {/* Detalhes adicionais */}
    <path d="M8 18L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <circle cx="38" cy="14" r="0.8" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="14" r="0.8" fill="currentColor" opacity="0.4" />
  </svg>
)

// Ícone de Gamificação - Formação Gamificada
export const GamificationIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Gamepad/Controle */}
    <path d="M18 24C16 24 14 26 14 28V36C14 38 16 40 18 40H22L26 44L30 40H34L38 44L42 40H46C48 40 50 38 50 36V28C50 26 48 24 46 24H18Z"
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* D-pad (esquerda) */}
    <line x1="20" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="23" y1="29" x2="23" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Botões (direita) */}
    <circle cx="40" cy="29" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="44" cy="33" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="36" cy="33" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="37" r="2" fill="currentColor" opacity="0.4" />
    
    {/* Estrelas de conquista */}
    <path d="M32 12L33.5 16.5L38 18L33.5 19.5L32 24L30.5 19.5L26 18L30.5 16.5L32 12Z" 
      fill="currentColor" opacity="0.5" />
    <path d="M48 14L49 17L52 18L49 19L48 22L47 19L44 18L47 17L48 14Z" 
      fill="currentColor" opacity="0.3" />
    <path d="M16 14L17 17L20 18L17 19L16 22L15 19L12 18L15 17L16 14Z" 
      fill="currentColor" opacity="0.3" />
    
    {/* Barra de progresso/nível */}
    <rect x="20" y="50" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" 
      fill="currentColor" opacity="0.1" />
    <rect x="21" y="51" width="16" height="2" rx="1" fill="currentColor" opacity="0.5" />
    
    {/* Pontos */}
    <circle cx="48" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="52" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="56" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
)

// Ícone de Sala de Aula Virtual 3D
export const VirtualClassroomIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Quadro/Tela principal */}
    <rect x="10" y="12" width="44" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.1" />
    <rect x="12" y="14" width="40" height="24" rx="1" fill="currentColor" opacity="0.05" />
    
    {/* Conteúdo no quadro - gráficos */}
    <path d="M16 30L22 24L28 28L34 22L40 26L46 20" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    
    {/* Play button (vídeo) */}
    <circle cx="32" cy="26" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <path d="M30 23L36 26L30 29Z" fill="currentColor" opacity="0.5" />
    
    {/* Avatares/Alunos */}
    <circle cx="16" cy="50" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M12 56C12 54 14 52 16 52C18 52 20 54 20 56" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" fill="currentColor" opacity="0.1" />
    
    <circle cx="32" cy="50" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M28 56C28 54 30 52 32 52C34 52 36 54 36 56" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" fill="currentColor" opacity="0.1" />
    
    <circle cx="48" cy="50" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M44 56C44 54 46 52 48 52C50 52 52 54 52 56" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" fill="currentColor" opacity="0.1" />
    
    {/* Indicadores de interação */}
    <circle cx="20" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="44" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
)

// Ícone de Laboratório e Práticas Simuladas
export const LabSimulationIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Béquer/Frasco Erlenmeyer */}
    <path d="M24 12L24 28L18 44C17 46 18 48 20 48H32C34 48 35 46 34 44L28 28L28 12"
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    <line x1="22" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Líquido dentro */}
    <path d="M20 40C20 40 22 38 26 38C30 38 32 40 32 40L32 44C32 45 31 46 30 46H22C21 46 20 45 20 44L20 40Z"
      fill="currentColor" opacity="0.3" />
    
    {/* Bolhas */}
    <circle cx="24" cy="42" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="28" cy="40" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="26" cy="44" r="1" fill="currentColor" opacity="0.4" />
    
    {/* Microscópio */}
    <path d="M44 20L44 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="44" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M40 32L48 32L50 36L38 36Z" stroke="currentColor" strokeWidth="2" fill="currentColor" 
      opacity="0.1" strokeLinejoin="round" />
    
    {/* Lâmina */}
    <rect x="40" y="38" width="8" height="2" rx="1" fill="currentColor" opacity="0.3" />
    
    {/* Base */}
    <rect x="36" y="46" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
    
    {/* Marcações/medidas */}
    <line x1="26" y1="18" x2="26" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="26" y1="24" x2="26" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="26" y1="30" x2="26" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    
    {/* Detalhes técnicos */}
    <circle cx="52" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    <line x1="52" y1="22" x2="52" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="50" y1="24" x2="54" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </svg>
)

// Ícone de Treinamento Operacional
export const OperationalTrainingIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Engrenagem grande */}
    <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" />
    <circle cx="28" cy="28" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    
    {/* Dentes da engrenagem grande */}
    <rect x="26" y="12" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect x="26" y="40" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect x="12" y="26" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect x="40" y="26" width="4" height="4" fill="currentColor" opacity="0.4" />
    
    {/* Dentes diagonais */}
    <rect x="18" y="16" width="3" height="3" transform="rotate(-45 19.5 17.5)" fill="currentColor" opacity="0.3" />
    <rect x="35" y="16" width="3" height="3" transform="rotate(45 36.5 17.5)" fill="currentColor" opacity="0.3" />
    <rect x="18" y="37" width="3" height="3" transform="rotate(45 19.5 38.5)" fill="currentColor" opacity="0.3" />
    <rect x="35" y="37" width="3" height="3" transform="rotate(-45 36.5 38.5)" fill="currentColor" opacity="0.3" />
    
    {/* Engrenagem pequena */}
    <circle cx="44" cy="44" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <circle cx="44" cy="44" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    
    {/* Dentes da engrenagem pequena */}
    <rect x="42.5" y="33" width="3" height="3" fill="currentColor" opacity="0.4" />
    <rect x="42.5" y="52" width="3" height="3" fill="currentColor" opacity="0.4" />
    <rect x="33" y="42.5" width="3" height="3" fill="currentColor" opacity="0.4" />
    <rect x="52" y="42.5" width="3" height="3" fill="currentColor" opacity="0.4" />
    
    {/* Ferramenta - Chave inglesa */}
    <path d="M12 48L20 56M12 48L8 52M20 56L16 60" stroke="currentColor" strokeWidth="2.5" 
      strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <circle cx="16" cy="52" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    
    {/* Indicadores de rotação */}
    <path d="M24 18C20 20 18 24 18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
      opacity="0.3" strokeDasharray="2 2" />
    <path d="M50 40C52 42 53 44 53 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" 
      opacity="0.3" strokeDasharray="2 2" />
  </svg>
)

// Ícone de Experiências Multimídia
export const MultimediaIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Frame de vídeo */}
    <rect x="8" y="12" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.1" />
    
    {/* Play button central */}
    <circle cx="32" cy="28" r="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <path d="M28 22L40 28L28 34Z" fill="currentColor" opacity="0.5" />
    
    {/* Ondas sonoras/narração (esquerda) */}
    <path d="M14 26C14 24 15 22 17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M14 28C14 28 14.5 28 15 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M14 30C14 32 15 34 17 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    
    {/* Animação 3D (direita) - cubo 3D */}
    <path d="M46 20L52 24L52 32L46 36L40 32L40 24Z" stroke="currentColor" strokeWidth="2" 
      strokeLinejoin="round" opacity="0.4" />
    <line x1="46" y1="20" x2="46" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <line x1="52" y1="24" x2="46" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <line x1="40" y1="24" x2="46" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    
    {/* Elementos interativos - cursor/click */}
    <circle cx="20" cy="18" r="2" fill="currentColor" opacity="0.4" />
    <path d="M18 16L20 14L22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" 
      strokeLinejoin="round" opacity="0.5" />
    
    {/* Barra de controles multimídia */}
    <rect x="12" y="48" width="40" height="6" rx="3" stroke="currentColor" strokeWidth="2" 
      fill="currentColor" opacity="0.1" />
    
    {/* Botões de controle */}
    <circle cx="18" cy="51" r="1.5" fill="currentColor" opacity="0.5" />
    <rect x="24" y="49" width="2" height="4" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="27" y="49" width="2" height="4" rx="1" fill="currentColor" opacity="0.4" />
    <circle cx="34" cy="51" r="1.5" fill="currentColor" opacity="0.5" />
    
    {/* Barra de progresso */}
    <line x1="40" y1="51" x2="48" y2="51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <circle cx="44" cy="51" r="2" fill="currentColor" opacity="0.5" />
  </svg>
)

// Ícone Aprendizagem Acelerada - Cérebro com raios
export const FastLearningIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cérebro */}
    <path d="M20 24C20 16 24 12 32 12C40 12 44 16 44 24C44 26 44 28 43 30C46 32 48 36 48 40C48 46 44 50 38 50C36 50 34 49 32 48C30 49 28 50 26 50C20 50 16 46 16 40C16 36 18 32 21 30C20 28 20 26 20 24Z" 
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Hemisférios cerebrais */}
    <path d="M32 14C32 14 32 48 32 48" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    
    {/* Circunvoluções */}
    <path d="M24 20C26 18 28 18 30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M34 20C36 18 38 18 40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M22 28C24 26 26 26 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M36 28C38 26 40 26 42 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M24 36C26 34 28 34 30 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M34 36C36 34 38 34 40 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    
    {/* Raios de velocidade ao redor */}
    <path d="M10 20L16 22M10 32L16 32M10 44L16 42" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <path d="M54 20L48 22M54 32L48 32M54 44L48 42" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    
    {/* Símbolo 3x no canto */}
    <circle cx="32" cy="56" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <text x="32" y="59" fontSize="8" fontWeight="bold" fill="currentColor" opacity="0.6" textAnchor="middle">3x</text>
  </svg>
)

// Ícone Maior Engajamento - Pessoa interagindo
export const EngagementIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pessoa central */}
    <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" />
    <path d="M20 38C20 32 25 28 32 28C39 28 44 32 44 38L44 48L20 48L20 38Z" 
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Braços levantados em participação */}
    <path d="M22 32L16 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 32L48 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Mãos */}
    <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    <circle cx="48" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    
    {/* Elementos interativos ao redor - cursor/click */}
    <path d="M8 12L12 10L10 14L8 12Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.4" strokeLinejoin="round" />
    <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    
    <path d="M56 12L52 10L54 14L56 12Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.4" strokeLinejoin="round" />
    <circle cx="54" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    
    {/* Gráfico de engajamento subindo */}
    <path d="M8 54L12 52L16 50L20 46L24 44" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <circle cx="8" cy="54" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="12" cy="52" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="50" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="20" cy="46" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="24" cy="44" r="2" fill="currentColor" opacity="0.6" />
    
    {/* Estrelas de conquista */}
    <path d="M52 44L54 48L58 48L55 51L56 55L52 53L48 55L49 51L46 48L50 48L52 44Z"
      stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.35" strokeLinejoin="round" />
  </svg>
)

// Ícone Adaptável - Blocos se reorganizando
export const AdaptableIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Grid de blocos que se adaptam */}
    <rect x="12" y="12" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.15" />
    <rect x="30" y="12" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.12" />
    <rect x="48" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" 
      fill="currentColor" opacity="0.1" />
    
    <rect x="12" y="30" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" 
      fill="currentColor" opacity="0.1" />
    <rect x="24" y="30" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.15" />
    <rect x="48" y="24" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="2" 
      fill="currentColor" opacity="0.12" />
    
    <rect x="12" y="42" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.12" />
    <rect x="30" y="48" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" 
      fill="currentColor" opacity="0.1" />
    <rect x="42" y="42" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.15" />
    
    {/* Setas de reorganização */}
    <path d="M27 19L29 19L28 17M37 19L35 19L36 17" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    <path d="M19 27L19 29L17 28M19 37L19 35L17 36" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    
    {/* Ícone de ajuste/config */}
    <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <path d="M52 49L52 55M49 52L55 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
)

// Ícone Redução de Custos - Cifrão com seta para baixo
export const CostReductionIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cifrão grande */}
    <path d="M32 10L32 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    
    {/* S do cifrão */}
    <path d="M42 18C42 14 38 12 32 12C26 12 22 14 22 18C22 22 26 24 32 26C38 28 42 30 42 34C42 38 38 40 32 40C26 40 22 38 22 34" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    
    {/* Círculo ao redor */}
    <circle cx="32" cy="26" r="20" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.2" />
    
    {/* Seta para baixo indicando redução */}
    <path d="M48 42L32 58L16 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
      fill="currentColor" opacity="0.15" />
    <path d="M32 48L32 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    
    {/* Moedas caindo */}
    <circle cx="14" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="50" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="10" cy="44" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="54" cy="48" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
    
    {/* Símbolos de menos */}
    <line x1="8" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <line x1="50" y1="18" x2="56" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
)

// Ícone Replicável e Escalável - Múltiplos usuários conectados
export const ScalableIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pessoa central grande */}
    <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
    <path d="M22 32C22 28 26 26 32 26C38 26 42 28 42 32L42 38L22 38L22 32Z" 
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.15" strokeLinejoin="round" />
    
    {/* Pessoas menores ao redor - esquerda superior */}
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M8 20C8 18 10 16 12 16C14 16 16 18 16 20L16 24L8 24L8 20Z" 
      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Direita superior */}
    <circle cx="52" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M48 20C48 18 50 16 52 16C54 16 56 18 56 20L56 24L48 24L48 20Z" 
      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Esquerda inferior */}
    <circle cx="12" cy="44" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M8 52C8 50 10 48 12 48C14 48 16 50 16 52L16 56L8 56L8 52Z" 
      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Direita inferior */}
    <circle cx="52" cy="44" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
    <path d="M48 52C48 50 50 48 52 48C54 48 56 50 56 52L56 56L48 56L48 52Z" 
      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
    
    {/* Linhas de conexão */}
    <path d="M16 16L26 22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.3" />
    <path d="M48 16L38 22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.3" />
    <path d="M16 48L26 36" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.3" />
    <path d="M48 48L38 36" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.3" />
    
    {/* Setas de multiplicação */}
    <path d="M24 8L26 6L28 8M36 8L38 6L40 8" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    <path d="M24 56L26 58L28 56M36 56L38 58L40 56" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
)

// Ícone Resultados Mensuráveis - Gráficos e estatísticas
export const MeasurableIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Prancheta/dashboard */}
    <rect x="10" y="8" width="44" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" 
      fill="currentColor" opacity="0.08" />
    <rect x="14" y="6" width="36" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
    
    {/* Gráfico de barras */}
    <rect x="16" y="40" width="6" height="14" rx="2" fill="currentColor" opacity="0.5" />
    <rect x="26" y="32" width="6" height="22" rx="2" fill="currentColor" opacity="0.6" />
    <rect x="36" y="24" width="6" height="30" rx="2" fill="currentColor" opacity="0.7" />
    <rect x="46" y="18" width="6" height="36" rx="2" fill="currentColor" opacity="0.8" />
    
    {/* Linha de tendência */}
    <path d="M19 43L29 35L39 27L49 21" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    
    {/* Pontos de dados */}
    <circle cx="19" cy="43" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="29" cy="35" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="39" cy="27" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="49" cy="21" r="2.5" fill="currentColor" opacity="0.6" />
    
    {/* Métricas/números no topo */}
    <rect x="16" y="12" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" 
      fill="currentColor" opacity="0.15" />
    <rect x="30" y="12" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" 
      fill="currentColor" opacity="0.15" />
    <rect x="44" y="12" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" 
      fill="currentColor" opacity="0.15" />
    
    {/* Símbolos de porcentagem */}
    <text x="21" y="16" fontSize="4" fontWeight="bold" fill="currentColor" opacity="0.5" textAnchor="middle">%</text>
    <text x="35" y="16" fontSize="4" fontWeight="bold" fill="currentColor" opacity="0.5" textAnchor="middle">★</text>
    <text x="49" y="16" fontSize="4" fontWeight="bold" fill="currentColor" opacity="0.5" textAnchor="middle">↑</text>
  </svg>
)
