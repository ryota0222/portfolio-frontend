import React, { memo, useMemo } from 'react'
import { Box, Text } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import {
  UNDERLINE_STYLE_LARGE_WIDTH,
  UNDERLINE_STYLE_LARGE_HEIGHT,
  UNDERLINE_STYLE_DEFAULT_WIDTH,
  UNDERLINE_STYLE_DEFAULT_HEIGHT,
} from './const'
import { Props } from './type'

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
          w: UNDERLINE_STYLE_LARGE_WIDTH,
          h: UNDERLINE_STYLE_LARGE_HEIGHT,
        }
      } else {
        return {
          w: UNDERLINE_STYLE_DEFAULT_WIDTH,
          h: UNDERLINE_STYLE_DEFAULT_HEIGHT,
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
