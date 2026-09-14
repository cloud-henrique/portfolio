## 1. Preparação e linha de base

- [ ] 1.1 Confirmar working tree limpo com `git status --short` sem saída, em branch dedicada criada a partir de `main`, e verificar que `node -v` retorna versão >= 20.9.0 conforme exigido pelo Next.js 16
- [ ] 1.2 Rodar a sequência de validação atual (`rtk proxy npm run lint`, `npm run type-check`, `npm run build`) e verificar que as três passam antes de qualquer alteração, estabelecendo a linha de base
- [ ] 1.3 Salvar a saída construída de referência fora do repositório — `canonical`, `og:url` e `og:image` do HTML gerado, mais `sitemap.xml` e `robots.txt` — e verificar que os cinco valores foram capturados, para a comparação de paridade da seção 5

## 2. Upgrade do Next.js via codemod

- [ ] 2.1 Executar `npx @next/codemod@canary upgrade latest` e verificar que o comando termina sem erro, listando as transformações aplicadas
- [ ] 2.2 Revisar o diff arquivo a arquivo e verificar que `src/` não foi tocado — qualquer alteração ali indica incompatibilidade não prevista e deve interromper a execução para reavaliação, não ser aceita como ajuste de rotina
- [ ] 2.3 Confirmar no diff que `next` e `eslint-config-next` subiram para a linha 16 em `package.json`, e verificar com `npm ls next` que a versão instalada corresponde
- [ ] 2.4 Rodar `npm run build` e verificar que compila sob Turbopack, gerando as quatro rotas estáticas (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`) — neste ponto o build ainda roda com React 18 e deve emitir o aviso de depreciação, que é esperado

## 3. Upgrade do React 19

- [ ] 3.1 Subir `react`, `react-dom`, `@types/react` e `@types/react-dom` para a linha 19 caso o codemod não tenha feito, e verificar com `npm ls react react-dom` que não há conflito de peer dependency
- [ ] 3.2 Rodar `npm run type-check` e verificar que passa sem erro, confirmando que os três usos de `children: ReactNode` e os tipos de `react-feather` seguem válidos sob `@types/react` 19
- [ ] 3.3 Rodar `npm run build` e verificar que compila e que o aviso `React 18 support is deprecated` desapareceu da saída

## 4. Migração do lint para flat config

- [ ] 4.1 Verificar que o codemod substituiu `.eslintrc.json` por `eslint.config.mjs` e que os scripts `lint` e `lint:fix` em `package.json` invocam o ESLint CLI, não `next lint`
- [ ] 4.2 Rodar `npm run lint` **sem** `rtk proxy` e verificar que passa com `No ESLint warnings or errors`, confirmando que o contorno deixou de ser necessário
- [ ] 4.3 Confirmar que `prettier/prettier` e `jsx-quotes` continuam em vigor: introduzir temporariamente uma violação de cada uma (aspas duplas em JSX e formatação fora do padrão), verificar que o lint acusa as duas, e reverter

## 5. Validação de paridade da saída

- [ ] 5.1 Comparar `canonical`, `og:url` e `og:image` do HTML construído contra a referência salva em 1.3 e verificar que os três apontam para `https://www.claudiohenrique.dev.br`, sem alteração
- [ ] 5.2 Comparar `sitemap.xml` e `robots.txt` construídos contra a referência de 1.3 e verificar que são idênticos, exceto pelo `lastmod` do sitemap, que muda a cada build por usar `new Date()`
- [ ] 5.3 Rodar `npm run dev` e verificar nas sete sections que o CSS do Tailwind foi aplicado corretamente sob Turbopack, alternando entre tema claro e escuro e confirmando que o toggle não produz hydration mismatch no console
- [ ] 5.4 Verificar navegação por teclado e foco visível no `Switch` de tema e nos links do header, confirmando que a acessibilidade não regrediu com o React 19

## 6. Documentação e metadados do projeto

- [ ] 6.1 Remover de `CLAUDE.md` e `AGENTS.md` a instrução que obriga `rtk proxy npm run lint`, substituindo por `npm run lint`, e verificar que nenhum dos dois arquivos ainda menciona `rtk proxy` nem `next lint`
- [ ] 6.2 Decidir se `engines.node` (`>=20.9.0`) entra em `package.json` — questão em aberto registrada no design — e, se afirmativo, adicionar e verificar que `npm install` não emite aviso de incompatibilidade

## 7. Verificação final e deploy

- [ ] 7.1 Rodar a sequência completa de validação (`npm run lint`, `npm run type-check`, `npm run build`) e verificar que as três passam em sequência limpa
- [ ] 7.2 Abrir PR e verificar no preview da Vercel que o build remoto passa sob Turbopack e que as quatro rotas respondem — primeiro ambiente fora do local onde o Turbopack roda
- [ ] 7.3 Confirmar no preview que `https://www.claudiohenrique.dev.br` segue como canônico no HTML servido, e só então fazer merge em `main`, ciente de que o merge dispara deploy automático de produção
