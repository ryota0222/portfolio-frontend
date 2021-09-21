import { ReactNode, memo } from 'react'
import { Circle, Text, useColorModeValue, Flex } from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'

export interface Props {
  /**
   * ラベル
   */
  children: ReactNode
  /**
   * 完了したかどうか
   */
  complete?: Boolean
}

export const RoadmapListItem = memo(({ children, complete }: Props) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  const bg = useColorModeValue('#FBFBFB', '#404040')
  const shadow = useColorModeValue(
    '-1px -1px 2px 1px #FFFFFF, 1px 1px 4px #D3D3D3',
    '-1px -1px 2px 1px #4F4F4F, 1px 1px 4px #161616',
  )
  return (
    <Flex alignItems="center">
      <Text
        color={textColor}
        fontSize="md"
        textDecoration={complete ? 'line-through' : 'none'}
      >
        {children}
      </Text>
    </Flex>
  )
})

RoadmapListItem.displayName = 'RoadmapListItem'
