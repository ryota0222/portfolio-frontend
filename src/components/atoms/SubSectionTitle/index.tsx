import React, { memo, useMemo } from 'react'
import { Box, Text, TextProps } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Size } from './type'

interface Props extends TextProps {
  size: Size
}

export const SubSectionTitle: React.FC<Props> = memo(
  ({ size, children, ...props }) => {
    const { TEXT_COLOR } = useDesignSystem()
    const role = useMemo(() => {
      return props.as || 'p'
    }, [props.as])
    // style: Font Size
    const fontSize = useMemo(() => {
      return size === 'lg' ? 'xl' : 'md'
    }, [size])
    // style: Underline
    const UnderlineStyle = useMemo(() => {
      if (size === 'lg') {
        return {
          w: '64px',
          h: '4px',
        }
      } else {
        return {
          w: '40px',
          h: '3px',
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
        >
          {children}
        </Text>
        <Box
          position="absolute"
          b={0}
          l={0}
          w={UnderlineStyle.w}
          h={UnderlineStyle.h}
          background={TEXT_COLOR}
        ></Box>
      </Box>
    )
  },
)