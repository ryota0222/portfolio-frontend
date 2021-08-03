import axios from 'axios'
import * as apis from '@/apis/api'
import PortfolioWorkTemplate from '@/components/templates/portfolio/Work'
import { HeadComponent } from '@/utils/head'

const Portfolio = ({ data }) => {
  return (
    <>
      <HeadComponent />
      <PortfolioWorkTemplate data={data} />
    </>
  )
}

export const getStaticProps = async () => {
  const offset = 0
  const limit = 100
  const func = await apis.PortfolioApiFp().getPortfolioWorks(offset, limit)
  const data = await func()
  console.log('data')
  console.log(data.data)
  return { props: { data } }
}

export default Portfolio
