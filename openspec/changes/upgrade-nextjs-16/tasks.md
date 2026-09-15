## 1. Preparação e linha de base

- [x] 1.1 Confirmar working tree limpo com `git status --short` sem saída, em branch dedicada criada a partir de `main`, e verificar que `node -v` retorna versão >= 20.9.0 conforme exigido pelo `engines.node` do `next@16.3.5`
- [x] 1.2 Rodar a sequência de validação atual (`rtk proxy npm run lint`, `npm run type-check`, `npm run build`) e verificar que as três passam antes de qualquer alteração, estabelecendo a linha de base
- [x] 1.3 Criar o script de paridade em `scripts/` que extrai da saída construída os cinco valores de referência — `canonical`, `og:url` e `og:image` do HTML, mais o conteúdo de `sitemap.xml` e `robots.txt` — e verificar que ele roda sobre o build atual sem erro, usando apenas shell e utilitários já disponíveis, sem adicionar dependência
- [x] 1.4 Executar o script no estado atual, gravar a referência fora da árvore versionada e verificar que os cinco valores foram capturados de forma legível, para a comparação da seção 6

## 2. Upgrade do Next.js via codemod

- [ ] 2.1 Executar `npx @next/codemod@canary upgrade latest` e verificar que o comando termina sem erro, listando as transformações aplicadas
- [ ] 2.2 Revisar o diff arquivo a arquivo e verificar que `src/` não foi tocado — qualquer alteração ali indica incompatibilidade não prevista e deve interromper a execução para reavaliação, não ser aceita como ajuste de rotina
- [ ] 2.3 Confirmar no diff que `next` e `eslint-config-next` subiram para 16.3.5 em `package.json`, e verificar com `npm ls next` que a versão instalada corresponde
- [ ] 2.4 Rodar `npm run build` e verificar que compila sob Turbopack, gerando as quatro rotas estáticas (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`) — neste ponto o build ainda roda com React 18 e deve emitir o aviso de depreciação, que é esperado

## 3. Portar a configuração do Prettier para o flat config

Esta seção vem antes do React 19 e antes de qualquer `lint:fix`: o config gerado pelo codemod não reproduz as regras de formatação em vigor, e rodar o auto-fix sem portá-las reformataria o repositório inteiro.

- [ ] 3.1 Verificar que o codemod substituiu `.eslintrc.json` por `eslint.config.mjs` e que os scripts `lint` e `lint:fix` em `package.json` invocam o ESLint CLI, não `next lint`
- [ ] 3.2 Portar para o `eslint.config.mjs` os quatro itens que o codemod não reproduz — o `extends` de `prettier`, o plugin, a regra `prettier/prettier` com `singleQuote: true`, `printWidth: 120` e `semi: false`, e `jsx-quotes: prefer-single` — usando `eslint-plugin-prettier/recommended` seguido de um override explícito com as opções, e verificar que `npm run lint` passa
- [ ] 3.3 Rodar `npm run lint` **sem** `rtk proxy` e verificar que retorna sem warnings nem erros, confirmando que o contorno deixou de ser necessário
- [ ] 3.4 Confirmar que as duas regras estão de fato em vigor: introduzir temporariamente uma violação de cada uma (aspas duplas em JSX e formatação fora do padrão), verificar que o lint acusa as duas, e reverter
- [ ] 3.5 Rodar `npm run lint:fix` e verificar com `git diff` que a saída é vazia — prova de que a formatação em vigor foi preservada e que o auto-fix não está reformatando o repositório

## 4. Upgrade do React 19

- [ ] 4.1 Subir `react`, `react-dom`, `@types/react` e `@types/react-dom` para 19.3.0 caso o codemod não tenha feito, e verificar com `npm ls react react-dom` que não há conflito de peer dependency
- [ ] 4.2 Rodar `npm run type-check` e verificar que passa sem erro, confirmando que os três usos de `children: ReactNode` e os tipos de `react-feather` seguem válidos sob `@types/react` 19
- [ ] 4.3 Rodar `npm run build` e verificar que compila e que o aviso `React 18 support is deprecated` desapareceu da saída

## 5. Alinhamento das devDependencies

- [ ] 5.1 Remover `@typescript-eslint/eslint-plugin` e `@typescript-eslint/parser` das devDependencies diretas — já vêm como dependência do `eslint-config-next@16.3.5` — e verificar que `npm run lint` continua passando com as mesmas regras
- [ ] 5.2 Subir `eslint-config-prettier` para 10.1.8 e `eslint-plugin-prettier` para 5.5.6, e verificar que `npm run lint` passa e que a regra `prettier/prettier` continua acusando violação quando introduzida
- [ ] 5.3 Aplicar os patches e minors seguros (`eslint` 9.39.5, `@headlessui/react` 2.2.10, `prettier` 3.9.6, `autoprefixer` 10.6.0, `postcss` 8.5.28) e verificar que `npm run lint`, `npm run type-check` e `npm run build` seguem passando
- [ ] 5.4 Confirmar que os tetos decididos foram respeitados: verificar em `package.json` que `typescript` permanece na linha 5.9, `eslint` em `^9`, `tailwindcss` na linha 3.4 e `@types/node` na linha 22, e que `npm install` completa sem ERESOLVE e sem aviso de peer override

## 6. Validação de paridade da saída

- [ ] 6.1 Rodar o script de paridade contra a referência capturada em 1.4 e verificar que `canonical`, `og:url` e `og:image` seguem apontando para `https://www.claudiohenrique.dev.br`, sem alteração
- [ ] 6.2 Verificar na mesma execução que `sitemap.xml` e `robots.txt` são idênticos à referência, exceto pelo `lastmod` do sitemap, que muda a cada build por usar `new Date()` — o script deve ignorar esse campo ou sinalizá-lo como divergência esperada
- [ ] 6.3 Rodar `npm run dev` e verificar nas sete sections que o CSS do Tailwind foi aplicado corretamente sob Turbopack, alternando entre tema claro e escuro e confirmando que o toggle não produz hydration mismatch no console
- [ ] 6.4 Verificar navegação por teclado e foco visível no `Switch` de tema e nos links do header, confirmando que a acessibilidade não regrediu com o React 19

## 7. Documentação e metadados do projeto

- [ ] 7.1 Remover de `CLAUDE.md` e `AGENTS.md` a instrução que obriga `rtk proxy npm run lint`, substituindo por `npm run lint`, e verificar que nenhum dos dois arquivos ainda menciona `rtk proxy` nem `next lint`
- [ ] 7.2 Registrar em `CLAUDE.md` e `AGENTS.md` que o `next build` não roda mais ESLint, de modo que `lint`, `type-check` e `build` precisam ser executados explicitamente, e verificar que a sequência documentada corresponde à realidade pós-upgrade
- [ ] 7.3 Decidir o valor de `engines.node` — piso do framework (`>=20.9.0`) ou alinhado ao runtime da Vercel, questão em aberto registrada no design — e, se afirmativo, adicionar e verificar que `npm install` não emite aviso de incompatibilidade

## 8. Verificação final e deploy

- [ ] 8.1 Rodar a sequência completa de validação (`npm run lint`, `npm run type-check`, `npm run build`) e verificar que as três passam em sequência limpa
- [ ] 8.2 Abrir PR e verificar no preview da Vercel que o build remoto passa sob Turbopack e que as quatro rotas respondem — primeiro ambiente fora do local onde o Turbopack roda
- [ ] 8.3 Confirmar no preview que `https://www.claudiohenrique.dev.br` segue como canônico no HTML servido, e só então fazer merge em `main`, ciente de que o merge dispara deploy automático de produção
