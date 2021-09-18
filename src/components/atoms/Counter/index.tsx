import { memo, useMemo } from 'react'
import { Box, Flex, Text, Center, useColorModeValue } from '@chakra-ui/react'

export interface Props {
  /**
   * 幅
   */
  number: number
}

export const Counter = memo(({ number }: Props) => {
  const countBg = useColorModeValue('#dedede', '#5A5A5A')
  const textColor = useColorModeValue('dark', 'white')
  const displayNumber = useMemo(() => {
    if (number > 99) return '99+'
    return number
  }, [number])
  if (number <= 0) {
    return <></>
  } else {
    return (
      <Center
        as="span"
        w="22px"
        h="22px"
        borderRadius="6px"
        backgroundColor={countBg}
      >
        <Text
          fontFamily="monospace"
          fontSize="xs"
          colorScheme={textColor}
          fontWeight="bold"
        >
          {displayNumber}
        </Text>
      </Center>
    )
  }
})

export default Counter
