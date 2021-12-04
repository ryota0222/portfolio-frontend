import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as apis from '@/apis/api'
import BlogDetailTemplate from '@/components/templates/blog/BlogTemplate'
import { blog as BLOG_CONTENT } from '@/consts/dammy/blog'
import Prism from '@/plugins/prism'
import { HeadComponent } from '@/utils/head'

const BlogDetail = ({ data }) => {
  const [mounted, setMounted] = useState(false)
  // ブラウザで描画されたときにtrue
  useEffect(() => setMounted(true), [])
  const router = useRouter()
  const id = router.query.id
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  if (!data) return <></>
  return (
    <>
      <Script
        type="text/javascript"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="RyoTa"
        data-color="#3d3d3d"
        data-emoji=""
        data-font="Cookie"
        data-text="Buy me a coffee"
        data-outline-color="#ffffff"
        data-font-color="#ffffff"
        data-coffee-color="#FFDD00"
      ></Script>
      <HeadComponent
        title={data.data.title}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`}
        ogType="blog"
        image={`https:${data.data.image}`}
      />
      {mounted && <BlogDetailTemplate data={data.data} />}
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
