## Context

Ver `proposal.md` — Why para a motivação.

A investigação de compatibilidade foi concluída e alterou a premissa central do planejamento. O que a proposal registrava como desconhecido — se `@headlessui/react` suporta React 19 — está resolvido, e no sentido mais favorável possível.

Estado verificado das três dependências de UI:

| Pacote | Versão alvo | `peerDependencies` | Bump necessário |
| --- | --- | --- | --- |
| `@headlessui/react` | 2.2.10 | `^18 \|\| ^19 \|\| ^19.0.0-rc` | Patch, opcional |
| `next-themes` | 0.4.6 | `^16.8 \|\| ^17 \|\| ^18 \|\| ^19` | Não |
| `react-feather` | 2.0.10 | `>=16.8.6` | Não |

Peer dependency é declaração, não prova. A verificação foi ao código publicado dos três pacotes atrás das APIs que o React 19 removeu:

| Padrão | Situação no React 19 | Ocorrências |
| --- | --- | --- |
| `defaultProps` em function component | Removido | 0 |
| `ReactDOM.render` / `ReactDOM.hydrate` | Removido | 0 |
| `createFactory` | Removido | 0 |
| `findDOMNode` | Removido | 0 |
| `propTypes` | Ignorado, sem quebra | 287 |

O `defaultProps` era o risco real, por falhar silenciosamente em runtime deixando props `undefined`. Não há ocorrência.

Superfície de uso do Headless UI no repositório: um único arquivo, `src/components/Switch.tsx`, com 26 linhas, importando apenas `Switch` e usando apenas `checked`, `onChange` e `className`. Sem render props, sem `Transition`, sem `Dialog`, sem portal.

Padrões de tipo sensíveis ao `@types/react` 19 no código do projeto: `useRef()` sem argumento, `JSX.Element`, `React.FC`, `PropsWithChildren`, `forwardRef` e `ElementRef` têm zero ocorrências. Há três usos de `ReactNode`, todos na forma canônica `children: ReactNode`, em `src/app/layout.tsx`, `src/components/ui/Badge.tsx` e `src/components/Layout.tsx`. O único estreitamento de `ReactNode` no React 19 foi a remoção de `{}`, que atinge atribuição de objeto arbitrário — não é o caso.

Além da compatibilidade de código, a resolução de dependências foi testada empiricamente, não só lida em ranges declarados: um `npm install --dry-run` de `next@16.3.5` com `react@19.3.0` sobre o `package.json` atual resolve sem ERESOLVE. Os mesmos dry-runs mostraram que TypeScript 7 e ESLint 10 não passam — base das decisões de teto abaixo.

Superfície do projeto, relevante para dimensionar a estratégia de verificação: 920 linhas de TypeScript, quatro rotas estáticas, nenhuma rota de API, nenhuma rota dinâmica, nenhuma regra de negócio. Todo o conteúdo vive em `src/data/profile.ts`; as sections apenas consomem.

## Goals / Non-Goals

**Goals:**

- Executar Next.js 16 e React 19 como uma única change, com validação em uma só rodada.
- Sair do `next lint` para o ESLint CLI com flat config, preservando integralmente as regras de formatação em vigor.
- Preservar saída idêntica: mesmas quatro rotas estáticas, mesmo HTML de metadata, mesma identidade visual.
- Deixar a verificação de paridade executável por comando, não por inspeção visual.
- Deixar registrada a evidência de compatibilidade e de incompatibilidade, para que as decisões de escopo sejam auditáveis depois.

**Non-Goals:**

- Substituir `react-feather`. A dívida está registrada em Risks, mas resolver agora misturaria troca de biblioteca com upgrade de framework e comprometeria o diagnóstico de qualquer regressão.
- Migrar para Tailwind 4, ESLint 10 ou TypeScript 7. As três decisões estão em Decisions, com a evidência que as sustenta.
- Adotar recursos novos do Next 16 (Cache Components, PPR, `partialPrefetching`, `proxy`). O objetivo é paridade, não expansão.
- Introduzir framework de teste, TDD ou modelagem de domínio. Ver a decisão específica abaixo.
- Migrar `next.config.js` para `next.config.ts` ou `vercel.ts`.
- Alterar conteúdo, layout ou estilo.

## Decisions

### Next 16 e React 19 na mesma change, não em duas

Separar só se justifica quando há incompatibilidade a isolar. Não há: as três bibliotecas aceitam React 19, nenhuma usa API removida, o código não tem padrão de tipo em risco e o dry-run de instalação resolve limpo.

Alternativa considerada: subir Next 16 mantendo React 18. Rejeitada por dois motivos. O React 18 é deprecado no Next 16 e removido no Next 17, então o estado intermediário é uma parada obrigatória com prazo. E o build passaria a emitir `React 18 support is deprecated`, ruído permanente até a segunda etapa. Duas rodadas de validação para chegar ao mesmo destino.

### Codemod primeiro, ajuste manual depois

O caminho é `npx @next/codemod@canary upgrade latest`. O `next upgrade` só existe a partir do 16.1.0 e não está disponível vindo do 15.5.9.

Alternativa considerada: editar `package.json` e configs à mão. Rejeitada porque o codemod cobre a migração `next lint` para ESLint CLI, que é a parte mais mecânica e mais fácil de errar sutilmente. O ajuste manual entra depois, sobre o resultado do codemod, e fica visível no diff.

### A configuração do Prettier é portada à mão, não confiada ao codemod

O config que o codemod gera é, conforme a documentação oficial, exatamente `[...compat.extends('next/core-web-vitals', 'next/typescript'), { ignores: [...] }]`. O `.eslintrc.json` atual tem quatro itens que esse config não reproduz: o `extends` de `prettier`, o `plugins: ["prettier"]`, a regra `prettier/prettier` e `jsx-quotes`.

Isso não é uma verificação a fazer depois — é uma etapa de trabalho. Com `printWidth: 120`, `singleQuote: true`, `semi: false` e `jsx-quotes: prefer-single`, perder a regra significa que o próximo `lint:fix` reformata os 920 linhas do repositório, produzindo um diff que esconde qualquer alteração real do upgrade.

A configuração portada usa `eslint-plugin-prettier/recommended`, que já compõe o `eslint-config-prettier` e o plugin numa entrada só, em vez de declarar os dois separadamente. A regra `prettier/prettier` com as opções atuais e `jsx-quotes` entram como override explícito depois dele.

Alternativa considerada: aceitar o config do codemod e reintroduzir o Prettier numa change posterior. Rejeitada — deixaria uma janela em que `lint:fix` é uma armadilha carregada.

### Teto de versão nas devDependencies, com evidência

Nem tudo que tem major disponível deve subir junto. Três tetos, cada um por um motivo diferente:

**TypeScript fica em 5.9.3.** Não é preferência: o `typescript-eslint@8.70` declara peer `typescript: ">=4.8.4 <6.1.0"`, e o `eslint-config-next@16.3.5` depende dele. Instalar `typescript@7.0.2` produz ERESOLVE duro, verificado por dry-run. Só passaria com `--force` ou `--legacy-peer-deps`, que é exatamente o tipo de resolução quebrada que esconde problema.

**ESLint fica em `^9.39.5`.** O `eslint@10.10.0` instala, mas forçando peer override em três plugins transitivos do `eslint-config-next`: `eslint-plugin-react` (teto `^9.7`), `eslint-plugin-jsx-a11y` (teto `^9`) e `eslint-plugin-import` (teto `^9`). Os três já estão na última versão publicada, ou seja, o upstream ainda não entregou suporte ao ESLint 10 — não é atraso deste projeto. Subir agora significaria rodar a stack de lint inteira fora do contrato declarado.

Verificado de novo durante a execução, com dry-run: `npm install eslint@10.10.0` emite `npm warn ERESOLVE overriding peer dependency` para `eslint-plugin-import`, e com `--strict-peer-deps` falha com erro duro. A decisão se sustenta.

O que mudou desde o planejamento é a leitura do custo: o `9.39.5` carrega a dist-tag `maintenance` e o npm emite `npm warn deprecated eslint@9.39.5: This version is no longer supported` a cada install. Não existe 9.x suportado para onde migrar — é a última da linha. Ou seja, o projeto está numa linha sem suporte por dependência de terceiros, e não por escolha própria; a frase anterior desta seção, de que `^9.39.5` seria "o estado correto, não um atraso", subestimava isso.

**Tailwind fica em 3.4.19.** A v4 é uma migração de arquitetura, não um bump: CSS-first, sem `tailwind.config.ts`, com `@import "tailwindcss"` no lugar das diretivas `@tailwind` e `@tailwindcss/postcss` no lugar do plugin atual. Fazer isso na mesma change que troca o bundler eliminaria a atribuição de causa — uma divergência visual passaria a ter duas explicações possíveis, e o teste de paridade perderia o sentido.

Alternativa considerada para os três: subir tudo de uma vez e resolver o que quebrar. Rejeitada pelo mesmo princípio que motiva o teste de paridade — o valor desta change está em que qualquer regressão tenha causa única e identificável.

### Turbopack fica como default, sem opt-out preventivo

O projeto não define `webpack` em `next.config.js`, então não incide a falha de build que o Next 16 provoca em configuração customizada.

Alternativa considerada: fixar `next build --webpack` desde já. Rejeitada por mascarar incompatibilidade em vez de revelá-la, e por criar dívida na direção contrária à do framework. O `--webpack` permanece disponível como rollback parcial, documentado em Migration Plan.

### Validação por paridade de saída, automatizada em script

Um build que passa não prova que o HTML gerado é o mesmo. A verificação compara a saída de antes e depois: `canonical`, `og:url`, `og:image`, `sitemap.xml` e `robots.txt`, além das quatro rotas estáticas.

Isso importa porque a change de domínio alterou esses mesmos campos recentemente. Uma regressão de metadata aqui passaria despercebida em inspeção visual.

A comparação fica num script versionado, não em conferência manual. O motivo é prático: comparar cinco valores a olho entre duas execuções separadas por várias etapas é a parte menos confiável do plano e a primeira a ser pulada sob pressão. O script não adiciona dependência — é shell sobre a saída de `.next/` — e serve de novo no próximo upgrade de framework.

Alternativa considerada: manter a conferência manual descrita em prosa. Rejeitada porque a change inteira depende dessa verificação; deixá-la como a etapa mais frágil contradiz seu propósito.

### Sem framework de teste, sem TDD, sem modelagem de domínio

Avaliado explicitamente e descartado, para que a ausência seja uma decisão registrada e não um esquecimento.

**TDD não se aplica a esta change.** TDD conduz comportamento novo a partir de um teste que falha. O critério de sucesso aqui é que o comportamento observável **não** mude. Não há comportamento a conduzir.

**DDD não se aplica a este projeto.** São 920 linhas sem regra de negócio, sem rota de API e sem estado de servidor. Todo o conteúdo é dado estático em `src/data/profile.ts`. Não existe domínio a modelar; a linguagem ubíqua seria vocabulário de currículo.

**Um framework de teste não se paga aqui.** Sem lógica unitariamente testável, uma suíte só conseguiria afirmar que markup estático existe — e o teste de paridade de saída já faz isso melhor, comparando o HTML real do build contra a referência. Adicionar Vitest ou Playwright agora também contraria a diretriz do projeto de evitar bibliotecas sem necessidade clara, e ampliaria o diff da change justamente onde ele precisa ficar legível.

O que o projeto de fato não tem é portão automatizado: não há CI, e com o `next lint` removido o `next build` deixa de rodar ESLint. Essa é a lacuna real de regressão, e ela é sobre infraestrutura de execução, não sobre estratégia de teste. Fica registrada como Open Question, porque adicionar CI é uma decisão de escopo própria e não bloqueia este upgrade.

### Documentação do lint é atualizada na mesma change

`CLAUDE.md` e `AGENTS.md` obrigam hoje `rtk proxy npm run lint`. Com flat config, a instrução fica incorreta. Atualizar depois deixaria a documentação mentindo por uma janela — e é exatamente o tipo de erro que a seção existe para evitar.

## Risks / Trade-offs

**Codemod derrubando a configuração do Prettier** → Tratado como etapa de trabalho, não como verificação: a config é portada à mão logo após o codemod, antes de qualquer `lint:fix`. A conferência posterior introduz uma violação de cada regra e confirma que o lint acusa as duas.

**Tailwind 3.4 + PostCSS sob Turbopack não validado neste projeto** → Validar com paridade de saída, não só build verde: comparar o CSS gerado e inspecionar as seções em dark e light mode. Se houver divergência, `next build --webpack` destrava o merge sem reverter o upgrade.

**Tailwind 3 em manutenção (`v3-lts`)** → Dívida assumida conscientemente. Não tem prazo forçado como o React 18 tinha, mas cresce. Deve virar change própria, com o teste de paridade desta change já disponível para sustentá-la.

**ESLint 10 indisponível na prática, e a linha 9 sem suporte** → Fora do controle do projeto: depende de `eslint-plugin-react`, `jsx-a11y` e `import` publicarem suporte. Enquanto isso o projeto roda o `9.39.5`, última da linha e marcada como deprecada pelo próprio ESLint, com aviso a cada `npm install`. É dívida ativa, não estado estável: revisitar quando o `eslint-config-next` subir esses tetos, e tratar o aviso como lembrete, não como ruído a ignorar.

**`react-feather` sem publicação desde 2022-05-30** → Fora de escopo aqui. Funciona com React 19, verificado no código publicado. O range `>=16.8.6` é aberto, então o npm nunca vai sinalizar uma quebra futura. São 10 ícones em 6 arquivos, todos SVG estático — a substituição é barata quando for necessária.

**Codemod tocando mais do que o esperado** → Rodar com working tree limpo e revisar o diff arquivo a arquivo antes de aceitar. Qualquer alteração em `src/` deve ser tratada como sinal de incompatibilidade não prevista, e não como ajuste de rotina.

**Lint desacoplado do build, sem CI** → Enquanto não houver workflow, a sequência `lint` → `type-check` → `build` é obrigação humana. Mitigação imediata: manter as três na verificação final e na documentação. Mitigação real: CI, registrado em Open Questions.

**Deploy automático a partir de `main`** → Não fazer merge antes de validar o preview da Vercel. O build de preview é o primeiro lugar onde o Turbopack roda fora do ambiente local.

## Migration Plan

1. Working tree limpo, branch dedicada.
2. Capturar a saída de referência com o script de paridade, ainda no estado atual.
3. `npx @next/codemod@canary upgrade latest`.
4. Revisar o diff: `package.json`, `next.config.js`, `.eslintrc.json` removido e `eslint.config.mjs` criado. Confirmar que `src/` não foi tocado.
5. Portar a configuração do Prettier para o `eslint.config.mjs` antes de rodar qualquer `lint:fix`.
6. Subir `react`, `react-dom`, `@types/react` e `@types/react-dom` para a linha 19, caso o codemod não tenha feito.
7. Ajustar as devDependencies: remover `@typescript-eslint/*` diretas, subir `eslint-config-prettier` para a linha 10, aplicar os patches e minors seguros, confirmar que `typescript`, `eslint` e `tailwindcss` permanecem nos tetos decididos.
8. Validar: lint, depois `npm run type-check`, depois `npm run build`. A partir daqui o lint roda como `npm run lint`, sem `rtk proxy`.
9. Rodar o script de paridade contra a referência do passo 2.
10. Atualizar a seção de lint em `CLAUDE.md` e `AGENTS.md`.
11. Decidir `engines.node` e aplicar, se afirmativo.
12. Abrir PR e validar o preview da Vercel antes do merge em `main`.

**Rollback:** o upgrade vive em branch própria e o deploy só ocorre no merge em `main`, então reverter é não fazer merge. Se um problema aparecer apenas em produção, `git revert` do merge restaura o estado anterior e a Vercel reconstrói. Para problema restrito ao bundler, `next build --webpack` resolve sem desfazer o upgrade.

## Open Questions

- **Valor de `engines.node`.** O piso do Next 16 é `>=20.9.0`, mas o runtime padrão da Vercel é mais novo. Declarar o piso do framework ou alinhar com o runtime efetivo de deploy são escolhas diferentes, e a segunda também determina a linha correta de `@types/node`. Não altera specs, abordagem nem quebra de tasks; pode ser decidido durante a execução.
- **Adicionar CI.** Com o lint desacoplado do build e sem workflow, não há portão automatizado. Um workflow mínimo rodando `lint`, `type-check` e `build` em PR fecharia a lacuna, e só então um smoke test de navegador passaria a se pagar. É decisão de escopo própria e não bloqueia este upgrade.
