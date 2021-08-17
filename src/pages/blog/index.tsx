import { useEffect, useState, useMemo } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import * as apis from '@/apis/api'
import { InlineResponse400 } from '@/apis/models'
import BlogsTemplate from '@/components/templates/blog/BlogsTemplate'
import { blogs as DAMMY_BLOGS } from '@/consts/dammy/blog'
import { HeadComponent } from '@/utils/head'

const Blog = ({ settings, contents }) => {
  const [_contents, setContents] = useState(contents)
  const router = useRouter()
  const { query } = router
  const { time, searchWord, tag } = query
  useEffect(() => {
    const f = async () => {
      let func
      const offset = 0
      const limit = 500
      if (searchWord && searchWord.length > 0) {
        func = await apis
          .BlogApiFp()
          .getBlogContents(offset, limit, searchWord as string)
      } else if (time && time.length > 0) {
        func = await apis
          .BlogApiFp()
          .getBlogContents(
            offset,
            limit,
            searchWord as string,
            undefined,
            time as string,
          )
      } else if (tag && tag.length > 0) {
        func = await apis
          .BlogApiFp()
          .getBlogContents(offset, limit, searchWord as string, tag as string)
      }
      if (func) {
        const data = await func()
        // データがあればコンテンツを保存
        if (data.data && data.data.success) {
          setContents(data.data)
        }
      }
    }
    f()
  }, [query])
  const title = useMemo(() => {
    if (time) {
      return dayjs(time as string).format('YYYY/M')
    } else if (tag) {
      const tagData = settings.data.tags.find((_tag) => _tag.id === tag)
      return tagData.label
    }
    return ''
  }, [time, tag])
  return (
    <>
      <HeadComponent
        title="ブログ一覧"
        url={`${process.env.SITE_URL}/blog`}
        ogType="blog"
      />
      <BlogsTemplate
        settings={settings}
        contents={_contents}
        title={title}
        searchWord={searchWord as string}
      />
    </>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    return { props: DAMMY_BLOGS }
  }
  const offset = 0
  const limit = 500
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
