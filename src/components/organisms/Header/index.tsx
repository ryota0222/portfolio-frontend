import { memo, useState, useMemo } from 'react'
import { useEffect } from 'react'
import {
  useColorModeValue,
  Box,
  Flex,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import d_blog from '@/assets/animations/dark/blog.json'
import d_gear from '@/assets/animations/dark/gear.json'
import d_portfolio from '@/assets/animations/dark/portfolio.json'
import d_roadmap from '@/assets/animations/dark/roadmap.json'
import l_blog from '@/assets/animations/light/blog.json'
import l_gear from '@/assets/animations/light/gear.json'
import l_portfolio from '@/assets/animations/light/portfolio.json'
import l_roadmap from '@/assets/animations/light/roadmap.json'
import { LottieControl } from '@/components/atoms/Animation'
import { Btn } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { Panel } from '@/components/atoms/Panel'
import { IntroCard } from '@/components/molecules/IntroCard'

type PageName = 'portfolio' | 'blog' | 'roadmap'

interface Props {
  /**
   * ページ名
   */
  name: PageName
  /**
   * 現在のパス
   */
  currentPage: string
  /**
   * 関数
   */
  handlePageTransition: Function
}

const PageSelectBtn = ({ name, handlePageTransition, currentPage }: Props) => {
  const route = useRouter()
  const [isReverse, setIsReverse] = useState(true)
  const btnScheme = useColorModeValue('white', 'dark')
  const color = useColorModeValue('dark', 'white')
  const portfolio = useColorModeValue(l_portfolio, d_portfolio)
  const roadmap = useColorModeValue(l_roadmap, d_roadmap)
  const blog = useColorModeValue(l_blog, d_blog)
  useEffect(() => {
    if (!~route?.pathname?.indexOf(name)) {
      setIsReverse(true)
    } else {
      setIsReverse(false)
    }
  }, [currentPage])
  // アニメーションデータ
  const animationData = useMemo(() => {
    switch (name) {
      case 'portfolio':
        return portfolio
      case 'blog':
        return blog
      case 'roadmap':
        return roadmap
      default:
        return null
    }
  }, [name])
  // 文字
  const text = useMemo(() => {
    switch (name) {
      case 'portfolio':
        return 'ポートフォリオ'
      case 'blog':
        return 'ブログ'
      case 'roadmap':
        return 'ロードマップ'
      default:
        return null
    }
  }, [name])
  const handleClick = () => {
    if (!~route?.pathname?.indexOf(name)) {
      handlePageTransition()
      setIsReverse(!isReverse)
    }
  }
  // ニューモーフィズム かどうか
  const buttonStyle = ~route?.pathname?.indexOf(name) ? true : false
  return (
    <Btn
      neumorphic={buttonStyle}
      round={true}
      onClick={handleClick}
      colorScheme={btnScheme}
      color="black"
      _active={{}}
      _focus={{}}
    >
      <LottieControl
        width="25px"
        height="25px"
        animationData={animationData}
        isReverse={isReverse}
      />
      <Text colorScheme={color} fontSize="14px" fontWeight="bold" ml={2}>
        {text}
      </Text>
    </Btn>
  )
}

export const HeaderComponent = memo(() => {
  const gear = useColorModeValue(l_gear, d_gear)
  const dividerColor = useColorModeValue('black', 'white')
  const btnScheme = useColorModeValue('white', 'dark')
  const route = useRouter()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pageName, setPageName] = useState(route?.asPath || 'index')
  const [isReverse, setIsReverse] = useState(true)
  /**
   * ページ遷移
   *
   * @param {PageName} ページ名
   */
  const handlePageTransition = (name: PageName) => {
    setPageName(name)
    if (router) {
      router.push(`/${name}`)
    }
  }
  /**
   * 設定モーダルを開く
   */
  const handleMenuOpen = () => {
    setIsReverse(false)
    onOpen()
  }
  /**
   * 設定モーダルを閉じる
   */
  const handleMenuClose = () => {
    setIsReverse(true)
    onClose()
  }
  return (
    <Flex
      as="header"
      height="48px"
      justifyContent="space-between"
      px="48px"
      boxSizing="border-box"
      alignItems="center"
    >
      <Tooltip
        label={
          <IntroCard
            name="RyoTa."
            intro="aaaaaaaaaaaa"
            imageData="https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png"
          />
        }
        placement="bottom-start"
        openDelay={1000}
        bg="transparent"
        boxShadow="none"
      >
        <Button
          onClick={() => router.push('/')}
          colorScheme={btnScheme}
          _active={{}}
          _focus={{}}
          p={0}
        >
          <Logo height="32px" width="32px" />
        </Button>
      </Tooltip>
      <Flex alignItems="center">
        {['portfolio', 'blog', 'roadmap'].map((page: PageName, idx) => {
          return (
            <Box key={idx} mx={2}>
              <PageSelectBtn
                name={page}
                handlePageTransition={() => handlePageTransition(page)}
                currentPage={route?.asPath}
              />
            </Box>
          )
        })}
        <Divider
          orientation="vertical"
          height="24px"
          colorScheme={dividerColor}
          ml={2}
        />
        <Btn
          onClick={handleMenuOpen}
          colorScheme={btnScheme}
          _active={{}}
          _focus={{}}
        >
          <LottieControl
            width="25px"
            height="25px"
            animationData={gear}
            isReverse={isReverse}
          />
        </Btn>
        <Modal
          isOpen={isOpen}
          onClose={handleMenuClose}
          motionPreset="slideInRight"
        >
          <ModalOverlay bg="transparent" />
          <ModalContent
            boxShadow="none"
            bg="transparent"
            width="auto"
            position="absolute"
            right="50px"
            top="50px"
            m={0}
          >
            <Panel width="100%" maxWidth="300px">
              panel
            </Panel>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  )
})

HeaderComponent.displayName = 'HeaderComponent'

const LongHover = styled.span`
  transition: 0.2s;
  &:hover {
    transition-delay: 2s;
  }
`
