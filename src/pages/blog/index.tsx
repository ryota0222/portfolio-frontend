import * as apis from '@/apis/api'
import { InlineResponse400 } from '@/apis/models'
import BlogsTemplate from '@/components/templates/blog/BlogsTemplate'
import { blogs as DAMMY_BLOGS } from '@/consts/dammy/blog'
import { HeadComponent } from '@/utils/head'

const Blog = ({ settings, contents }) => {
  return (
    <>
      <HeadComponent
        title="ブログ一覧"
        url={`${process.env.SITE_URL}/blog`}
        ogType="blog"
      />
      <BlogsTemplate settings={settings} contents={contents} />
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
