import { memo } from 'react'
import { Box, Flex, Text, Center, useColorModeValue } from '@chakra-ui/react'
import { Counter } from '@/components/atoms/Counter'

export interface Props {
  /**
   * 幅
   */
  count: number
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
  ({ children, isActive, count, onClick }) => {
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
        <Counter number={count} />
      </Flex>
    )
  },
)

export default ArchiveItem
