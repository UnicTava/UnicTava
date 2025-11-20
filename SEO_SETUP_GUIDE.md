# 🚀 Guia de Configuração de SEO - UnicTava

Este guia contém todas as instruções para configurar corretamente o Google Analytics e Google Search Console no site UnicTava.

## 📋 Índice

1. [Google Analytics 4 (GA4)](#google-analytics-4-ga4)
2. [Google Search Console](#google-search-console)
3. [Variáveis de Ambiente](#variáveis-de-ambiente)
4. [Verificação de Funcionamento](#verificação-de-funcionamento)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Google Analytics 4 (GA4)

### Passo 1: Criar uma conta no Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Faça login com sua conta Google
3. Clique em **"Começar a medir"** (se for primeira vez)
4. Configure sua conta:
   - **Nome da conta**: UnicTava
   - Marque as opções de compartilhamento de dados conforme sua preferência

### Passo 2: Criar uma propriedade

1. Clique em **"Criar propriedade"**
2. Configure:
   - **Nome da propriedade**: UnicTava Website
   - **Fuso horário**: Europe/Rome (UTC+01:00)
   - **Moeda**: EUR - Euro (€)
3. Clique em **"Avançar"**

### Passo 3: Detalhes da empresa

1. Selecione:
   - **Setor**: Tecnologia/Software
   - **Tamanho da empresa**: Conforme sua realidade
2. Clique em **"Avançar"**

### Passo 4: Objetivos de negócios

1. Selecione os objetivos relevantes:
   - ✅ Gerar leads
   - ✅ Analisar o comportamento do usuário
   - ✅ Medir o engajamento
2. Clique em **"Criar"**
3. Aceite os Termos de Serviço

### Passo 5: Configurar fluxo de dados

1. Selecione **"Web"**
2. Configure:
   - **URL do site**: https://unictava.com
   - **Nome do fluxo**: UnicTava Website
   - **Ativar medição aprimorada**: ✅ ATIVADO (recomendado)
3. Clique em **"Criar fluxo"**

### Passo 6: Copiar o Measurement ID

1. Após criar o fluxo, você verá o **Measurement ID**
2. Ele terá o formato: `G-XXXXXXXXXX`
3. **COPIE este ID** - você vai precisar dele!

---

## 🔍 Google Search Console

### Passo 1: Adicionar propriedade

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Clique em **"Adicionar propriedade"**
3. Escolha **"Prefixo do URL"**
4. Digite: `https://unictava.com`
5. Clique em **"Continuar"**

### Passo 2: Verificar propriedade

1. Na tela de verificação, escolha o método **"Tag HTML"**
2. Você verá algo como:
   ```html
   <meta name="google-site-verification" content="abc123xyz456..." />
   ```
3. **COPIE APENAS o código** entre as aspas do `content=""`:
   - ❌ NÃO copie: `<meta name="google-site-verification" content="`
   - ✅ COPIE APENAS: `abc123xyz456...`
   - ❌ NÃO copie: `" />`

---

## 🔐 Variáveis de Ambiente

### Passo 1: Criar arquivo .env

1. Na raiz do projeto, você já tem um arquivo `.env.example`
2. Crie uma cópia dele chamada `.env`:
   ```bash
   cp .env.example .env
   ```

### Passo 2: Adicionar os IDs

Edite o arquivo `.env` e adicione seus IDs:

```env
# Google Analytics 4 (GA4)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-de-verificacao-aqui
```

**Exemplo preenchido:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=kLm_oPqRsTuVwXyZ123456
```

### Passo 3: Reiniciar o servidor

```bash
# Parar o servidor (Ctrl+C)
# Depois reiniciar
npm run dev
```

---

## ✅ Verificação de Funcionamento

### Google Analytics

1. Acesse seu site: https://unictava.com
2. **Aceite os cookies de Analytics** no banner de consentimento
3. No Google Analytics:
   - Vá em **"Relatórios" > "Tempo real"**
   - Você deve ver seu acesso em tempo real
   - Pode levar até 5 minutos para aparecer

### Google Search Console

1. Após adicionar as variáveis de ambiente e fazer deploy
2. Volte ao Google Search Console
3. Clique em **"Verificar"**
4. Você verá uma mensagem de sucesso: ✅ **"Propriedade verificada"**

### Verificação Técnica

Abra o código-fonte da sua página (`Ctrl+U` ou `Cmd+U`):

1. **Google Analytics** - Procure por:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-..."></script>
   ```

2. **Search Console** - Procure por:
   ```html
   <meta name="google-site-verification" content="..." />
   ```

---

## 🔧 Troubleshooting

### Google Analytics não aparece no código

**Problema**: Script do GA não está sendo carregado

**Soluções**:
1. Verifique se a variável `NEXT_PUBLIC_GA_MEASUREMENT_ID` está no arquivo `.env`
2. Verifique se você **aceitou os cookies de Analytics** no banner
3. Reinicie o servidor: `npm run dev`
4. Limpe o cache do navegador (Ctrl+Shift+Del)

### Meta tag de verificação não aparece

**Problema**: Meta tag do Search Console não está no HTML

**Soluções**:
1. Verifique se a variável `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` está no arquivo `.env`
2. Verifique se você copiou **apenas o código**, sem as aspas ou tags HTML
3. Reinicie o servidor
4. Faça um hard refresh (Ctrl+F5)

### Analytics não registra visitas

**Problemas comuns**:

1. **Cookies não aceitos**:
   - O usuário precisa aceitar cookies de Analytics no banner
   - Sem aceitação = sem tracking (conforme LGPD/GDPR)

2. **AdBlocker ativo**:
   - Extensões como uBlock Origin bloqueiam o GA
   - Teste em navegador anônimo ou desative temporariamente

3. **Measurement ID incorreto**:
   - Formato correto: `G-XXXXXXXXXX`
   - Verifique se não tem espaços extras ou caracteres especiais

### Search Console não mostra dados

**Problemas comuns**:

1. **Site não verificado**:
   - Complete o processo de verificação primeiro
   - Aguarde até 48h para primeiros dados aparecerem

2. **Site não indexado**:
   - Solicite indexação manual: Search Console > Inspeção de URL
   - Envie o sitemap: `https://unictava.com/sitemap.xml`

3. **Robots.txt bloqueando**:
   - Verifique: `https://unictava.com/robots.txt`
   - Não deve bloquear Googlebot

---

## 📊 Monitoramento Contínuo

### Checklist semanal

- [ ] Verificar relatórios do Google Analytics
- [ ] Revisar dados do Search Console
- [ ] Analisar páginas com melhor desempenho
- [ ] Identificar páginas com erros 404
- [ ] Verificar Core Web Vitals

### Métricas importantes

**Google Analytics**:
- Usuários ativos
- Sessões
- Taxa de rejeição
- Duração média da sessão
- Conversões (leads via formulário)

**Google Search Console**:
- Total de cliques
- Impressões
- CTR (taxa de cliques)
- Posição média
- Páginas mais visitadas
- Queries de pesquisa

---

## 🎯 Próximos Passos

Após configurar o básico:

1. **Configurar eventos customizados no GA4**:
   - Cliques em botões "Saiba Mais"
   - Envio de formulário de contato
   - Downloads de materiais

2. **Configurar conversões**:
   - Definir ações como conversões
   - Acompanhar ROI de campanhas

3. **Criar relatórios personalizados**:
   - Análise por serviço
   - Funil de conversão
   - Comportamento por idioma

4. **Otimização contínua**:
   - Testar variações de títulos (A/B testing)
   - Melhorar páginas com baixo CTR
   - Criar conteúdo para queries com alto volume

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique a documentação oficial:
   - [Google Analytics Help](https://support.google.com/analytics)
   - [Search Console Help](https://support.google.com/webmasters)

2. Revise este guia completamente

3. Entre em contato com o desenvolvedor com:
   - Descrição do problema
   - Screenshots relevantes
   - Mensagens de erro (se houver)

---

**Última atualização**: 2025-01-13
**Versão**: 1.0.0
