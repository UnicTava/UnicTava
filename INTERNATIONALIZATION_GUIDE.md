# Guia de Internacionalização - UnicTava

## Status da Implementação

A internacionalização do site UnicTava foi parcialmente implementada com next-intl para 3 idiomas: português (pt-BR), inglês (en) e italiano (it).

---

## ARQUIVOS CRIADOS

### 1. Configuração i18n
- `src/i18n/routing.ts` - Configuração de locales e rotas
- `src/i18n/request.ts` - Configuração de requisições
- `src/middleware.ts` - Middleware next-intl

### 2. Arquivos de Tradução
- `messages/pt-BR.json` - Traduções em português
- `messages/en.json` - Traduções em inglês
- `messages/it.json` - Traduções em italiano

### 3. Estrutura [locale]
- `src/app/[locale]/layout.tsx` - Layout com NextIntlClientProvider
- `src/app/[locale]/page.tsx` - Página raiz
- `src/app/[locale]/home/page.tsx` - Página home
- `src/app/[locale]/servicos/page.tsx` - Página serviços
- `src/app/[locale]/sobre-nos/page.tsx` - Página sobre nós
- `src/app/[locale]/not-found.tsx` - Página 404

### 4. Componente LanguageSwitcher
- `src/components/LanguageSwitcher/index.tsx`
- `src/components/LanguageSwitcher/LanguageSwitcher.module.css`

---

## ARQUIVOS MODIFICADOS

### 1. Configuração
- `next.config.js` - Adicionado plugin next-intl

### 2. Componentes Atualizados com Traduções
- `src/components/Navigation/index.tsx` - Integrado LanguageSwitcher e traduções
- `src/components/Navigation/Navigation.module.css` - Estilo do LanguageSwitcher
- `src/components/Hero/index.tsx` - Traduções aplicadas
- `src/components/Footer/index.tsx` - Traduções aplicadas

---

## COMPONENTES PENDENTES DE TRADUÇÃO

Os seguintes componentes ainda possuem textos hardcoded em português e precisam ser atualizados:

### Modais (ALTA PRIORIDADE)
Todos os modais precisam seguir o padrão do ModalAI3D:

1. **ModalAI3D** - JÁ TEM TRADUÇÕES NO JSON (aplicar)
   - Arquivo: `src/components/ModalAI3D/index.tsx`
   - Chaves: `modals.ai.*`

2. **ModalCinematica3D**
   - Arquivo: `src/components/ModalCinematica3D/index.tsx`
   - Adicionar namespace: `modals.cinematica`

3. **ModalSimulacao3D**
   - Arquivo: `src/components/ModalSimulacao3D/index.tsx`
   - Adicionar namespace: `modals.simulacao`

4. **ModalEducacao3D**
   - Arquivo: `src/components/ModalEducacao3D/index.tsx`
   - Adicionar namespace: `modals.educacao`

5. **ModalJogos3D**
   - Arquivo: `src/components/ModalJogos3D/index.tsx`
   - Adicionar namespace: `modals.jogos`

6. **ModalRealidadeVirtual**
   - Arquivo: `src/components/ModalRealidadeVirtual/index.tsx`
   - Adicionar namespace: `modals.vr`

### Componentes da Página Sobre Nós

1. **NossaHistoria** - JÁ TEM TRADUÇÕES NO JSON (aplicar)
   - Arquivo: `src/components/NossaHistoria/index.tsx`
   - Chaves: `about.history.*`

2. **Missao**
   - Arquivo: `src/components/Missao/index.tsx`
   - Adicionar namespace: `about.mission`

3. **Visao**
   - Arquivo: `src/components/Visao/index.tsx`
   - Adicionar namespace: `about.vision`

4. **NossosValores**
   - Arquivo: `src/components/NossosValores/index.tsx`
   - Adicionar namespace: `about.values`

5. **NossoTime**
   - Arquivo: `src/components/NossoTime/index.tsx`
   - Adicionar namespace: `about.team`

6. **ProposFuturo**
   - Arquivo: `src/components/ProposFuturo/index.tsx`
   - Adicionar namespace: `about.future`

7. **IASetorial** - JÁ TEM TRADUÇÕES NO JSON (aplicar)
   - Arquivo: `src/components/IASetorial/index.tsx`
   - Chaves: `iaSetorial.*`

### Componentes Principais

1. **ContactForm** - JÁ TEM TRADUÇÕES NO JSON (aplicar)
   - Arquivo: `src/components/ContactForm/index.tsx`
   - Chaves: `contact.*`
   - IMPORTANTE: Aplicar traduções em labels, placeholders, botões, mensagens de sucesso/erro

2. **ServicesSection** - JÁ TEM TRADUÇÕES NO JSON (aplicar)
   - Arquivo: `src/components/ServicesSection/index.tsx`
   - Chaves: `services.*`

3. **TestimonialsSection**
   - Arquivo: `src/components/TestimonialsSection/index.tsx`
   - Adicionar namespace: `testimonials`

### Página Serviços
- `src/app/[locale]/servicos/page.tsx`
- Adicionar namespace: `servicesPage`
- Traduzir: títulos, descrições, FAQ, projetos

---

## PADRÃO DE IMPLEMENTAÇÃO

### Para Client Components:
```tsx
'use client'

import { useTranslations } from 'next-intl'

export const MyComponent = () => {
  const t = useTranslations('namespace')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
```

### Para Server Components:
```tsx
import { getTranslations } from 'next-intl/server'

export default async function MyPage() {
  const t = await getTranslations('namespace')

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}
```

### Navegação com Locale:
```tsx
import { useLocale } from 'next-intl'

const locale = useLocale()
window.location.href = `/${locale}/page`
```

---

## CHECKLIST PARA CADA COMPONENTE

- [ ] Importar useTranslations ou getTranslations
- [ ] Adicionar chaves de tradução no JSON (pt-BR, en, it)
- [ ] Substituir TODOS os textos hardcoded por t('key')
- [ ] Testar navegação com locale nas URLs
- [ ] Verificar que não restam textos em português

---

## TESTANDO A INTERNACIONALIZAÇÃO

### URLs para Testar:
- Português: `http://localhost:3000/pt-BR/home`
- Inglês: `http://localhost:3000/en/home`
- Italiano: `http://localhost:3000/it/home`

### Verificações:
1. LanguageSwitcher aparece no Navigation
2. Trocar idioma atualiza todos os textos
3. Navegação mantém o locale correto
4. Metadata aparece no idioma correto
5. Não há textos hardcoded visíveis

---

## ESTRUTURA DOS JSON DE TRADUÇÃO

Os arquivos JSON seguem a seguinte estrutura hierárquica:

```json
{
  "navigation": { ... },
  "hero": { ... },
  "services": { ... },
  "iaSetorial": { ... },
  "contact": { ... },
  "footer": { ... },
  "about": {
    "history": { ... },
    "mission": { ... },
    "vision": { ... },
    "values": { ... },
    "team": { ... },
    "future": { ... }
  },
  "modals": {
    "ai": { ... },
    "cinematica": { ... },
    "simulacao": { ... },
    "educacao": { ... },
    "jogos": { ... },
    "vr": { ... }
  },
  "metadata": { ... }
}
```

---

## PRÓXIMOS PASSOS

1. **PRIORIDADE ALTA**: Aplicar traduções nos componentes que JÁ TEM chaves no JSON:
   - ContactForm
   - ServicesSection
   - IASetorial
   - NossaHistoria
   - ModalAI3D

2. **PRIORIDADE MÉDIA**: Criar traduções e aplicar nos modais restantes

3. **PRIORIDADE MÉDIA**: Criar traduções e aplicar nos componentes sobre-nos

4. **PRIORIDADE BAIXA**: Página admin (pode manter português)

5. **VALIDAÇÃO FINAL**: Testar todas as páginas em todos os idiomas

---

## COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar erros de lint
npm run lint
```

---

## OBSERVAÇÕES IMPORTANTES

1. **NÃO** adicione emojis no código
2. **SEMPRE** use useTranslations para client components
3. **SEMPRE** use getTranslations para server components
4. **PRESERVE** toda a lógica de negócio existente
5. **MANTENHA** a estrutura CSS inalterada
6. **TESTE** cada componente após atualizar

---

## RESUMO DO QUE FOI IMPLEMENTADO

✅ Infraestrutura completa next-intl
✅ 3 arquivos de tradução (pt-BR, en, it)
✅ Estrutura [locale] no App Router
✅ LanguageSwitcher funcional
✅ Navigation com traduções
✅ Hero com traduções
✅ Footer com traduções
✅ Metadata multilíngue

## TOTAL DE TEXTOS TRADUZIDOS

Aproximadamente 100+ chaves de tradução já criadas nos 3 idiomas, cobrindo:
- Navegação (4 itens)
- Hero (4 textos)
- Serviços (3+ textos)
- Contato (30+ textos)
- Footer (15+ textos)
- Sobre nós (2+ seções)
- Modais (1 completo)
- Metadata (3 campos)

---

Atualizado em: 2025-09-29