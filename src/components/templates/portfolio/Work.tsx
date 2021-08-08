import { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Fade,
  Portal,
  useBreakpointValue,
  Center,
  useColorModeValue,
  TypographyProps,
} from '@chakra-ui/react'
import { CgMouse } from 'react-icons/cg'
import LazyLoad from 'react-lazyload'
import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from 'react-transition-group'
import { PortfolioWorks } from '@/apis/models'
import { PageWrapper } from '@/styles/globals'

interface Props {
  data?: {
    data?: PortfolioWorks[]
    success: boolean
  }
}

const PortfolioWorkTemplate: React.FC<Props> = ({ data }) => {
  const [isReachBottom, setIsReachBottom] = useState(false)
  const [innerHeight, setInnerHeight] = useState(900)
  const width = useBreakpointValue({ base: '100%', sm: '50%' })
  const transform = useBreakpointValue({ base: '0deg', sm: '-90deg' })
  const yearFlex = useBreakpointValue({ base: 'initial', sm: 'flex' })
  const yearLeft = useBreakpointValue({ base: 0, sm: '24px' })
  const yearPx = useBreakpointValue({ base: 4, sm: 0 })
  const yearMx = useBreakpointValue({ base: 4, sm: 0 })
  const yearW = useBreakpointValue({ base: 'full', sm: 'initial' })
  const yearBorderW = useBreakpointValue({ base: 'auto', sm: '300px' })
  const yearMl = useBreakpointValue({ base: 0, sm: 2 })
  const textAlign: TypographyProps['textAlign'] = useBreakpointValue({
    base: 'right',
    sm: 'initial',
  })
  const descriptionFontSize = useBreakpointValue({ base: 'sm', sm: 'md' })
  const titleMb = useBreakpointValue({ base: 2, sm: 6 })
  const color = useColorModeValue('#002E48', '#FFFFFF')
  const flexDirection: 'column' | 'row' = useBreakpointValue({
    base: 'column',
    sm: 'row',
  })
  const minHeight = useBreakpointValue({
    base: 'auto',
    sm: 'calc(var(--vh, 1vh) * 100 - 72px)',
  })
  useEffect(() => {
    document.addEventListener('scroll', trackScroll)
    setInnerHeight(window?.innerHeight)
    return () => {
      document.removeEventListener('scroll', trackScroll)
    }
  }, [])
  // スクロール時の処理
  const trackScroll = () => {
    const ele = document.getElementById('portfolio-container')
    // スクロールがそこに達したら実行
    if (ele.getBoundingClientRect().bottom <= window.innerHeight) {
      setIsReachBottom(true)
    } else if (!isReachBottom) {
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
          <LazyLoad key={`portfolio-work-${idx}`} height={innerHeight} once>
            <TransitionGroup>
              <CSSTransition timeout={500} classNames="fade" appear={true}>
                <Box>
                  <PageWrapper>
                    <Flex
                      w="full"
                      minHeight={minHeight}
                      flexDirection={flexDirection}
                    >
                      {/* 画像 */}
                      <Box w={width} minHeight={minHeight} position="relative">
                        {/* 年月 */}
                        <Box
                          display={yearFlex}
                          transform={`rotate(${transform})`}
                          position="absolute"
                          left={yearLeft}
                          bottom="0"
                          alignItems="center"
                          transformOrigin="left"
                          w={yearW}
                        >
                          <Text
                            fontFamily="'Josefin Sans'"
                            fontSize="1.5rem"
                            textAlign={textAlign}
                            mx={yearPx}
                            boxSizing="border-box"
                          >
                            {item.year}
                          </Text>
                          <CSSTransition
                            classNames="line"
                            timeout={500}
                            appear={true}
                          >
                            <Box
                              w={yearBorderW}
                              height="1px"
                              bgColor={color}
                              ml={yearMl}
                              mx={yearMx}
                            ></Box>
                          </CSSTransition>
                        </Box>
                      </Box>
                      <Center w={width} minHeight={minHeight}>
                        <Box boxSizing="border-box" px="4" maxW="500px">
                          {/* タイトル */}
                          <Text fontSize="4xl" fontWeight="bold" mb={titleMb}>
                            {item.title}
                          </Text>
                          {/* 概要文 */}
                          <Text fontSize={descriptionFontSize}>
                            {item.description}
                          </Text>
                        </Box>
                      </Center>
                    </Flex>
                  </PageWrapper>
                </Box>
              </CSSTransition>
            </TransitionGroup>
          </LazyLoad>
        )
      })}
      {/* スクロールアイコン */}
      <Portal>
        <Box position="fixed" left="0" bottom="8px" w="full">
          <Fade in={!isReachBottom}>
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
