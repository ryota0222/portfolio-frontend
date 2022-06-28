import { useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TITLE, DESCRIPTION, KEYWORD, IMAGE } from '@/consts/config'
import { OgType } from '@/types/interface'

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
  ogType?: OgType
}

export const HeadComponent: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  ogType,
  children,
}) => {
  const router = useRouter()
  const { pathname } = router
  const _title = title && title.length > 0 ? `${title} – ${TITLE}` : TITLE
  const _description =
    description && description.length > 0 ? description : DESCRIPTION
  const _image = image && image.length > 0 ? image : IMAGE
  const _url =
    url && url.length > 0 ? url : `${process.env.NEXT_PUBLIC_SITE_URL}/`
  const _ogType = ogType && ogType.length > 0 ? ogType : `website`
  const isAdsensePage = useMemo(() => {
    return pathname.indexOf('blog') !== -1
  }, [pathname])
  const twitterCard = ogType === 'article' ? 'summary_large_image' : 'summary'
  return (
    <Head>
      <title>{_title}</title>
      <meta content={_description} name="description"></meta>
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta name="keywords" content={KEYWORD} />
      <meta property="og:type" content={_ogType} />
      <meta property="og:url" content={_url} />
      <meta property="og:image" content={_image} />
      <meta property="og:site_name" content={_title} />
      <meta name="twitter:site" content="@RyoTa___0222" />
      <meta name="twitter:card" content={twitterCard} />
      <link rel="canonical" href={_url} />
      <link
        rel="stylesheet"
        href="https://unpkg.com/scroll-hint@1.1.2/css/scroll-hint.css"
      ></link>
      {/* Google Adsense */}
      {isAdsensePage && (
        <script
          crossOrigin="anonymous"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7852298720384342"
        ></script>
      )}
      {children}
    </Head>
  )
}
