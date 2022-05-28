import React, { memo, useMemo } from 'react'
import { Box, Text, TextProps } from '@chakra-ui/react'
import { GRADIENT } from '@/consts/style'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Size } from './type'

interface Props extends TextProps {
  size: Size
}

export const SectionTitle: React.FC<Props> = memo(
  ({ size, children, ...props }) => {
    const { TEXT_COLOR } = useDesignSystem()
    const role = useMemo(() => {
      return props.as || 'p'
    }, [props.as])
    // style: Font Size
    const fontSize = useMemo(() => {
      return size === 'lg' ? '3xl' : 'lg'
    }, [size])
    // style: Shadow
    const shadow = useMemo(() => {
      return size === 'lg'
        ? '12px 12px 4px rgba(0, 0, 0, 0.16)'
        : '8px 8px 3px rgba(0, 0, 0, 0.16)'
    }, [size])
    // style: Underline
    const UnderlineStyle = useMemo(() => {
      if (size === 'lg') {
        return {
          w: '80px',
          h: '8px',
        }
      } else {
        return {
          w: '56px',
          h: '6px',
        }
      }
    }, [size])
    return (
      <Box position="relative">
        <Text
          as={role}
          color={TEXT_COLOR}
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="'Josefin Sans'"
          textShadow={shadow}
          pb={2}
        >
          {children}
        </Text>
        <Box
          position="absolute"
          b={0}
          l={0}
          w={UnderlineStyle.w}
          h={UnderlineStyle.h}
          background={GRADIENT}
          boxShadow={shadow}
        ></Box>
      </Box>
    )
  },
)
