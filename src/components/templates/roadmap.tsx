import { useCallback, useMemo } from 'react'
import {
  Box,
  Flex,
  VStack,
  UnorderedList,
  ListItem,
  Text,
  Center,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { RoadmapItem } from '@/apis/models'
import { RoadmapListItem } from '@/components/atoms/RoadmapListItem'
import RoadmapMenuItem from '@/components/molecules/RoadmapMenuItem'
import { RoadmapMenu } from '@/components/molecules/SpRoadmapMenu'
import { ROADMAP_TYPE } from '@/consts/config'
import useSp from '@/hooks/useSp'
import { UnVisibleScrollBar } from '@/styles/globals'
import { RoadmapType } from '@/types/interface'

interface Props {
  /**
   * ロードマップのデータ
   */
  data: unknown
}

const RoadmapTemplate = ({ data }) => {
  const route = useRouter()
  const query = route.query
  const [isSp] = useSp()
  const type = useMemo(() => {
    if (Object.keys(query).length > 0) return query.type as RoadmapType
    return 'schedule' as RoadmapType
  }, [query])
  const displayData = useMemo(() => {
    const tmp = data[type]
    if (tmp) return tmp as RoadmapItem[]
    else return null
  }, [data, type])
  const getDisplayData = useCallback(
    (type) => {
      const tmp = data[type]
      if (tmp) return tmp as RoadmapItem[]
      else return null
    },
    [data],
  )
  // スマホサイズの場合
  if (isSp) {
    return (
      <Box px={8} pt={8} pb="160px">
        {displayData.length > 0 && (
          <UnorderedList spacing={2}>
            {displayData.map((item, index) => (
              <ListItem key={`${type}-${index}`}>
                <RoadmapListItem complete={item.completed}>
                  {item.label}
                </RoadmapListItem>
              </ListItem>
            ))}
          </UnorderedList>
        )}
        {/* メニュー */}
        <Box
          position="fixed"
          bottom={0}
          left="50%"
          transform="translate(-50%, 30%)"
          zIndex={0}
        >
          <RoadmapMenu roadmapType={type} />
        </Box>
      </Box>
    )
  } else {
    return (
      <Flex h="full" justify="space-evenly">
        {ROADMAP_TYPE.map((type) => {
          const listData = getDisplayData(type)
          return (
            <Box key={type} h="calc(var(--vh, 1vh) * 64)">
              <RoadmapMenuItem roadmapType={type}>
                {/* データがある場合 */}
                {listData.length > 0 && (
                  <UnVisibleScrollBar>
                    <VStack spacing={2} alignItems="flex-start">
                      <UnorderedList spacing={2}>
                        {listData.map((item, index) => (
                          <ListItem key={`${type}-${index}`}>
                            <RoadmapListItem complete={item.completed}>
                              {item.label}
                            </RoadmapListItem>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </VStack>
                  </UnVisibleScrollBar>
                )}
                {/* データがない場合 */}
                {!listData?.length && (
                  <Box w="100%" h="100%">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      mt={12}
                      color={'#9AAFBA'}
                    >
                      タスクがありません
                    </Text>
                    <Image
                      src={require('../../assets/roadmap/no_task.png')}
                      alt={'タスクがありません'}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                )}
              </RoadmapMenuItem>
            </Box>
          )
        })}
      </Flex>
    )
  }
}

export default RoadmapTemplate
