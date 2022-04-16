import { useState, useEffect, useMemo } from 'react'
import { Text, Spacer, Flex, useColorModeValue } from '@chakra-ui/react'
import { NextPage } from 'next'
import useSWR from 'swr'
import * as apis from '@/apis/api'
import { Loading } from '@/components/atoms/Loading'
import NewsTemplate from '@/components/templates/News'
import { NEWS_NUMBER_PER_PAGE } from '@/consts/config'
import { news as DAMMY_NEWS } from '@/consts/dammy/news'
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
  const [offset, setOffset] = useState(0)
  const { scrollHeight } = useWindowHeight()
  const noDataColor = useColorModeValue('#999', '#ccc')
  const [contents, setContents] = useState<apis.NewsItem[] | undefined>(
    undefined,
  )
  const { data, error } = useSWR<apis.InlineResponse2005>(
    ['api/v2/news', offset, NEWS_NUMBER_PER_PAGE],
    fetcher,
    { fallbackData: fallback },
  )
  useEffect(() => {
    if (data && data.success) {
      setContents((prev) => {
        // typeチェック
        if (typeof prev === 'object') {
          // 同じIDがあれば無視
          const findSameContents = data.data.contents.filter((c) => {
            let flg = false
            if (contents.find((content) => content.id === c.id)) {
              flg = true
            }
            return flg
          })
          if (findSameContents.length) return prev
          return prev.concat(data.data.contents)
        } else {
          return data.data.contents
        }
      })
    }
  }, [data])
  // データなしの状態でのローディング中フラグ
  const isLoadingWhileNoData = useMemo(() => {
    return !data && !contents
  }, [data, contents])
  // templateを表示するフラグ
  const isVisibleTemplate = useMemo(() => {
    return data && contents?.length && !error
  }, [data, contents, error])
  // totalの数
  const totalNumber = useMemo(() => {
    console.log(data)
    if (data) {
      return data.data?.total || 0
    }
    return 0
  }, [data])
  return (
    <>
      <HeadComponent
        title="ニュース"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/news`}
        ogType="blog"
      />
      {error && <p>{JSON.stringify(error)}</p>}
      {/* ローディング中 */}
      {isLoadingWhileNoData && (
        <Flex minH={scrollHeight} flexDir="column" alignItems="center">
          <Spacer />
          <Loading />
          <Spacer />
        </Flex>
      )}
      {/* データなし */}
      {!contents?.length && (
        <Flex minH={scrollHeight} flexDir="column" alignItems="center">
          <Spacer />
          <Text textAlign="center" fontSize="sm" my={8} color={noDataColor}>
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
