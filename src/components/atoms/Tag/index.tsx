import { ReactNode, memo } from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface Props {
  /**
   * ラベル
   */
  children: ReactNode
  /**
   * 背景
   */
  bg: string
}

export const Tag = memo(({ children, bg }: Props) => {
  // 16進数のカラーコードの不透明度を50％にする
  const _bg = `${bg}50`
  return (
    <Box bg={_bg} px={2} display="inline-block">
      <Text fontSize="xs" color="white">
        {children}
      </Text>
    </Box>
  )
})

Tag.displayName = 'Tag'
