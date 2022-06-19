import { Box } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AppFooter } from '@/components/organisms/Footer'
import { AppHeader } from '@/components/organisms/Header'
import Provider from '@/containers/Provider'
import useFillHeightEffect from '@/hooks/useFillHeightEffect'
import useFontSizeEffect from '@/hooks/useFontSizeEffect'
import usePageView from '@/hooks/usePageView'
import { Container } from '@/styles/global.css'
import '@/styles/globals.css'
import { useMemo } from 'react'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  allowUrls: [process.env.NEXT_PUBLIC_SITE_URL],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

function MyApp({ Component, pageProps }: AppProps) {
  // フォントサイズの大きさの取得 / 設定
  useFontSizeEffect()
  // 高さの検知と変更
  useFillHeightEffect()
  // PVをカウントするイベント
  usePageView()
  const router = useRouter()
  const pathname = router.pathname
  const headerPosition = useMemo(() => {
    return pathname !== '/blog/[id]' ? 'sticky' : 'initial'
  }, [pathname])
  return (
    <Provider>
      <Container>
        {/* ヘッダー */}
        <AppHeader
          pathname={pathname}
          position={headerPosition}
          top={0}
          left={0}
          backdropFilter="blur(4px)"
        />
        {/* メインコンテンツ */}
        <Box w="full" as="main" h="100%">
          <Component {...pageProps} />
        </Box>
        {/* フッター */}
        <Box position={'absolute'} bottom={0} left={0} w="100vw">
          <AppFooter />
        </Box>
      </Container>
    </Provider>
  )
}

export default MyApp
