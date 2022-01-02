import { useEffect, useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as apis from '@/apis/api'
import { InlineResponse2004 } from '@/apis/models'
import BlogDetailTemplate from '@/components/templates/blog/BlogTemplate'
import Prism from '@/plugins/prism'

const BlogPreviewDetail = () => {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState<InlineResponse2004 | null>(null)
  const router = useRouter()
  const id = router.query.id
  const INLINE_CODE_COLOR = useColorModeValue('red', '#ff9eb6')
  // methods
  const getContents = async () => {
    const func = await apis.BlogApiFp().getBlogContentsDetail(id as string, 1)
    const response = await func()
    setData(response.data)
  }
  //   side effects
  useEffect(() => {
    if (typeof document !== undefined) {
      document.documentElement.style.setProperty('--code', INLINE_CODE_COLOR)
    }
  }, [INLINE_CODE_COLOR])
  useEffect(() => {
    if (id) void getContents()
  }, [id])
  useEffect(() => {
    // データ取得時の処理
    if (data) {
      setMounted(true)
      setTimeout(() => Prism.highlightAll(), 0)
    }
  }, [data])
  if (!data) return <></>
  else if (mounted) return <BlogDetailTemplate data={data.data} />
  else return <></>
}

export default BlogPreviewDetail
