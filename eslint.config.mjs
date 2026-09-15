import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { ignores: ['.next/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  // Compõe eslint-config-prettier e o plugin numa entrada só; vem depois dos
  // configs do Next para desligar as regras de formatação que eles trazem.
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, printWidth: 120, semi: false }],
      'jsx-quotes': ['error', 'prefer-single'],
    },
  },
])
