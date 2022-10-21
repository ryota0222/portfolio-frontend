import React from 'react'
import { NextPage } from 'next'
import SlideDetailTemplate from '@/components/templates/SlideDetail'
import { SLIDE_LIST } from '@/consts/top'
import { HeadComponent } from '@/utils/head'
import { Slide } from '@/types/top'

interface Props {
  fallback: Slide
}

const SlideDetail: NextPage<Props> = () => {
  return (
    <>
      <HeadComponent
        title="登壇資料一覧"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/slides`}
      />
      <SlideDetailTemplate data={SLIDE_LIST} />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = SLIDE_LIST.map((slide) => ({
    params: { slug: slide.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const data = SLIDE_LIST.find((slide) => slide.slug === context.params.slug)
  return { props: { fallback: data } }
}

export default SlideDetail
