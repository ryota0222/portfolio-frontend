import { useEffect } from 'react'
import {
  Box,
  ChakraProvider,
  extendTheme,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { FooterComponent } from '@/components/organisms/Footer'
import { HeaderComponent } from '@/components/organisms/Header'
import { SpHeaderComponent } from '@/components/organisms/SpHeader'
import { RtlProvider } from '@/plugins/rtl-provider'
import '../../styles/globals.css'
import c from '@/utils/colorMode'
import f from '@/utils/fontSize'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  allowUrls: [process.env.NEXT_PUBLIC_SITE_URL],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

const Header = () => {
  const bp = useBreakpointValue({ base: 'base', sm: 'sm' })
  return (
    <>
      {bp === 'base' && <SpHeaderComponent />}
      {bp === 'sm' && <HeaderComponent />}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const direction = locale === 'ar' ? 'rtl' : 'ltr'
  const styles = {
    global: (props) => ({
      body: {
        bg: mode('#FBFBFB', '#404040')(props),
      },
    }),
  }
  useEffect(() => {
    // 文字サイズの取得
    const fontSize = f.getFontSize()
    // 文字サイズの保存
    f.setFontSize(fontSize)
    // カラーモードの取得
    const mode = c.getColorMode()
    if (mode) {
      if (mode !== colorMode) toggleColorMode()
    }
  }, [])
  const colors = { black: '#404040', white: '#FBFBFB' }
  return (
    <ChakraProvider theme={extendTheme({ direction, styles, colors })}>
      <RtlProvider>
        <Container>
          <Header />
          <Box w="full" as="main" h="100%">
            <Component {...pageProps} />
          </Box>
          <FooterComponent />
        </Container>
      </RtlProvider>
    </ChakraProvider>
  )
}

export default MyApp

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`
