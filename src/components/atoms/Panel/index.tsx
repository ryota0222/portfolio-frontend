import { memo } from 'react'
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export interface Props extends BoxProps {
  /**
   * 幅
   */
  width?: string
  /**
   * 幅
   */
  height?: string
}

export const Panel: React.FC<Props> = memo((props) => {
  const bg = useColorModeValue(
    'rgba(245, 245, 245, 0.88)',
    'rgba(40, 43, 44, 0.88)',
  )
  return (
    <Box
      bg={bg}
      backdropFilter="blur(4px)"
      boxSizing="border-box"
      px={4}
      py={2}
      borderRadius="lg"
      {...props}
    >
      {props.children}
    </Box>
  )
})

Panel.displayName = 'Panel'
