# PRD - UnicTava Landing Page

## 📋 Visão Geral

Implementação de uma landing page para UnicTava baseada no design do Figma, focando em experiências 3D imersivas. A página será uma cópia fiel do design fornecido, utilizando Next.js 15 e styled-components.

**Design Reference:** [Figma - UnicTava](https://www.figma.com/proto/YY1nzSIKVUqyS3IcoXusjn/UnicTava?node-id=776-361)

## 🛠 Stack Técnica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Styled Components + CSS Modules
- **Fontes:** Archivo + Satoshi (Google Fonts)
- **Assets:** Imagens e SVGs extraídos do Figma
- **Deploy:** Preparado para Vercel

## 📐 Especificações de Design

### Layout Principal
- **Dimensões:** 1920x1080px (desktop)
- **Background Principal:** #050505
- **Estrutura:** Hero section de tela cheia

### 🎨 Paleta de Cores

```css
/* Backgrounds */
--bg-primary: #050505;
--bg-transparent: rgba(0, 0, 0, 0);

/* Textos */
--text-primary: #F6F6F6;
--text-secondary: #D1D1D1;
--text-white: #FFFFFF;

/* Gradientes */
--gradient-title: linear-gradient(90deg, #CFD8F6 0%, #534EB6 99%);
--gradient-button: radial-gradient(circle at 50% 100%, #605CCF 30%, #434093 100%);

/* Efeitos */
--shadow-button: 0px 14px 34px 0px rgba(96, 92, 207, 0.4);
--shadow-inset: inset 0px 3px 4px 0px rgba(146, 156, 231, 0.5);
```

### 📝 Tipografia

**Fontes:**
- **Archivo:** Titulo principal e subtítulo
- **Satoshi:** Navegação e elementos UI

**Especificações:**
```css
/* Título Principal */
font-family: Archivo;
font-weight: 400;
font-size: 80px;
line-height: 1.2em;

/* Subtítulo */
font-family: Archivo;
font-weight: 400;
font-size: 28px;
line-height: 1.6em;

/* Botões */
font-family: Archivo;
font-weight: 600;
font-size: 24px;
line-height: 1.5em;

/* Navegação */
font-family: Satoshi;
font-weight: 700;
font-size: 16px;
text-transform: uppercase;
line-height: 1.2em;
```

## 🧩 Componentes

### 1. Hero Section
**Localização:** Centro da tela
**Elementos:**
- Background com imagem e blur (15.4px)
- Título principal com gradiente
- Subtítulo descritivo
- Botão "ENTRE" circular central
- Dois botões CTA inferiores

**Especificações:**
- Background image: 2866x1508px com blur
- Título: "Transformamos ideias em experiências 3D imersivas."
- Subtítulo: "Soluções visuais, técnicas e interativas para empresas que querem inovar."

### 2. Navigation Bar
**Posicionamento:** Top center
**Itens do Menu:**
- Início
- Serviços  
- Logo (centralizado)
- Sobre nós
- CONTATO

**Especificações:**
- Backdrop filter: blur(4px)
- Gap entre itens: 78px
- Logo: 80x22.29px

### 3. Botão Central "ENTRE"
**Formato:** Circular
**Dimensões:** 190x190px
**Posicionamento:** Centro da tela
**Estilo:**
- Border radius: 999px (circular completo)
- Gradiente de fundo
- Box shadow com glow effect
- Padding: 24px 48px

### 4. Botões CTA
**Botão 1:** "Solicite uma proposta"
- Ícone: chevron_right
- Background: Gradiente preenchido

**Botão 2:** "Saiba Mais" 
- Ícone: call_made
- Background: Transparente com borda

**Especificações Comuns:**
- Border radius: 60px
- Padding: 24px 48px
- Gap entre ícone e texto: 8px

### 5. Logo UnicTava
**Componentes:**
- Grupo superior: 8 vetores (letras)
- Grupo inferior: 6 vetores (palavra inferior)
- Dimensões totais: 80x22.29px
- Cor: #FFFFFF

## 📱 Responsividade

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) {
  /* Layout em coluna, textos menores */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Ajustes intermediários */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Design original */
}
```

## 🎭 Animações e Interações

### Microinterações
- Hover effects nos botões
- Smooth scrolling
- Fade-in animations
- Button glow effects

### Performance
- Lazy loading de imagens
- Otimização de fontes
- CSS crítico inline
- Preload de assets importantes

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx          # Layout root com fontes
│   ├── page.tsx           # Página principal
│   └── globals.css        # CSS global e reset
├── components/
│   ├── Hero/
│   │   ├── index.tsx      # Componente Hero
│   │   └── styles.ts      # Styled components
│   ├── Navigation/
│   │   ├── index.tsx      
│   │   └── styles.ts      
│   ├── Button/
│   │   ├── index.tsx      # Botão reutilizável
│   │   └── styles.ts      
│   └── Logo/
│       ├── index.tsx      # Logo UnicTava
│       └── styles.ts      
├── assets/
│   ├── images/           # Background e outras imagens
│   └── icons/           # SVGs dos ícones
├── lib/
│   └── registry.tsx     # Styled Components Registry
└── styles/
    └── theme.ts         # Tema e variáveis
```

## 🎯 Critérios de Sucesso

### Design
- [ ] Pixel perfect com o Figma
- [ ] Todas as cores exatas
- [ ] Tipografia idêntica
- [ ] Espaçamentos precisos
- [ ] Efeitos visuais (blur, gradientes, shadows)

### Performance
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### Funcionalidade
- [ ] Responsivo em todos os dispositivos
- [ ] Navegação funcional
- [ ] Botões com hover states
- [ ] Animações suaves
- [ ] SEO básico implementado

## 📋 Checklist de Implementação

### Setup Inicial
- [ ] Criar projeto Next.js 15
- [ ] Configurar styled-components
- [ ] Instalar e configurar fontes
- [ ] Configurar estrutura de pastas

### Assets
- [ ] Baixar imagem de background do Figma
- [ ] Extrair SVGs do logo
- [ ] Extrair ícones necessários
- [ ] Otimizar imagens para web

### Componentes
- [ ] Implementar Hero Section
- [ ] Implementar Navigation
- [ ] Implementar botões CTA
- [ ] Implementar Logo component
- [ ] Implementar botão circular central

### Finalizações
- [ ] Adicionar animações
- [ ] Testar responsividade
- [ ] Otimizar performance
- [ ] Configurar SEO básico
- [ ] Deploy para produção

## 🔧 Configurações Técnicas

### Next.js Config
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}
```

### Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "styled-components": "^6.0.0"
  },
  "devDependencies": {
    "@types/styled-components": "^5.1.26",
    "typescript": "^5.0.0"
  }
}
```

---

**Data de Criação:** $(date)  
**Última Atualização:** $(date)  
**Status:** Em Desenvolvimento