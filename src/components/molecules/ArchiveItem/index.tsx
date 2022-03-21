import { memo } from 'react'
import { Box, Flex, Text, Center, useColorModeValue } from '@chakra-ui/react'
import { Counter } from '@/components/atoms/Counter'

export interface Props {
  /**
   * カウント
   */
  count?: number
  /**
   * フォルダ
   */
  folder?: number
  /**
   * ファイル
   */
  file?: number
  /**
   * trueならアクティブ
   */
  isActive: boolean
  /**
   * クリックイベントで行う処理
   */
  onClick: (args?: unknown) => void
}

const ArchiveItem: React.FC<Props> = memo(
  ({ children, isActive, count = 0, folder = 0, file = 0, onClick }) => {
    const hoverBgColor = useColorModeValue('#e5e5e5', '#353839')
    const textColor = useColorModeValue('dark', 'white')
    return (
      <Flex
        p={2}
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        backgroundColor={isActive ? hoverBgColor : 'transparent'}
        borderRadius={'10px'}
        _hover={{ backgroundColor: hoverBgColor }}
        onClick={onClick}
      >
        <Text fontSize="sm" colorScheme={textColor} fontWeight="bold">
          {children}
        </Text>
        <Counter number={count} folder={folder} file={file} />
      </Flex>
    )
  },
)

export default ArchiveItem
