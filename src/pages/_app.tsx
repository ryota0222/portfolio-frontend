import {
  ChakraProvider,
  extendTheme,
  useBreakpointValue,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { FooterComponent } from '@/components/organisms/Footer'
import { HeaderComponent } from '@/components/organisms/Header'
import { SpHeaderComponent } from '@/components/organisms/SpHeader'
import { RtlProvider } from '@/plugins/rtl-provider'
import '../../styles/globals.css'

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
        <Container>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
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
