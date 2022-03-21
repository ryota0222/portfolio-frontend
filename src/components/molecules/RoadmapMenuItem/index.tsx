import { memo, useMemo, useState } from 'react'
import { Box, useColorModeValue, Text, Flex, VStack } from '@chakra-ui/react'
import throttle from 'just-throttle'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { RoadmapType } from '@/types/interface'

export interface Props {
  /**
   * ロードマップのタイプ
   */
  roadmapType: RoadmapType
}

const TitleComponent: React.FC<Props> = memo(({ roadmapType }) => {
  const textColor = useColorModeValue('#526E7D', '#FFFFFF')
  const text = useMemo(() => {
    if (roadmapType === 'schedule') return '未実装'
    if (roadmapType === 'develop') return '開発中'
    if (roadmapType === 'merge') return '実装済'
  }, [roadmapType])
  return (
    <VStack w="full">
      {roadmapType === 'schedule' && (
        <SvgIcon name="map-gradient" width={'40px'} height={'40px'} />
      )}
      {roadmapType === 'develop' && (
        <SvgIcon name="person-gradient" width={'40px'} height={'40px'} />
      )}
      {roadmapType === 'merge' && (
        <SvgIcon name="flag-gradient" width={'40px'} height={'40px'} />
      )}
      <Text color={textColor} fontWeight="bold" fontSize="small">
        {text}
      </Text>
    </VStack>
  )
})

const RoadmapMenuItem: React.FC<Props> = ({ roadmapType, children }) => {
  const bg = useColorModeValue('#FBFBFB', '#404040')
  const shadow = useColorModeValue(
    '4px 4px 12px rgba(0, 0, 0, 0.04), -4px -4px 10px 4px #FFFFFF',
    '4px 4px 10px #292929, -4px -4px 20px 4px #505050',
  )
  return (
    <Flex
      boxSizing="border-box"
      p="24px 48px"
      boxShadow={shadow}
      borderRadius="32px"
      maxWidth="400px"
      width="32vw"
      bg={bg}
      h="full"
      flexDirection="column"
      alignItems="center"
    >
      <TitleComponent roadmapType={roadmapType} />
      <Box mt={4} h="calc(100% - 68px - 16px)" w="full">
        {children}
      </Box>
    </Flex>
  )
}

export default RoadmapMenuItem
