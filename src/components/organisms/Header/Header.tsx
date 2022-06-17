import { memo, useMemo } from 'react'
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Spacer,
  HStack,
  Center,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerMenu } from '@/components/atoms/HamburgerMenu'
import { Logo } from '@/components/atoms/Logo'
import { Menu } from '@/components/organisms/Menu'
import useSp from '@/hooks/useSp'
import { PAGE_LABEL_MAP, PAGE_PATH_MAP, PAGE_PATHNAME_MAP } from './const'
import { PageItemWrapper } from './module.style'
import { PageItemProps, Props, PageName } from './type'

export const AppHeader: React.FC<Props> = memo(({ pathname }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isSp] = useSp()
  const menuSpacing = useMemo(() => {
    return isSp ? 4 : 8
  }, [isSp])
  return (
    <Flex
      as="header"
      height="48px"
      justifyContent="space-between"
      px="24px"
      boxSizing="border-box"
      alignItems="center"
      w="full"
      zIndex={1}
    >
      {/* ロゴ部分 */}
      <Link href="/">
        <>
          {isSp ? (
            <Image
              src="/images/logo.svg"
              alt="ロゴ"
              width="20px"
              height="40px"
            />
          ) : (
            <Logo width="104px" height="40px" />
          )}
        </>
      </Link>
      <Spacer />
      <Flex alignItems="center">
        {/* ページ名 */}
        <HStack spacing={menuSpacing} mr={menuSpacing}>
          {['top', 'blog', 'news'].map((page: PageName, idx) => {
            const isactive =
              typeof PAGE_PATHNAME_MAP[page] === 'string'
                ? pathname === PAGE_PATHNAME_MAP[page]
                : PAGE_PATHNAME_MAP[page].includes(pathname)
            return (
              <Link href={PAGE_PATH_MAP[page]} key={idx}>
                <PageItem isactive={isactive} cursor="pointer">
                  {PAGE_LABEL_MAP[page]}
                </PageItem>
              </Link>
            )
          })}
        </HStack>
        {/* ハンバーガーメニュー */}
        <Center role="button" onClick={onOpen}>
          <HamburgerMenu isOpen={isOpen} />
        </Center>
        {/* 設定モーダル */}
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
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
            <Menu />
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  )
})

const PageItem: React.FC<PageItemProps> = memo(({ children, ...props }) => {
  const [isSp] = useSp()
  const fontSize = useMemo(() => {
    return isSp ? 'xs' : 'sm'
  }, [isSp])
  return (
    <PageItemWrapper
      {...props}
      position="relative"
      isactive={Number(props.isactive)}
    >
      <Text
        fontSize={fontSize}
        fontWeight="bold"
        opacity={props.isactive ? 1 : 0.48}
        transition="all 0.2s"
        _hover={{ opacity: 1 }}
      >
        {children}
      </Text>
    </PageItemWrapper>
  )
})
