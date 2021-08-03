import { ReactNode, memo } from 'react'
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export interface Props extends BoxProps {
  /**
   * ラベル
   */
  children: ReactNode
  /**
   * 幅
   */
  width?: string
  /**
   * 幅
   */
  height?: string
}

export const Panel = memo((props: Props) => {
  const bg = useColorModeValue(
    'rgba(255, 255, 255, 0.72)',
    'rgba(53, 53, 53, 0.72)',
  )
  const _props = Object.assign({}, props)
  delete _props.children
  return (
    <Box
      bg={bg}
      border="1px solid #DDDDDD"
      boxSizing="border-box"
      backdropFilter="blur(4px)"
      p={2}
      borderRadius="1.5rem"
      {..._props}
    >
      {props.children}
    </Box>
  )
})

Panel.displayName = 'Panel'
