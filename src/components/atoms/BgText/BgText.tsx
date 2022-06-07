import React, { memo, useMemo } from 'react'
import { Box, useToken } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const BgText: React.FC<Props> = memo(({ size }) => {
  const { isDark, BG_COLOR: textColor } = useDesignSystem()
  const [appGray900Color, appGray600Color, appGray300Color]: string[] =
    useToken(
      // the key within the theme, in this case `theme.colors`
      'colors',
      ['app-gray.900', 'app-gray.600', 'app-gray.300'],
    )
  const textShadow = useMemo(() => {
    if (size === 'lg') {
      return isDark
        ? `6px 4px 21px ${appGray900Color}, -6px -6px 16px ${appGray600Color}`
        : `6px 4px 12px ${appGray300Color}, -6px -6px 12px white`
    } else {
      return isDark
        ? `3px 2px 11px ${appGray900Color}, -3px -4px 8px ${appGray600Color}`
        : `3px 2px 5px ${appGray300Color}, -4px -4px 6px white`
    }
  }, [isDark, size])
  const fontSize = useMemo(() => {
    if (size === 'lg') return '9xl'
    else return '6xl'
  }, [size])
  return (
    <Box
      color={textColor}
      textShadow={textShadow}
      fontSize={fontSize}
      fontFamily="'Josefin Sans'"
      fontWeight={'bold'}
      d="inline-block"
      transform="rotate(-90deg)"
      aria-hidden={true}
    >
      RyoTa.
    </Box>
  )
})
