import { memo } from 'react'
import { Box, Text, useColorModeValue, Flex } from '@chakra-ui/react'

export interface Props {
  /**
   * ラベル
   */
  label: string
  /**
   * タグの色
   */
  color: string
}

export const TagLabel = memo(({ label, color }: Props) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  return (
    <Flex alignItems="center">
      <Box
        bg={color}
        width="24px"
        height="24px"
        borderRadius="4px"
        display="inline-block"
        mr="2"
      ></Box>
      <Text fontSize="md" color={textColor}>
        {label}
      </Text>
    </Flex>
  )
})

TagLabel.displayName = 'TagLabel'
