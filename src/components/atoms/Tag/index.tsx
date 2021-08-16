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
    <Box bg={_bg} px={2} display="inline-block" data-type="tag">
      <Text fontSize="x-small" color="white" lineHeight="18px">
        {children}
      </Text>
    </Box>
  )
})

Tag.displayName = 'Tag'
