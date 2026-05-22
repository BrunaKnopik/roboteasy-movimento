# Roboteasy em Movimento — Newsletter Interna

Newsletter interna semanal da Roboteasy. SPA estática (Vite + React + TanStack Router), deploy no Vercel.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **TanStack Router** (file-based routing, client-side only)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React** para ícones
- **Fontes:** Space Grotesk (display), Inter (body), JetBrains Mono (mono) — carregadas via `index.html`

## Estrutura de arquivos

```
index.html              ← entry point Vite (fontes Google aqui)
vercel.json             ← rewrite SPA para Vercel
src/
  main.tsx              ← render client-side (RouterProvider)
  styles.css            ← Tailwind v4 + design tokens (CSS vars)
  router.tsx            ← cria o router com QueryClient no context
  routes/
    __root.tsx          ← layout raiz (QueryClientProvider + Outlet)
    index.tsx           ← TODA a newsletter (componente Newsletter)
  assets/               ← mídias estáticas
```

> Todo o conteúdo visual está em **`src/routes/index.tsx`**. É o único arquivo a editar para mudanças de conteúdo.

## Seções da newsletter (`src/routes/index.tsx`)

| Seção (comentário JSX) | `id` âncora | Linha aprox. |
|---|---|---|
| NAV (header sticky) | — | ~36 |
| HERO (título, stats, marquee) | — | ~72 |
| VISITAS — De Olho no Cliente | `#visitas` | ~156 |
| MÍDIA — Roboteasy nas manchetes | `#midia` | ~234 |
| ENTREGAS — Projetos no ar | `#entregas` | ~330 |
| NOVOS CLIENTES — Bem-vindos à base | `#clientes` | ~392 |
| NOTA DO TIME DE MARKETING | — | ~427 |
| FOOTER | — | ~443 |

## Assets (`src/assets/`)

| Arquivo | Usado em |
|---|---|
| `hero-bg.jpg` | Hero background |
| `cofco 1.jpeg` / `cofco 2.jpeg` | Card COFCO (visitas) |
| `audio_cofco.mp4` | Player de áudio COFCO |
| `bbz.jpeg` | Card BBZ (visitas) |
| `bmp.jpeg` | Card BMP (visitas) |
| `estrella_galicia.jpg` | Card Estrella Galicia (visitas) |
| `nxt.jpeg` | Card Podcast NXT (mídia) |
| `postos_azul.mp4` | Vídeo Postos Azul (clientes) |
| `LOGO_ROBOTEASY_HORIZONTAL_BRANCA (1).png` | Header e footer |

Para adicionar novo asset: salvar em `src/assets/`, importar no topo de `index.tsx`, usar no JSX.

## Design system

### Classes utilitárias customizadas (definidas em `styles.css`)

| Classe | Uso |
|---|---|
| `glass` | Cards com fundo translúcido + blur |
| `text-gradient` | Gradiente brand (azul → teal) |
| `bg-gradient-brand` | Fundo gradiente brand |
| `shadow-glow` | Sombra brilhante accent |
| `shadow-card` | Sombra padrão de card |
| `grid-bg` | Background com grid sutil |
| `animate-marquee` | Animação de scroll horizontal |
| `animate-pulse-glow` | Pulso de brilho |
| `animate-float-slow` | Float suave |

### Tokens de cor principais

| Token | Cor |
|---|---|
| `text-accent` / `bg-accent` | Teal (#40b494) — cor de destaque |
| `text-muted-foreground` | Texto secundário/sutil |
| `bg-card` | Fundo de card |
| `text-foreground` | Texto principal |
| `bg-primary` | Azul primário |

### Tipografia

- `font-display` → Space Grotesk (títulos)
- `font-mono` → JetBrains Mono (labels, kickers, badges)
- Sem classe → Inter (corpo de texto)

## Padrões de componente

### `SectionHeader` (componente interno em `index.tsx`)
```tsx
<SectionHeader kicker="texto label" title="Título da seção" icon={IconComponent} />
```

### Card de visita (demais clientes — BBZ, Estrella, BMP)
```tsx
{ name: "Nome", desc: "Texto descritivo", loc: "Cidade", image: imgImport }
```
Layout: imagem `aspect-[4/3]` no topo + conteúdo abaixo.

### Card de entrega (Projetos no ar)
```tsx
{ client: "Nome cliente", gp: "Nome GP", scope: "Descrição do projeto" }
```
Sempre inclui: `Parabéns ao time de desenvolvimento e projetos pela entrega com excelência`

### Stats do Hero
```tsx
{ v: "valor ou texto", l: "label abaixo (vazio = sem label)", icon: IconComponent }
```
Tamanho do texto adapta pelo `v.length`: >20 chars → `text-base`, >5 → `text-xl`, ≤5 → `text-3xl`.

## Build e deploy

```bash
npm run dev      # dev server
npm run build    # build para dist/
npm run preview  # preview do build
```

**Vercel:** build command `npm run build`, output `dist`. O `vercel.json` redireciona todas as rotas para `index.html`.

## O que NÃO editar

- `src/server.ts` e `src/start.ts` — remanescentes do setup Cloudflare, não são usados no build atual
- `wrangler.jsonc` — idem, não utilizado
- `src/routeTree.gen.ts` — gerado automaticamente pelo TanStack Router, nunca editar à mão
- `src/components/ui/` — componentes shadcn/ui, não usados na newsletter atual
