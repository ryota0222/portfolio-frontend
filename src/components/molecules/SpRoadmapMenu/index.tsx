import { memo, useMemo, useState } from 'react'
import { Box, useColorModeValue, Text, Flex, Collapse } from '@chakra-ui/react'
import throttle from 'just-throttle'
import { useRouter } from 'next/router'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { RoadmapType } from '@/types/interface'

export interface Props {
  /**
   * ロードマップのタイプ
   */
  roadmapType: RoadmapType
}

export interface RoadmapItemProps {
  /**
   * ロードマップのタイプ
   */
  type: RoadmapType
  /**
   * trueの場合選択中
   */
  selected: boolean
}

const RoadmapItem = ({ type, selected }: RoadmapItemProps) => {
  const iconColor = useColorModeValue('#B9B9B9', '#DADADA')
  const textColor = useColorModeValue('#526E7D', '#FFFFFF')
  const toggleIconName = useMemo(() => {
    switch (type) {
      case 'schedule':
        return !selected ? 'map-solid' : 'map-gradient'
      case 'develop':
        return !selected ? 'person-solid' : 'person-gradient'
      case 'merge':
        return !selected ? 'flag-solid' : 'flag-gradient'
    }
  }, [type, selected])
  return (
    <Flex flexFlow="column" alignItems="center" cursor="pointer">
      <SvgIcon
        name={toggleIconName}
        color={iconColor}
        width={'36px'}
        height={'36px'}
      />
      <Collapse in={selected} animateOpacity>
        <Text color={textColor} fontWeight="bold" fontSize="xs" mt={1}>
          {type === 'schedule' && '未実装'}
          {type === 'develop' && '開発中'}
          {type === 'merge' && '実装済'}
        </Text>
      </Collapse>
    </Flex>
  )
}

export const RoadmapMenu = memo(({ roadmapType }: Props) => {
  const bg = useColorModeValue('#FBFBFB', '#404040')
  const router = useRouter()
  const shadow = useColorModeValue(
    '4px 4px 12px rgba(0, 0, 0, 0.04), -4px -4px 10px 4px #FFFFFF',
    '4px 4px 12px #171717, -4px -4px 10px 4px #494949',
  )
  const handleClick = throttle(
    (type: RoadmapType) => {
      if (router) {
        router.push(`/roadmap?type=${type}`)
      }
    },
    500,
    { trailing: false },
  )

  return (
    <Box
      display="inline-flex"
      height="200px"
      boxSizing="border-box"
      pt="32px"
      px="48px"
      boxShadow={shadow}
      borderRadius="60px"
      maxWidth="400px"
      width="90vw"
      justifyContent="space-between"
      bg={bg}
    >
      {/* schedule */}
      <Box onClick={() => handleClick('schedule')}>
        <RoadmapItem type="schedule" selected={roadmapType === 'schedule'} />
      </Box>
      {/* develop */}
      <Box onClick={() => handleClick('develop')}>
        <RoadmapItem type="develop" selected={roadmapType === 'develop'} />
      </Box>
      {/* merge */}
      <Box onClick={() => handleClick('merge')}>
        <RoadmapItem type="merge" selected={roadmapType === 'merge'} />
      </Box>
    </Box>
  )
})

RoadmapMenu.displayName = 'RoadmapMenu'
