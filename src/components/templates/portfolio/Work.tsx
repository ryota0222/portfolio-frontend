import { Box } from '@chakra-ui/react'
import { PortfolioWorks } from '@/apis/models'

interface Props {
  data?: {
    data?: PortfolioWorks[]
    success: boolean
  }
}

const PortfolioWorkTemplate: React.FC<Props> = ({ data }) => {
  return <Box>Portfolio</Box>
}

export default PortfolioWorkTemplate
