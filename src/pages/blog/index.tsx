import { useEffect, useState } from 'react'
import * as apis from '@/apis/api'
import { InlineResponse400 } from '@/apis/models'
import BlogsTemplate from '@/components/templates/blog/BlogsTemplate'
import { blogs as DAMMY_BLOGS } from '@/consts/dammy/blog'
import { useBlogContext } from '@/middleware/blog'
import { HeadComponent } from '@/utils/head'

// 期間の絞り込みかチェック
const isDate = (str: string) => {
  const pattern = /^([0-9]{4}\/[0-9]{1}|[0-9]{4}\/[0-9]{2})$/
  return pattern.test(str)
}

// 期間の絞り込みかチェック
const shapeDate = (str: string) => {
  const [y, m] = str.split('/')
  const tmp_m = m.padStart(2, '0')
  return `${y}-${tmp_m}`
}

const Blog = ({ settings, contents }) => {
  const [_contents, setContents] = useState(contents)
  const { tag, searchWord } = useBlogContext()
  console.log(contents)
  useEffect(() => {
    const f = async () => {
      let func
      const offset = 0
      const limit = 500
      if (searchWord.length > 0) {
        func = await apis.BlogApiFp().getBlogContents(offset, limit, searchWord)
      } else if (tag.length > 0) {
        // 期間による絞り込みの場合
        if (isDate(tag)) {
          const date = shapeDate(tag)
          func = await apis
            .BlogApiFp()
            .getBlogContents(offset, limit, searchWord, undefined, date)
        } else {
          // カテゴリの場合
          if (settings.success) {
            const tagObj = settings.data.tags.find((_tag) => _tag.label === tag)
            func = await apis
              .BlogApiFp()
              .getBlogContents(offset, limit, searchWord, tagObj.id)
          }
        }
      }
      if (func) {
        const data = await func()
        // データがあればコンテンツを保存
        if (data.data && data.data.success) {
          setContents(data.data)
          console.log(data.data.data)
        }
      }
    }
    f()
    console.log(searchWord)
  }, [tag, searchWord])
  return (
    <>
      <HeadComponent
        title="ブログ一覧"
        url={`${process.env.SITE_URL}/blog`}
        ogType="blog"
      />
      <BlogsTemplate settings={settings} contents={_contents} />
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
