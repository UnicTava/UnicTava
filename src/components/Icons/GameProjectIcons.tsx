import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// Ícone Minigame Corporativo Gamificado - Troféu com Medalha
export const CorporateGameIcon: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Base do troféu */}
    <path
      d="M20 50H44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="26"
      y="44"
      width="12"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 44V36"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Corpo do troféu */}
    <path
      d="M18 12H46L44 24C44 30 38.5 36 32 36C25.5 36 20 30 20 24L18 12Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 16H42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* Alças decorativas */}
    <path
      d="M18 14C18 14 14 14 12 16C10 18 10 22 12 24C14 26 18 26 18 26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 14C46 14 50 14 52 16C54 18 54 22 52 24C50 26 46 26 46 26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Estrela central */}
    <path
      d="M32 18L33.2 22L37 23L33.2 24L32 28L30.8 24L27 23L30.8 22L32 18Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
)

// Ícone Jogo Educacional Interativo - Graduação com Controle
export const EducationalGameIcon: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Chapéu de formatura */}
    <path
      d="M32 12L10 22L32 32L54 22L32 12Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 26V36C18 36 22 42 32 42C42 42 46 36 46 36V26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M54 22V32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="54" cy="34" r="2.5" fill="currentColor" />
    {/* Controle/Gamepad */}
    <rect
      x="20"
      y="46"
      width="24"
      height="10"
      rx="5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* D-pad */}
    <path
      d="M27 51H29M24 48.5V50.5M24 51.5V53.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Botões */}
    <circle cx="36" cy="49" r="1.5" fill="currentColor" />
    <circle cx="40" cy="51" r="1.5" fill="currentColor" />
    <circle cx="36" cy="53" r="1.5" fill="currentColor" />
    <circle cx="32" cy="51" r="1.5" fill="currentColor" />
  </svg>
)

// Ícone Multiplayer Colaborativo - Rede de Jogadores
export const MultiplayerGameIcon: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Jogador central superior */}
    <circle
      cx="32"
      cy="16"
      r="6"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M24 32C24 28 27 24 32 24C37 24 40 28 40 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Jogador esquerda */}
    <circle
      cx="14"
      cy="32"
      r="5"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M8 44C8 41 10 38 14 38C18 38 20 41 20 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Jogador direita */}
    <circle
      cx="50"
      cy="32"
      r="5"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M44 44C44 41 46 38 50 38C54 38 56 41 56 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Jogador inferior */}
    <circle
      cx="32"
      cy="46"
      r="5"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M26 56C26 54 28 52 32 52C36 52 38 54 38 56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Conexões em rede */}
    <path
      d="M27 26L18 30M37 26L46 30M20 38L27 42M44 38L37 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 3"
      opacity="0.6"
    />
    {/* Hub central */}
    <circle
      cx="32"
      cy="32"
      r="4"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
)

// Ícone Jogo Narrativo 3D - Clapperboard com Play
export const NarrativeGameIcon: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Claquete base */}
    <rect
      x="10"
      y="24"
      width="44"
      height="32"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Topo da claquete */}
    <path
      d="M10 24L14 14L50 14L54 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Listras da claquete */}
    <path
      d="M20 14L16 24M28 14L24 24M36 14L32 24M44 14L40 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Detalhes */}
    <path
      d="M16 30H28M16 36H24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* Play button central */}
    <circle
      cx="40"
      cy="42"
      r="10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37 38L37 46L45 42L37 38Z"
      fill="currentColor"
    />
  </svg>
)
