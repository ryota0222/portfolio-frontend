import { Box } from '@chakra-ui/react'
import useSWR from 'swr'
import PortfolioWorkTemplate from '@/components/templates/portfolio/Work'
import { HeadComponent } from '@/utils/head'

const Portfolio = () => {
  return (
    <>
      <HeadComponent />
      <PortfolioWorkTemplate />
    </>
  )
}

export default Portfolio
