import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RtlProvider } from '@/plugins/rtl-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const direction = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <ChakraProvider theme={extendTheme({ direction })}>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  )
}

export default MyApp
