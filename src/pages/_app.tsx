import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { HeaderComponent } from '@/components/organisms/Header'
import { SpHeaderComponent } from '@/components/organisms/SpHeader'
import { RtlProvider } from '@/plugins/rtl-provider'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const direction = locale === 'ar' ? 'rtl' : 'ltr'
  const styles = {
    global: (props) => ({
      body: {
        bg: mode('#FBFBFB', '#404040')(props),
      },
    }),
  }
  return (
    <ChakraProvider theme={extendTheme({ direction, styles })}>
      <RtlProvider>
        {/* <HeaderComponent /> */}
        <SpHeaderComponent />
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  )
}

export default MyApp
