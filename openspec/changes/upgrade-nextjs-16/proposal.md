## Why

O projeto está em Next.js 15.5.9 com React 18.3.1. O Next.js 16 marca o React 18 como deprecado e o remove no Next.js 17, então a janela para migrar sem pressão é agora. O upgrade também elimina uma dívida concreta de ferramenta: o `next lint` foi removido no 16, e a migração para o ESLint CLI resolve a incompatibilidade atual entre o `.eslintrc.json` legado e o ESLint 9, que hoje exige rodar o lint via `rtk proxy`.

A investigação prévia mostrou que a maior breaking change do Next.js 16 — a remoção do acesso síncrono às Async Request APIs — não afeta este repositório. Isso torna o upgrade substancialmente mais barato do que o normal e reforça fazê-lo antes que a dívida cresça.

## What Changes

### Breaking changes que exigem ação

- **BREAKING** — `next lint` removido no **Next.js 16.0**. Os scripts `lint` e `lint:fix` passam a invocar o ESLint CLI diretamente, e o `.eslintrc.json` é convertido para flat config (`eslint.config.mjs`). Consequência positiva: o contorno `rtk proxy npm run lint` deixa de ser necessário e a documentação em `CLAUDE.md`/`AGENTS.md` deve ser revista.
- **BREAKING** — Turbopack passa a ser o bundler padrão de `next dev` e `next build` no **Next.js 16.0**. O projeto não tem configuração customizada de webpack, então não incide o modo de falha em que `next build` aborta; ainda assim a troca de bundler exige validação real do pipeline Tailwind 3.4 + PostCSS, não apenas um build verde.
- **BREAKING** — `images.qualities` passa a ter default `[75]` no **Next.js 16.0**, em vez de aceitar qualquer valor. Nenhum `<Image>` do repositório passa a prop `quality`, então o impacto é nulo; registrado por ser mudança silenciosa.

### Depreciação avisada, sem quebra imediata

- React 18 é **deprecado no Next.js 16.0** e **removido no Next.js 17**. Com React 18.3.1 o projeto continua buildando no 16, emitindo o aviso `React 18 support is deprecated in Next.js 16 and will be removed in Next.js 17`. A subida para React 19 pode ser feita nesta mesma change ou isolada — a decisão fica para o `design.md`.

### Breaking changes verificadas como não aplicáveis

Cada item abaixo foi checado contra o código, não presumido:

- Remoção do acesso síncrono a `cookies`, `headers`, `draftMode`, `params` e `searchParams` (**Next.js 16.0**): nenhuma ocorrência em `src/`. O projeto não tem rota dinâmica nem route handler.
- Renomeação de `middleware` para `proxy` (**Next.js 16.0**): não existe arquivo de middleware.
- `id` do `sitemap` vira `Promise` (**Next.js 16.0**): aplica-se apenas a `generateSitemaps()`, que não é usado; `src/app/sitemap.ts` retorna uma única URL fixa.
- `experimental.dynamicIO` substituído por `cacheComponents` (**Next.js 16.0**): não configurado.
- Falha de `next build` com webpack customizado (**Next.js 16.0**): `next.config.js` não define `webpack`.
- `images.domains` deprecado: `next.config.js` já usa `remotePatterns`.

### Pré-requisito de ambiente

- Next.js 16 exige **Node.js >= 20.9.0**. O ambiente atual roda 22.17.1, portanto atendido. O `package.json` não declara `engines`; fixar o range passa a ser desejável.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

Nenhuma.

Esta change é de atualização de dependências e ferramental. O comportamento observável do site — rotas geradas, conteúdo, metadata, identidade visual, acessibilidade e navegação por teclado — permanece idêntico; o upgrade é considerado bem-sucedido justamente quando nada muda para o visitante. Por não haver alteração de comportamento em nível de spec, a change declara `skip_specs: true` no seu `.openspec.yaml`, conforme previsto para mudanças de puro ferramental. Nenhum requisito foi inventado para satisfazer a validação.

## Impact

### Dependências

| Pacote | Atual | Alvo |
| --- | --- | --- |
| `next` | 15.5.9 | 16.3.5 |
| `eslint-config-next` | 15.5.9 | 16.3.5 |
| `react` / `react-dom` | 18.3.1 | 19.3.0 (a decidir) |
| `@types/react` / `@types/react-dom` | 18.3.x | acompanham o React |

Compatibilidade com React 19 **verificada**: `@headlessui/react` 2.2.9, `next-themes` 0.4.6 e `react-feather` 2.0.10 já declaram suporte a React 19 nas versões instaladas, e nenhum deles usa API removida no React 19. Nenhum bump é necessário. Evidência e método em `design.md` — Context.

### Arquivos afetados

- `package.json` — versões e scripts `lint` / `lint:fix`; possível adição de `engines`.
- `.eslintrc.json` — removido, substituído por `eslint.config.mjs`.
- `next.config.js` — possível ajuste de `images` conforme o codemod.
- `CLAUDE.md` e `AGENTS.md` — a seção que obriga `rtk proxy npm run lint` perde a razão de existir quando o flat config entrar.

Não se espera alteração em `src/`. Qualquer mudança ali durante a execução deve ser tratada como sinal de incompatibilidade não prevista, e não como ajuste de rotina.

### Ferramenta de migração

O comando `next upgrade` só existe a partir do Next.js 16.1.0, portanto não está disponível vindo do 15.5.9. O caminho é o codemod `npx @next/codemod@canary upgrade latest`, que automatiza a configuração do Turbopack em `next.config.js`, a migração de `next lint` para o ESLint CLI, a renomeação de `middleware` para `proxy`, a remoção de prefixos `unstable_` de APIs estabilizadas e a remoção do Route Segment Config `experimental_ppr`.

### Deploy

O deploy é automático na Vercel a partir de `main`. O upgrade deve ser validado em preview antes do merge, com atenção ao build sob Turbopack e à renderização das quatro rotas estáticas (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`).

### Riscos e desconhecidos

- Comportamento do Tailwind 3.4 + PostCSS sob Turbopack não validado neste projeto. Escape disponível: `next build --webpack`.
- `react-feather` está sem publicação desde 2022-05-30. Funciona com React 19 — verificado no código publicado, não apenas na declaração de peer dependency — e a substituição está fora do escopo desta change. Registrado como dívida de saúde de dependência.

A compatibilidade das dependências de UI com React 19 deixou de ser desconhecida: foi verificada e está resolvida. Ver `design.md` — Context.
