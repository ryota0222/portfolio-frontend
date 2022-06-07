import React, { memo, useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const BgText: React.FC<Props> = memo(({ size }) => {
  const { isDark, BG_COLOR: textColor } = useDesignSystem()
  const textShadow = useMemo(() => {
    if (size === 'lg') {
      return isDark
        ? '6px 4px 21px #222222, -6px -6px 16px #666666'
        : '6px 4px 12px #E6E6E6, -6px -6px 12px #FFFFFF'
    } else {
      return isDark
        ? '3px 2px 11px #222222, -3px -4px 8px #666666'
        : '3px 2px 5px #E6E6E6, -4px -4px 6px #FFFFFF'
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
    >
      RyoTa.
    </Box>
  )
})
