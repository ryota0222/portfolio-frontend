import { ChakraProvider, useColorMode, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { useRouter } from 'next/router'
import { RtlProvider } from '@/plugins/rtl-provider'
import c from '@/utils/colorMode'

const Provider = ({ children }) => {
  const { locale } = useRouter()
  // カラーモードの取得
  const _mode = c.getColorMode()
  const { colorMode, toggleColorMode } = useColorMode()
  if (_mode) {
    if (_mode !== colorMode) toggleColorMode()
  }
  const direction = locale === 'ar' ? 'rtl' : 'ltr'
  const styles = {
    global: (props) => ({
      body: {
        bg: mode('#FBFBFB', '#404040')(props),
      },
    }),
  }
  const colors = { black: '#404040', white: '#FBFBFB' }
  return (
    <ChakraProvider theme={extendTheme({ direction, styles, colors })}>
      <RtlProvider>{children}</RtlProvider>
    </ChakraProvider>
  )
}

export default Provider
