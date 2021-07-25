import { memo, useState } from 'react'
import { useEffect } from 'react'
import {
  useColorModeValue,
  Box,
  Flex,
  Fade,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import menu from '@/assets/animations/common/sp_header_menu.json'
import d_gear from '@/assets/animations/dark/gear.json'
import l_gear from '@/assets/animations/light/gear.json'
import { LottieControl } from '@/components/atoms/Animation'
import { Btn } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { Panel } from '@/components/atoms/Panel'
import { PageSelectBtn } from '@/components/organisms/PageSelectBtn'
import { PageName } from '@/types/interface'

const ArrowButton = ({ onClick }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])
  const SourceWebP = useColorModeValue(
    <source
      srcSet="../../../assets/animations/light/sp_header.webp"
      type="image/webp"
    />,
    <source
      srcSet="../../../assets/animations/dark/sp_header.webp"
      type="image/webp"
    />,
  )
  const SourcePng = useColorModeValue(
    <Image
      src={require('../../../assets/animations/light/sp_header.png')}
      alt="arrow"
    />,
    <Image
      src={require('../../../assets/animations/dark/sp_header.png')}
      alt="arrow"
    />,
  )
  return (
    <Box position="relative" onClick={onClick}>
      <picture>
        {SourceWebP}
        {SourcePng}
      </picture>
      <Fade in={show}>
        <Box
          position="absolute"
          left="50%"
          top="69px"
          transform="translateX(-46%)"
        >
          <Image
            src={require('../../../assets/commons/menu_arrow.svg')}
            alt="arrow"
          />
        </Box>
      </Fade>
    </Box>
  )
}

export const SpHeaderComponent = memo(() => {
  const gear = useColorModeValue(l_gear, d_gear)
  const btnScheme = useColorModeValue('#FBFBFB', '#404040')
  const route = useRouter()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure()
  const [pageName, setPageName] = useState(route?.asPath || 'index')
  const [isReverse, setIsReverse] = useState(true)
  const [isMenuReverse, setIsMenuReverse] = useState(true)
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
  /**
   * メニューモーダルを開く
   */
  const handlePageMenuOpen = () => {
    setIsMenuReverse(false)
    onMenuOpen()
  }
  /**
   * メニューモーダルを閉じる
   */
  const handlePageMenuClose = () => {
    setIsMenuReverse(true)
    onMenuClose()
  }
  return (
    <Flex
      as="header"
      height="48px"
      justifyContent="space-between"
      px="16px"
      boxSizing="border-box"
      alignItems="center"
      w="full"
    >
      <Btn
        onClick={handlePageMenuOpen}
        colorScheme={btnScheme}
        _active={{}}
        _focus={{}}
        p="0"
      >
        <LottieControl
          width="25px"
          height="25px"
          animationData={menu}
          isReverse={isMenuReverse}
        />
      </Btn>
      {/* ロゴ */}
      <Button
        onClick={() => router.push('/')}
        colorScheme={btnScheme}
        _active={{}}
        _focus={{}}
        p={0}
      >
        <Logo height="20px" width="20px" />
      </Button>
      {/* 設定ボタン */}
      <Btn
        onClick={handleMenuOpen}
        colorScheme={btnScheme}
        _active={{}}
        _focus={{}}
        p="0"
      >
        <LottieControl
          width="30px"
          height="30px"
          animationData={gear}
          isReverse={isReverse}
        />
      </Btn>
      {/* ページメニューモーダル */}
      <Modal isOpen={isMenuOpen} onClose={handlePageMenuClose}>
        <ModalOverlay top="48px" />
        <ModalContent mt="48px" boxShadow="none" bg="transparent">
          <Box
            width="100vw"
            bg={btnScheme}
            pb={8}
            borderRadius="0px 0px 16px 16px / 00px 00px 16px 16px"
          >
            {['portfolio', 'blog', 'roadmap'].map((page: PageName, idx) => {
              return (
                <Box key={idx} mx={2} my={8}>
                  <PageSelectBtn
                    name={page}
                    handlePageTransition={() => {
                      handlePageTransition(page)
                      setTimeout(() => {
                        handlePageMenuClose()
                      }, 500)
                    }}
                    currentPage={route?.asPath}
                    width="full"
                  />
                </Box>
              )
            })}
            <Box
              position="absolute"
              bottom="-146px"
              w="full"
              d="flex"
              justifyContent="center"
            >
              <ArrowButton onClick={handlePageMenuClose} />
            </Box>
          </Box>
        </ModalContent>
      </Modal>
      {/* 設定モーダル */}
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
  )
})

SpHeaderComponent.displayName = 'SpHeaderComponent'