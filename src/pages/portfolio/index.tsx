import * as apis from '@/apis/api'
import PortfolioWorkTemplate from '@/components/templates/portfolio/Work'
import { work as DAMMY_WORK } from '@/consts/dammy/portfolio'
import { HeadComponent } from '@/utils/head'

const Portfolio = ({ data }) => {
  return (
    <>
      <HeadComponent
        title="ポートフォリオ"
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/portfolio`}
        ogType="article"
      />
      <PortfolioWorkTemplate data={data} />
    </>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    return { props: { data: DAMMY_WORK } }
  }
  const offset = 0
  const limit = 100
  const func = await apis.PortfolioApiFp().getPortfolioWorks(offset, limit)
  const data = await func()
  return { props: { data: data.data } }
}

export default Portfolio
