import HomeTemplate from '@/components/templates/Home'
import { INTRODUCTION } from '@/consts/config'
import { HeadComponent } from '@/utils/head'

export default function Home({ introduction }) {
  return (
    <>
      <HeadComponent />
      <HomeTemplate introduction={introduction} />
    </>
  )
}

export const getStaticProps = async () => {
  return { props: { introduction: INTRODUCTION } }
}
