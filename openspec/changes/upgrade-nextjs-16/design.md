## Context

Ver `proposal.md` — Why para a motivação.

A investigação de compatibilidade foi concluída e alterou a premissa central do planejamento. O que a proposal registrava como desconhecido — se `@headlessui/react` suporta React 19 — está resolvido, e no sentido mais favorável possível.

Estado verificado das três dependências de UI:

| Pacote | Versão instalada | `peerDependencies` | Bump necessário |
| --- | --- | --- | --- |
| `@headlessui/react` | 2.2.9 | `^18 \|\| ^19 \|\| ^19.0.0-rc` | Não |
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

Padrões de tipo sensíveis ao `@types/react` 19 no código do projeto: `useRef()` sem argumento, `JSX.Element`, `React.FC`, `PropsWithChildren` e `ElementRef` têm zero ocorrências. Há três usos de `ReactNode`, todos na forma canônica `children: ReactNode`, em `src/app/layout.tsx`, `src/components/ui/Badge.tsx` e `src/components/Layout.tsx`. O único estreitamento de `ReactNode` no React 19 foi a remoção de `{}`, que atinge atribuição de objeto arbitrário — não é o caso.

## Goals / Non-Goals

**Goals:**

- Executar Next.js 16 e React 19 como uma única change, com validação em uma só rodada.
- Sair do `next lint` para o ESLint CLI com flat config, eliminando o contorno `rtk proxy`.
- Preservar saída idêntica: mesmas quatro rotas estáticas, mesmo HTML de metadata, mesma identidade visual.
- Deixar registrada a evidência de compatibilidade, para que a decisão de escopo seja auditável depois.

**Non-Goals:**

- Substituir `react-feather`. A dívida está registrada em Risks, mas resolver agora misturaria troca de biblioteca com upgrade de framework e comprometeria o diagnóstico de qualquer regressão.
- Adotar recursos novos do Next 16 (Cache Components, PPR, `proxy`). O objetivo é paridade, não expansão.
- Migrar `next.config.js` para `next.config.ts` ou `vercel.ts`.
- Alterar conteúdo, layout ou estilo.

## Decisions

### Next 16 e React 19 na mesma change, não em duas

Separar só se justifica quando há incompatibilidade a isolar. Não há: as três bibliotecas aceitam React 19, nenhuma usa API removida, e o código não tem padrão de tipo em risco.

Alternativa considerada: subir Next 16 mantendo React 18. Rejeitada por dois motivos. O React 18 é deprecado no Next 16 e removido no Next 17, então o estado intermediário é uma parada obrigatória com prazo. E o build passaria a emitir `React 18 support is deprecated`, ruído permanente até a segunda etapa. Duas rodadas de validação para chegar ao mesmo destino.

### Codemod primeiro, ajuste manual depois

O caminho é `npx @next/codemod@canary upgrade latest`. O `next upgrade` só existe a partir do 16.1.0 e não está disponível vindo do 15.5.9.

Alternativa considerada: editar `package.json` e configs à mão. Rejeitada porque o codemod cobre a migração `next lint` para ESLint CLI, que é a parte mais mecânica e mais fácil de errar sutilmente. O ajuste manual entra depois, sobre o resultado do codemod, e fica visível no diff.

### Turbopack fica como default, sem opt-out preventivo

O projeto não define `webpack` em `next.config.js`, então não incide a falha de build que o Next 16 provoca em configuração customizada.

Alternativa considerada: fixar `next build --webpack` desde já. Rejeitada por mascarar incompatibilidade em vez de revelá-la, e por criar dívida na direção contrária à do framework. O `--webpack` permanece disponível como rollback parcial, documentado em Migration Plan.

### Validação por paridade de saída, não só por build verde

Um build que passa não prova que o HTML gerado é o mesmo. A verificação compara a saída de antes e depois: `canonical`, `og:url`, `og:image`, `sitemap.xml` e `robots.txt`, além das quatro rotas estáticas.

Isso importa porque a change de domínio alterou esses mesmos campos recentemente. Uma regressão de metadata aqui passaria despercebida em inspeção visual.

### Documentação do lint é atualizada na mesma change

`CLAUDE.md` e `AGENTS.md` obrigam hoje `rtk proxy npm run lint`. Com flat config, a instrução fica incorreta. Atualizar depois deixaria a documentação mentindo por uma janela — e é exatamente o tipo de erro que a seção existe para evitar.

## Risks / Trade-offs

**Tailwind 3.4 + PostCSS sob Turbopack não validado neste projeto** → Validar com paridade de saída, não só build verde: comparar o CSS gerado e inspecionar as seções em dark e light mode. Se houver divergência, `next build --webpack` destrava o merge sem reverter o upgrade.

**`react-feather` sem publicação desde 2022-05-30** → Fora de escopo aqui. Funciona com React 19, verificado no código publicado. O range `>=16.8.6` é aberto, então o npm nunca vai sinalizar uma quebra futura. São 10 ícones em 6 arquivos, todos SVG estático — a substituição é barata quando for necessária.

**Codemod tocando mais do que o esperado** → Rodar com working tree limpo e revisar o diff arquivo a arquivo antes de aceitar. Qualquer alteração em `src/` deve ser tratada como sinal de incompatibilidade não prevista, e não como ajuste de rotina.

**Flat config alterando o conjunto de regras em vigor** → O `.eslintrc.json` tem três `extends` e duas `rules`. Após a migração, confirmar que `prettier/prettier` e `jsx-quotes` continuam ativas rodando o lint antes e depois e comparando o número de arquivos analisados.

**Deploy automático a partir de `main`** → Não fazer merge antes de validar o preview da Vercel. O build de preview é o primeiro lugar onde o Turbopack roda fora do ambiente local.

## Migration Plan

1. Working tree limpo, branch dedicada.
2. `npx @next/codemod@canary upgrade latest`.
3. Revisar o diff: `package.json`, `next.config.js`, `.eslintrc.json` removido e `eslint.config.mjs` criado. Confirmar que `src/` não foi tocado.
4. Subir `react`, `react-dom`, `@types/react` e `@types/react-dom` para a linha 19, caso o codemod não tenha feito.
5. Validar: lint, depois `npm run type-check`, depois `npm run build`. A partir daqui o lint roda como `npm run lint`, sem `rtk proxy`.
6. Comparar a saída construída com a anterior: `canonical`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt` e as quatro rotas.
7. Atualizar a seção de lint em `CLAUDE.md` e `AGENTS.md`.
8. Considerar declarar `engines.node` como `>=20.9.0` em `package.json`, agora que o Next 16 exige.
9. Abrir PR e validar o preview da Vercel antes do merge em `main`.

**Rollback:** o upgrade vive em branch própria e o deploy só ocorre no merge em `main`, então reverter é não fazer merge. Se um problema aparecer apenas em produção, `git revert` do merge restaura o estado anterior e a Vercel reconstrói. Para problema restrito ao bundler, `next build --webpack` resolve sem desfazer o upgrade.

## Open Questions

- Declarar ou não `engines.node` no `package.json`. Não altera specs, abordagem nem quebra de tasks; pode ser decidido durante a execução.
