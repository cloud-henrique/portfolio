## Why

O projeto está em Next.js 15.5.9 com React 18.3.1. O Next.js 16 marca o React 18 como deprecado e o remove no Next.js 17, então a janela para migrar sem pressão é agora. O upgrade também elimina uma dívida concreta de ferramenta: o `next lint` foi removido no 16, e a migração para o ESLint CLI resolve a incompatibilidade atual entre o `.eslintrc.json` legado e o ESLint 9, que hoje exige rodar o lint via `rtk proxy`.

A investigação prévia mostrou que a maior breaking change do Next.js 16 — a remoção do acesso síncrono às Async Request APIs — não afeta este repositório. Isso torna o upgrade substancialmente mais barato do que o normal e reforça fazê-lo antes que a dívida cresça.

## What Changes

### Breaking changes que exigem ação

- **BREAKING** — `next lint` removido no **Next.js 16.0**. Os scripts `lint` e `lint:fix` passam a invocar o ESLint CLI diretamente, e o `.eslintrc.json` é convertido para flat config (`eslint.config.mjs`). Consequência positiva: o contorno `rtk proxy npm run lint` deixa de ser necessário e a documentação em `CLAUDE.md`/`AGENTS.md` deve ser revista.
- **BREAKING** — A configuração do Prettier **não sobrevive ao codemod** e precisa ser portada à mão. O `.eslintrc.json` atual carrega quatro itens que o config gerado pelo codemod não reproduz: o `extends` de `prettier`, o `plugins: ["prettier"]`, a regra `prettier/prettier` (`singleQuote: true`, `printWidth: 120`, `semi: false`) e `jsx-quotes: prefer-single`. Perder isso silenciosamente faz o próximo `lint:fix` reformatar o repositório inteiro.
- **BREAKING** — Turbopack passa a ser o bundler padrão de `next dev` e `next build` no **Next.js 16.0**. O projeto não tem configuração customizada de webpack, então não incide o modo de falha em que `next build` aborta; ainda assim a troca de bundler exige validação real do pipeline Tailwind 3.4 + PostCSS, não apenas um build verde.
- **BREAKING** — `images.qualities` passa a ter default `[75]` no **Next.js 16.0**, em vez de aceitar qualquer valor. Nenhum `<Image>` do repositório passa a prop `quality`, então o impacto é nulo; registrado por ser mudança silenciosa.
- **BREAKING** — Com o `next lint` removido no **Next.js 16.0**, o `next build` deixa de rodar ESLint. O lint desacopla do build e passa a depender de execução explícita. Como o repositório não tem CI (`.github/workflows` não existe), o único portão passa a ser a sequência manual de validação.

### Depreciação avisada, sem quebra imediata

- React 18 é **deprecado no Next.js 16.0** e **removido no Next.js 17**. Com React 18.3.1 o projeto continua buildando no 16, emitindo o aviso `React 18 support is deprecated in Next.js 16 and will be removed in Next.js 17`. A decisão de subir para React 19 nesta mesma change está registrada no `design.md`.

### Mudança silenciosa de saída

- As métricas de tamanho de bundle JS foram removidas da saída do `next build` no **Next.js 16.0**. Não afeta o site, mas altera o que a saída do build mostra — relevante porque a validação desta change lê essa saída.

### Breaking changes verificadas como não aplicáveis

Cada item abaixo foi checado contra o código, não presumido. Reverificado em 2026-09-14:

- Remoção do acesso síncrono a `cookies`, `headers`, `draftMode`, `params` e `searchParams` (**Next.js 16.0**): nenhuma ocorrência em `src/`. O projeto não tem rota dinâmica nem route handler.
- Renomeação de `middleware` para `proxy` (**Next.js 16.0**): não existe arquivo de middleware.
- `id` do `sitemap` vira `Promise` (**Next.js 16.0**): aplica-se apenas a `generateSitemaps()`, que não é usado; `src/app/sitemap.ts` retorna uma única URL fixa.
- `experimental.dynamicIO` substituído por `cacheComponents` (**Next.js 16.0**): não configurado.
- Remoção de `experimental.ppr` e do route segment config `experimental_ppr` (**Next.js 16.0**): não configurado.
- Falha de `next build` com webpack customizado (**Next.js 16.0**): `next.config.js` não define `webpack`.
- `images.domains` deprecado: `next.config.js` já usa `remotePatterns`.
- APIs removidas no React 19 (`defaultProps` em function component, `ReactDOM.render`, `ReactDOM.hydrate`, `createFactory`, `findDOMNode`): zero ocorrências em `src/`.

### Cobertura do intervalo 16.1 a 16.3

O alvo é o 16.3.5, mas a análise acima cobre o 16.0. O intervalo entre 16.1 e 16.3 foi verificado separadamente e **não introduz breaking change estável** neste caminho de upgrade:

- **16.1.0** adiciona os comandos `next upgrade` e `next experimental-analyze`. Adição, não quebra. Confirma também que `next upgrade` não está disponível vindo do 15.5.9 — daí o uso do codemod.
- **16.2** não traz breaking change estável aplicável.
- **16.3.0** introduz o codemod `cache-components-instant-false`, que é puramente aditivo e só se aplica a projetos adotando `cacheComponents` — não é o caso. Também traz `partialPrefetching` e o route segment config `prefetch`, ambos opt-in.

### Pré-requisito de ambiente

- Next.js 16 exige **Node.js >= 20.9.0** (`engines.node` declarado pelo próprio pacote `next@16.3.5`). O ambiente local roda 22.17.1, portanto atendido. O `package.json` não declara `engines`; fixar o range passa a ser desejável.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

Nenhuma.

Esta change é de atualização de dependências e ferramental. O comportamento observável do site — rotas geradas, conteúdo, metadata, identidade visual, acessibilidade e navegação por teclado — permanece idêntico; o upgrade é considerado bem-sucedido justamente quando nada muda para o visitante. Por não haver alteração de comportamento em nível de spec, a change declara `skip_specs: true` no seu `.openspec.yaml`, conforme previsto para mudanças de puro ferramental. Nenhum requisito foi inventado para satisfazer a validação.

## Impact

### Dependências que sobem

| Pacote | Atual | Alvo | Natureza |
| --- | --- | --- | --- |
| `next` | 15.5.9 | 16.3.5 | major |
| `eslint-config-next` | 15.5.9 | 16.3.5 | major |
| `react` / `react-dom` | 18.3.1 | 19.3.0 | major |
| `@types/react` / `@types/react-dom` | 18.3.x | 19.3.0 | major |
| `eslint-config-prettier` | 9.1.2 | 10.1.8 | major |
| `eslint` | 9.39.2 | 9.39.5 | patch |
| `@headlessui/react` | 2.2.9 | 2.2.10 | patch |
| `prettier` | 3.7.4 | 3.9.6 | minor |
| `eslint-plugin-prettier` | 5.5.4 | 5.5.6 | patch |
| `autoprefixer` | 10.4.23 | 10.6.0 | minor |
| `postcss` | 8.5.6 | 8.5.28 | patch |

O `eslint-config-prettier` 10 entra **nesta** change, e não depois, porque é exatamente a migração para flat config que o exige: a v10 expõe o entry `./flat`, e o `eslint-plugin-prettier@5.5.6` já declara `eslint-config-prettier: ">= 7.0.0 <10.0.0 || >=10.1.0"`.

### Dependências que saem

- `@typescript-eslint/eslint-plugin` e `@typescript-eslint/parser` são **removidos das devDependencies diretas**. O `eslint-config-next@16.3.5` já depende de `typescript-eslint ^8.46.0`, então declará-los de novo é resquício da era `.eslintrc`. São também a causa direta do conflito que barra o TypeScript 7 (ver abaixo).

### Dependências deliberadamente seguradas

Majors disponíveis que **não** entram, cada um com a evidência que sustenta a decisão:

| Pacote | Disponível | Decisão | Evidência |
| --- | --- | --- | --- |
| `typescript` | 7.0.2 | **Bloqueado**, fica em 5.9.3 | ERESOLVE duro: `typescript-eslint@8.70` declara peer `typescript: ">=4.8.4 <6.1.0"`, e o `eslint-config-next@16.3.5` depende dele |
| `eslint` | 10.10.0 | **Segurado**, fica em `^9.39.5` | Instala apenas forçando peer override em três plugins transitivos do `eslint-config-next`: `eslint-plugin-react@7.37.5` (teto `^9.7`), `eslint-plugin-jsx-a11y@6.10.2` (teto `^9`) e `eslint-plugin-import@2.32.0` (teto `^9`) — todos já na última versão publicada |
| `tailwindcss` | 4.3.3 | **Fora de escopo**, fica em 3.4.19 | v4 é CSS-first: exige trocar as diretivas `@tailwind` de `globals.css` por `@import "tailwindcss"`, abandonar o `tailwind.config.ts` e substituir o plugin PostCSS por `@tailwindcss/postcss` |
| `@types/node` | 26.5.1 | **Segurado**, fica na linha 22 | Deve acompanhar o runtime Node efetivamente em uso, decisão acoplada a `engines.node` |

O `tailwindcss@3.4.19` passou a carregar a dist-tag `v3-lts`, ou seja, entrou em manutenção. Isso é dívida real e fica registrada, mas migrar para v4 junto com a troca de bundler destruiria o valor diagnóstico do teste de paridade: uma regressão visual não teria causa atribuível.

### Compatibilidade de runtime com React 19

Verificada, não presumida. `@headlessui/react` 2.2.10, `next-themes` 0.4.6 e `react-feather` 2.0.10 já declaram suporte a React 19 e nenhum deles usa API removida no React 19. O `next@16.3.5` declara peer `react: "^18.2.0 || ^19.0.0"`. Um dry-run de instalação de `next@16.3.5` com `react@19.3.0` resolve limpo, sem ERESOLVE. Evidência e método em `design.md` — Context.

### Arquivos afetados

- `package.json` — versões, remoção das duas devDependencies `@typescript-eslint/*`, scripts `lint` / `lint:fix`; possível adição de `engines`.
- `.eslintrc.json` — removido, substituído por `eslint.config.mjs` com a configuração do Prettier portada à mão.
- `next.config.js` — possível ajuste de `images` conforme o codemod.
- `scripts/` — novo script de captura e comparação da saída construída, usado pela validação de paridade.
- `CLAUDE.md` e `AGENTS.md` — a seção que obriga `rtk proxy npm run lint` perde a razão de existir quando o flat config entrar.

Não se espera alteração em `src/`. Qualquer mudança ali durante a execução deve ser tratada como sinal de incompatibilidade não prevista, e não como ajuste de rotina.

### Ferramenta de migração

O comando `next upgrade` só existe a partir do Next.js 16.1.0, portanto não está disponível vindo do 15.5.9. O caminho é o codemod `npx @next/codemod@canary upgrade latest`, que automatiza a configuração do Turbopack em `next.config.js`, a migração de `next lint` para o ESLint CLI, a renomeação de `middleware` para `proxy`, a remoção de prefixos `unstable_` de APIs estabilizadas e a remoção do Route Segment Config `experimental_ppr`.

### Deploy

O deploy é automático na Vercel a partir de `main`. O upgrade deve ser validado em preview antes do merge, com atenção ao build sob Turbopack e à renderização das quatro rotas estáticas (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`).

### Riscos e desconhecidos

- Comportamento do Tailwind 3.4 + PostCSS sob Turbopack não validado neste projeto. Escape disponível: `next build --webpack`.
- `react-feather` está sem publicação desde 2022-05-30. Funciona com React 19 — verificado no código publicado, não apenas na declaração de peer dependency — e a substituição está fora do escopo desta change. Registrado como dívida de saúde de dependência.
- Tailwind 3 em manutenção (`v3-lts`) e ESLint 10 indisponível na prática: duas dívidas com prazo indefinido, criadas conscientemente por esta change.
