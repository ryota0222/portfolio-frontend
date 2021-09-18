import { useEffect, useMemo } from 'react'
import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as apis from '@/apis/api'
import { RoadmapItem } from '@/apis/models'
import { RoadmapListItem } from '@/components/atoms/RoadmapListItem'
import { RoadmapMenu } from '@/components/molecules/RoadmapMenu'
import { roadmap as DAMMY_WORK } from '@/consts/dammy/roadmap'
import { RoadmapType } from '@/types/interface'
import { HeadComponent } from '@/utils/head'

const Roadmap = ({ data }) => {
  const route = useRouter()
  const query = route.query
  const type = useMemo(() => {
    if (Object.keys(query).length > 0) return query.type as RoadmapType
    return 'schedule' as RoadmapType
  }, [query])
  const url = useMemo(() => {
    if (Object.keys(query).length > 0)
      return `${process.env.SITE_URL}/roadmap?type=${query.type}`
    return `${process.env.SITE_URL}/roadmap`
  }, [query])
  const displayData = useMemo(() => {
    if (data?.success) {
      const tmp = data.data[type]
      if (tmp) return tmp as RoadmapItem[]
      else return null
    }
    return null
  }, [data, type])
  const textColor = useColorModeValue('#999', '#aaa')
  // console.log(displayData)
  return (
    <>
      <HeadComponent title="ロードマップ" url={url} ogType="article" />
      <Box>
        {/* データがない場合 */}
        {(!displayData || !displayData.length) && (
          <Center color={textColor} fontWeight="bold" letterSpacing={2}>
            タスクがありません
          </Center>
        )}
        {/* データがある場合 */}
        {displayData.length > 0 &&
          displayData.map((item, index) => (
            <Box key={`${type}-${index}`}>
              <RoadmapListItem complete={item.completed}>
                {item.label}
              </RoadmapListItem>
            </Box>
          ))}
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
    </>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    return { props: { data: DAMMY_WORK } }
  }
  const func = await apis.RoadmapApiFp().getRoadMap()
  const data = await func()
  return { props: { data: data.data } }
}

export default Roadmap
