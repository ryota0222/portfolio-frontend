import { memo, useState, useMemo, useEffect } from 'react'
import {
  useColorModeValue,
  Box,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import d_gear from '@/assets/animations/dark/gear.json'
import l_gear from '@/assets/animations/light/gear.json'
import { LottieControl } from '@/components/atoms/Animation'
import { Btn } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { IntroCard } from '@/components/molecules/IntroCard'
import { PageSelectBtn } from '@/components/organisms/PageSelectBtn'
import { SettingPanel } from '@/components/organisms/SettingPanel'
import { PageName } from '@/types/interface'
import {SHORT_INTRODUCTION} from '@/consts/config'

export const HeaderComponent = memo(() => {
  const gear = useColorModeValue(l_gear, d_gear)
  const dividerColor = useColorModeValue('black', 'white')
  const btnScheme = useColorModeValue('white', 'black')
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
      w="full"
    >
      <Tooltip
        label={
          <IntroCard {...SHORT_INTRODUCTION} />
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
          <Logo height="24px" width="24px" />
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
        {/* 設定ボタン */}
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
            maxW="300px"
            position="absolute"
            right="50px"
            top="50px"
            m={0}
          >
            <SettingPanel />
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  )
})

HeaderComponent.displayName = 'HeaderComponent'
