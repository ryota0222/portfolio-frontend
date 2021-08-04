import { useEffect, useState } from 'react'
import { Box, Text, Flex, Fade, Portal } from '@chakra-ui/react'
import { CgMouse } from 'react-icons/cg'
import { PortfolioWorks } from '@/apis/models'
import { PageWrapper } from '@/styles/globals'

interface Props {
  data?: {
    data?: PortfolioWorks[]
    success: boolean
  }
}

const PortfolioWorkTemplate: React.FC<Props> = ({ data }) => {
  const [isReachBottom, setIsReachBottom] = useState(true)
  useEffect(() => {
    document.addEventListener('scroll', trackScroll)
    return () => {
      document.removeEventListener('scroll', trackScroll)
    }
  }, [])
  // スクロール時の処理
  const trackScroll = () => {
    const ele = document.getElementById('portfolio-container')
    console.log(ele.scrollHeight)
    console.log(ele.scrollTop)
    console.log(ele.clientHeight)
    // スクロールがそこに達したら実行
    if (ele.scrollHeight - ele.scrollTop === ele.clientHeight) {
      console.log('header bottom reached')
      setIsReachBottom(true)
    } else if (isReachBottom) {
      setIsReachBottom(false)
    }
  }
  // データ
  const _data = data?.data
  if (!_data || _data?.length <= 0) {
    // TODO: データがない場合
    return <></>
  }
  return (
    <PageWrapper id="portfolio-container">
      {/* コンテンツ */}
      {_data.map((item, idx) => {
        return (
          <Box key={`portfolio-work-${idx}`}>
            <PageWrapper>{item.title}</PageWrapper>
          </Box>
        )
      })}
      {/* スクロールアイコン */}
      <Portal>
        <Box position="fixed" left="0" bottom="8px" w="full">
          <Fade in={isReachBottom}>
            <Flex flexDirection="column" alignItems="center">
              <CgMouse size={20} color="#C4C4C4" />
              <Text color="#C4C4C4" fontWeight="bold" fontSize="12">
                scroll Down
              </Text>
            </Flex>
          </Fade>
        </Box>
      </Portal>
    </PageWrapper>
  )
}

export default PortfolioWorkTemplate
