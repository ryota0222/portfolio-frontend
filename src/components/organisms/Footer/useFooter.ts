import { useMemo } from 'react'
import { useColorModeValue, useToken } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const useFooter = () => {
  const router = useRouter()
  // ブログのパスかどうか
  const isBlogPath = useMemo(
    () => router.pathname === '/blog/[id]',
    [router.pathname],
  )
  const [appGray900Color, appGray100Color]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.900', 'app-gray.100'],
  )
  // style
  const position: 'absolute' | 'initial' = isBlogPath ? 'absolute' : 'initial'
  const color = useColorModeValue(appGray900Color, appGray100Color)
  return {
    color,
    position,
  }
}
