import { useState, useMemo } from 'react'
import { Text, Spacer, Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import useSWR from 'swr'
import * as apis from '@/apis/api'
import { LoadingIconComponent } from '@/components/atoms/LoadingIcon/LoadingIcon'
import NewsTemplate from '@/components/templates/News'
import { NEWS_NUMBER_PER_PAGE } from '@/consts/config'
import { news as DAMMY_NEWS } from '@/consts/dammy/news'
import useNewsPage from '@/hooks/news/useNewsPage'
import useDesignSystem from '@/hooks/useDesignSystem'
import useWindowHeight from '@/hooks/useWindowHeight'
import { HeadComponent } from '@/utils/head'

const fetcher = async (url: string, offset: number) => {
  const func = await apis.NewsApiFp().getNews(offset, NEWS_NUMBER_PER_PAGE)
  const data = await func()
  return data.data
}

interface Props {
  fallback: apis.InlineResponse2005
}

const NewsPage: NextPage<Props> = ({ fallback }) => {
  const { scrollHeight } = useWindowHeight()
  const [offset, setOffset] = useState(0)
  const { NO_DATA_COLOR } = useDesignSystem()
  const { data, error } = useSWR<apis.InlineResponse2005>(
    ['api/v2/news', offset, NEWS_NUMBER_PER_PAGE],
    fetcher,
    { fallbackData: fallback },
  )
  const { contents, isLoadingWhileNoData, totalNumber } = useNewsPage(data)
  // templateを表示するフラグ
  const isVisibleTemplate = useMemo(() => {
    return data && contents?.length && !error
  }, [data, contents, error])
  return (
    <>
      <HeadComponent
        title="ニュース"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/news`}
        ogType="blog"
      />
      {/* ローディング中 */}
      {isLoadingWhileNoData && (
        <Flex minH={scrollHeight} flexDir="column" alignItems="center">
          <Spacer />
          <LoadingIconComponent />
          <Spacer />
        </Flex>
      )}
      {/* データなし */}
      {!contents?.length && (
        <Flex minH={scrollHeight} flexDir="column" alignItems="center">
          <Spacer />
          <Text textAlign="center" fontSize="sm" my={8} color={NO_DATA_COLOR}>
            現在、お知らせがありません
          </Text>
          <Spacer />
        </Flex>
      )}
      {/* データあり */}
      {isVisibleTemplate && (
        <NewsTemplate
          contents={contents}
          total={totalNumber}
          setOffset={setOffset}
        />
      )}
    </>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      props: {
        fallback: DAMMY_NEWS,
      },
    }
  }
  const offset = 0
  const data = await fetcher('api/v2/news', offset)
  return {
    props: {
      fallback: data,
    },
  }
}

export default NewsPage
