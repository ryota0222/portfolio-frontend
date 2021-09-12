import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as apis from '@/apis/api'
import BlogDetailTemplate from '@/components/templates/blog/BlogTemplate'
import { blog as BLOG_CONTENT } from '@/consts/dammy/blog'
import Prism from '@/plugins/prism'
import { HeadComponent } from '@/utils/head'

const BlogDetail = ({ data }) => {
  const router = useRouter()
  const id = router.query.id
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  if (!data) return <></>
  return (
    <>
      <HeadComponent
        title={data.data.title}
        url={`${process.env.SITE_URL}/blog/${id}`}
        ogType="blog"
        image={`https:${data.data.image}`}
      />
      <BlogDetailTemplate data={data.data} />
    </>
  )
}

export const getStaticPaths = async () => {
  const func = await apis.BlogApiFp().getBlogContents(0, 500)
  const response = await func()
  const data = response.data
  const paths = data.data.contents.map((content) => ({
    params: { id: content.id },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  if (process.env.NODE_ENV === 'development') {
    return { props: { data: BLOG_CONTENT } }
  }
  const func = await apis.BlogApiFp().getBlogContentsDetail(context.params.id)
  const response = await func()
  const data = response.data
  return { props: { data: data } }
}

export default BlogDetail
