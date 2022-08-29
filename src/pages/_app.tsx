import 'styles/global.tsx'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
