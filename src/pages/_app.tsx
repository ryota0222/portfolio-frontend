import { memo } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { AppProps } from 'next/app'
import { FooterComponent } from '@/components/organisms/Footer'
import { HeaderComponent } from '@/components/organisms/Header'
import { SpHeaderComponent } from '@/components/organisms/SpHeader'
import Provider from '@/components/templates/Provider'
import useFillHeightEffect from '@/hooks/useFillHeightEffect'
import useFontSizeEffect from '@/hooks/useFontSizeEffect'
import usePageView from '@/hooks/usePageView'
import { Container } from '@/styles/global.css'
import '@/styles/globals.css'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  allowUrls: [process.env.NEXT_PUBLIC_SITE_URL],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

const Header = memo(() => {
  const bp = useBreakpointValue({ base: 'base', md: 'md' })
  return (
    <>
      {bp === 'base' && <SpHeaderComponent />}
      {bp === 'md' && <HeaderComponent />}
    </>
  )
})

function MyApp({ Component, pageProps }: AppProps) {
  // フォントサイズの大きさの取得 / 設定
  useFontSizeEffect()
  // 高さの検知と変更
  useFillHeightEffect()
  // PVをカウントするイベント
  usePageView()
  return (
    <Provider>
      <Container>
        {/* ヘッダー */}
        <Header />
        {/* メインコンテンツ */}
        <Box w="full" as="main" h="100%">
          <Component {...pageProps} />
        </Box>
        {/* フッター */}
        <Box position={'absolute'} bottom={0} left={0} w="100vw">
          <FooterComponent />
        </Box>
      </Container>
    </Provider>
  )
}

export default MyApp
