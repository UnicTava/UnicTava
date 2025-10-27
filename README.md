# UnicTava Landing Page

Uma implementação pixel-perfect da landing page da UnicTava baseada no design do Figma, com animações avançadas de poeira estelar e loading screen interativo.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.3** - Framework React com App Router
- **React 19** - Última versão do React
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilização com escopo local
- **Canvas API** - Animações de partículas em tempo real
- **Google Fonts** - Fonte Archivo
- **Next/Image** - Otimização de imagens

## 🎨 Features Implementadas

### Componentes

- **Loading Screen** - Tela de loading automática de 10 segundos com barra de progresso animada
- **StardustCanvas** - Sistema avançado de partículas com 2000 pontos usando Canvas API
  - Movimento browniano realista
  - Sistema de vento com múltiplas correntes
  - Profundidade de campo com camadas z-index
  - Efeito glow e turbulência
- **Hero Section** - Seção principal com background blur, títulos gradientes e botões CTA
- **Navigation** - Barra de navegação com logo centralizado e backdrop filter
- **Button Component** - Botões reutilizáveis com variantes (primary, secondary, circular)
- **Logo Component** - Logo UnicTava com SVGs oficiais (logo-top.svg e logo-bottom.svg)
- **Icons** - Ícones ChevronRight e CallMade

### Design Fidelity

- ✅ Loading Screen automático de 10 segundos
- ✅ Barra de progresso com gradiente luminoso
- ✅ Transformação do loading em logo UnicTava
- ✅ Animação de poeira estelar ultra-realista no Canvas
- ✅ Sistema de partículas com movimento de poeira
- ✅ Expansão animada para tela cheia
- ✅ Background com blur (15.4px) exatamente como no Figma
- ✅ Gradientes fiéis às especificações
- ✅ Tipografia Archivo com pesos corretos
- ✅ Cores exatas do design
- ✅ Logo SVG oficial extraída do Figma
- ✅ Navegação com backdrop filter e espaçamentos corretos
- ✅ Responsividade para mobile, tablet e desktop

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout principal com fontes e metadata
│   ├── page.tsx         # Página inicial com LoadingScreen
│   ├── home/
│   │   └── page.tsx     # Página principal com hero e navegação
│   ├── not-found.tsx    # Página 404
│   └── globals.css      # Estilos globais e variáveis CSS
├── components/
│   ├── LoadingScreen/
│   │   ├── index.tsx
│   │   └── LoadingScreen.module.css  # Loading com barra de progresso
│   ├── StardustCanvas/
│   │   ├── index.tsx
│   │   └── StardustCanvas.module.css  # Canvas com partículas
│   ├── EnterButton/
│   │   ├── index.tsx
│   │   └── EnterButton.module.css
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── Button.module.css
│   │   └── icons.tsx
│   ├── Hero/
│   │   ├── index.tsx
│   │   └── Hero.module.css
│   ├── Logo/
│   │   ├── index.tsx
│   │   └── Logo.module.css
│   └── Navigation/
│       ├── index.tsx
│       └── Navigation.module.css
└── assets/
    ├── images/          # Background hero
    └── icons/           # SVGs oficiais (logo-top.svg, logo-bottom.svg)
```

## 🛠 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <repo-url>
cd unictava
```

2. Instale as dependências
```bash
npm install
```

3. Execute em desenvolvimento
```bash
npm run dev
```

4. Acesse http://localhost:3000

### Build para Produção

```bash
npm run build
npm start
```

## 🎯 Especificações Técnicas

### Cores

- **Background**: #050505
- **Texto Principal**: #F6F6F6  
- **Texto Secundário**: #D1D1D1
- **Gradiente Título**: linear-gradient(90deg, #CFD8F6 0%, #534EB6 99%)
- **Gradiente Botões**: radial-gradient(circle at 50% 100%, #605CCF 30%, #434093 100%)

### Tipografia

- **Título**: Archivo 400, 80px, line-height 1.2em
- **Subtítulo**: Archivo 400, 28px, line-height 1.6em  
- **Botões**: Archivo 600, 24px, line-height 1.5em
- **Navegação**: Archivo 700, 16px, uppercase

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Responsividade

O layout se adapta automaticamente para:

- **Mobile**: Layout em coluna, botão circular relativo, CTAs empilhados
- **Tablet**: Navegação compacta, texto redimensionado
- **Desktop**: Layout original do Figma

## 🔧 Performance

- **Build Size**: ~107 kB First Load JS
- **Static Generation**: Páginas pré-renderizadas
- **Image Optimization**: Background otimizado com Next/Image
- **Font Optimization**: Google Fonts com display: swap

## 🌟 Fluxo da Aplicação

1. **Loading Screen** (0-10s)
   - Barra de progresso animada de 0% a 100%
   - Partículas de poeira estelar no fundo
   - Contador de porcentagem formatado (000%)

2. **Transformação** (10-11s)
   - Loading desaparece com fade
   - Logo UnicTava aparece com animação slide-in
   - Logo STUDIO aparece com delay

3. **Expansão** (11-12.5s)
   - Tela expande com efeito radial
   - Logo cresce e desvanece
   - Background transforma para gradiente

4. **Navegação Automática** (12.5s)
   - Redirecionamento para /home
   - Hero section com conteúdo principal

## 📋 Próximos Passos

Para expandir o projeto:

1. Otimizar performance do Canvas para mobile
2. Adicionar mais variações de partículas
3. Implementar navegação funcional
4. Adicionar mais páginas do design
5. Integrar CMS para conteúdo dinâmico
6. Adicionar testes automatizados
7. Configurar Analytics

## 📝 Notas Técnicas

### Canvas API
- **2000 partículas** renderizadas em tempo real
- **Movimento browniano** para simulação realista de poeira
- **Sistema de vento** com múltiplas correntes e turbulência
- **Profundidade de campo** com z-index para camadas
- **60 FPS** usando requestAnimationFrame

### Performance
- Todos os componentes são **Client Components** para suportar interatividade
- CSS Modules usado para evitar conflitos de estilo
- Variáveis CSS globais definidas em globals.css
- SVGs extraídos diretamente do Figma via MCP
- Metadata e viewport configurados para SEO
- Build otimizado com ~110 kB First Load JS

### Animações
- **Loading Bar**: Transição linear com glow effect
- **Logo Transform**: Cubic-bezier para suavidade
- **Expansão**: Efeito radial com scale e opacity
- **Partículas**: Canvas API com WebGL fallback

---

**Desenvolvido com base no design do Figma da UnicTava**
**UnicTava Studio**