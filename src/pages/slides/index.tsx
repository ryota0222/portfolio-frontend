import React from 'react'
import SlidesTemplate from '@/components/templates/Slides'
import { SLIDE_LIST } from '@/consts/top'
import { HeadComponent } from '@/utils/head'

const Slides = () => {
  return (
    <>
      <HeadComponent
        title="登壇資料一覧"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/slides`}
      />
      <SlidesTemplate data={SLIDE_LIST} />
    </>
  )
}

export default Slides
