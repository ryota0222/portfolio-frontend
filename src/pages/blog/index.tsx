import { useEffect, useState, useMemo } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import * as apis from '@/apis/api'
import { InlineResponse400 } from '@/apis/models'
import BlogsTemplate from '@/components/templates/blog/BlogsTemplate'
import { BLOG_NUMBER_PER_PAGE } from '@/consts/config'
import { blogs as DAMMY_BLOGS } from '@/consts/dammy/blog'
import { HeadComponent } from '@/utils/head'

const fetcher = async (url, offset, limit, searchWord, tag, time, series) => {
  const func = await apis
    .BlogApiFp()
    .getBlogContents(offset, limit, searchWord, tag, time, series)
  const data = await func()
  return data.data
}

const Blog = ({ settings, contents }) => {
  const router = useRouter()
  const [contentsData, setContentsData] = useState(contents)
  const { query } = router
  const { time, searchWord, tag, page, series } = query
  const offset = page ? (Number(page as string) - 1) * BLOG_NUMBER_PER_PAGE : 0
  const limit = BLOG_NUMBER_PER_PAGE
  const { data, error } = useSWR(
    ['api/v2/blog', offset, limit, searchWord, tag, time, series],
    fetcher,
    { initialData: null },
  )
  useEffect(() => {
    if (data) {
      setContentsData(data)
    }
  }, [data])
  const title = useMemo(() => {
    if (time) {
      return dayjs(time as string).format('YYYY/M')
    } else if (tag) {
      const tagData = settings.data.tags.find((_tag) => _tag.id === tag)
      return tagData.label
    }
    return ''
  }, [time, tag])
  // データ取得成功時 / ローディング時 / 失敗時
  return (
    <>
      <HeadComponent
        title="ブログ一覧"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog`}
        ogType="blog"
      />
      <BlogsTemplate
        settings={settings}
        contents={contentsData}
        title={title ?? ''}
        searchWord={searchWord as string | undefined}
        isLoading={!error && !data}
        isError={error}
      />
    </>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    return { props: DAMMY_BLOGS }
  }
  const offset = 0
  const limit = BLOG_NUMBER_PER_PAGE
  const promise1 = await apis.BlogApiFp().getBlog()
  const promise2 = await apis.BlogApiFp().getBlogContents(offset, limit)
  const response = await Promise.all([promise1(), promise2()]).then(
    (values) => {
      return values
    },
  )
  const data = response.map((_data) => {
    if (_data?.status === 200) {
      return _data.data
    } else {
      return {
        success: false,
        message: 'データの取得に失敗しました',
      } as InlineResponse400
    }
  })
  return { props: { settings: data[0], contents: data[1] } }
}

export default Blog
