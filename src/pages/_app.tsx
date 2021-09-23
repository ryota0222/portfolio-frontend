import { useEffect } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { AppProps } from 'next/app'
import { FooterComponent } from '@/components/organisms/Footer'
import { HeaderComponent } from '@/components/organisms/Header'
import { SpHeaderComponent } from '@/components/organisms/SpHeader'
import Provider from '@/components/templates/Provider'
import usePageView from '@/hooks/usePageView'
import { Container } from '@/styles/globals'
import '@/styles/globals.css'
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
  const bp = useBreakpointValue({ base: 'base', md: 'md' })
  return (
    <>
      {bp === 'base' && <SpHeaderComponent />}
      {bp === 'md' && <HeaderComponent />}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // 文字サイズの取得
    const fontSize = f.getFontSize()
    // 文字サイズの保存
    f.setFontSize(fontSize)
    // vhの値の保存
    setFillHeight()
    // イベントの生成
    if (window) {
      window.addEventListener('resize', setFillHeight)
    }
    ;() => {
      // イベントの削除
      window.removeEventListener('resize', setFillHeight)
    }
  }, [])
  // PVをカウントするイベント
  usePageView()
  return (
    <Provider>
      <Container>
        <Header />
        <Box w="full" as="main" h="100%">
          <Component {...pageProps} />
        </Box>
        <FooterComponent />
      </Container>
    </Provider>
  )
}

const setFillHeight = () => {
  if (window) {
    // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
    let vh = window.innerHeight * 0.01
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }
}

export default MyApp
