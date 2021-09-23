import Head from 'next/head'
import { TITLE, DESCRIPTION, KEYWORD, IMAGE, URL } from '@/consts/config'
import { OgType } from '@/types/interface'

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
  ogType?: OgType
}

export const HeadComponent = ({
  title,
  description,
  image,
  url,
  ogType,
}: Props) => {
  const _title = title && title.length > 0 ? `${title} | ${TITLE}` : TITLE
  const _description =
    description && description.length > 0 ? description : DESCRIPTION
  const _image = image && image.length > 0 ? image : IMAGE
  const _url =
    url && url.length > 0 ? url : `${process.env.NEXT_PUBLIC_SITE_URL}/`
  const _ogType = ogType && ogType.length > 0 ? ogType : `website`
  return (
    <Head>
      <title>{_title}</title>
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta name="keywords" content={KEYWORD} />
      <meta property="og:type" content={_ogType} />
      <meta property="og:url" content={_url} />
      <meta property="og:image" content={_image} />
      <meta property="og:site_name" content={_title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@RyoTa___0222" />
      <meta name="twitter:url" content={_image} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:image" content={_image} />
      <link rel="canonical" href={_url} />
      <link
        rel="shortcut icon"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicons/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicons/apple-touch-icon.png`}
      />
    </Head>
  )
}
