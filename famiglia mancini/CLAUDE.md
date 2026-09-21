# CLAUDE.md

Contexto do projeto para agentes de IA que trabalham neste repositório.

## Sobre o projeto

Site institucional da **Famiglia Mancini** — trattoria, ristorante e pizzaria italiana fundada em 1980, localizada na Rua Avanhandava, 81, São Paulo (SP), Brasil.

- URL de produção: https://famigliamancini.com.br
- Telefone: +55 11 3256-4320
- Idiomas: pt-BR (padrão), en, it — via `lib/i18n` (dictionaries + provider)
- Gerado com v0.app; não é um repositório git (ainda)

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** 5.7
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) + `tw-animate-css`
- **shadcn/ui** (`components.json`) + Base UI React + Lucide icons
- **motion** (animações) + `@vercel/analytics`
- Gerenciador de pacotes: **pnpm** 12 (`pnpm dev`, `pnpm build`)

## Estrutura

```
app/
  layout.tsx      # Metadados, fontes (Cormorant Garamond, Inter, Allura), Analytics
  page.tsx        # Página única: compõe todas as seções + JSON-LD (schema.org Restaurant)
  globals.css     # Estilos globais Tailwind
components/       # Seções da landing page (hero, story, houses, menu, events, giftcard, ...)
lib/
  i18n/           # dictionaries.ts + provider.tsx (tradução pt-BR / en / it)
  menu-data.ts    # Dados do cardápio
  utils.ts        # cn() e helpers
project-mancini/  # Subdiretório (README vazio — origem provável do scaffold)
public/           # Ícones e placeholders
```

## Convenções

- Código e comentários em inglês; **conteúdo do site em português (pt-BR)**, com traduções en/it nas dictionaries.
- Página única: cada seção é um componente em `components/` montado em `app/page.tsx`.
- Alias `@/` aponta para a raiz do projeto (ver `tsconfig.json`).
- Fontes via CSS variables: `--font-cormorant`, `--font-inter`, `--font-script`.

## Comandos

```bash
pnpm dev     # servidor de desenvolvimento
pnpm build   # build de produção
```

## Notas

- Sem testes automatizados configurados.
- Placeholders em `public/` ainda não foram substituídos por mídia real.
