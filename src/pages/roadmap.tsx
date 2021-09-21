import { useEffect, useMemo } from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as apis from '@/apis/api'
import { RoadmapItem } from '@/apis/models'
// import RoadmapTemplate from '@/components/templates/Roadmap'
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
  const display = useBreakpointValue({ base: 'block', md: 'flex' })
  const align = useBreakpointValue({ base: 'initial', md: 'center' })
  return (
    <>
      <HeadComponent title="ロードマップ" url={url} ogType="article" />
      <Box
        minHeight="calc(var(--vh, 1vh) * 100 - 72px)"
        display={display}
        alignItems={align}
        justifyContent={align}
        w="100%"
      >
        {/* データがない場合 */}
        {(!displayData || !displayData.length) && (
          <Center color={textColor} fontWeight="bold" letterSpacing={2}>
            タスクがありません
          </Center>
        )}
        {/* データがある場合 */}
        {/* <RoadmapTemplate data={data.data} /> */}
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
