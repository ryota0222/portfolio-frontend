import { useState } from 'react'
import HomeTemplate from '@/components/templates/Home'
import { HeadComponent } from '@/utils/head'
import {INTRODUCTION} from '@/consts/config'
import markdownToHtml from '@/utils/markdownToHtml'

export default function Home({introduction}) {
  return (
    <>
      <HeadComponent />
      <HomeTemplate introduction={introduction} />
    </>
  )
}

export const getStaticProps = async () => {
  const description = await markdownToHtml(INTRODUCTION.description)
  const introduction = {...INTRODUCTION, description }
  return {props: {introduction}}
}
