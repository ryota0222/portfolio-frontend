import React, { memo, useRef, useEffect, useMemo, useState } from 'react'
import {
  Text,
  Flex,
  Box,
  BoxProps,
  useToken,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'
import { PageWrapper } from '@/styles/global.css'
import { Slide } from '@/types/top'
import NextImage from 'next/image'
import { AppButton } from '@/components/atoms/Button'
import { useRouter } from 'next/router'

const ScrollRevealContainer = dynamic(
  import('@/components/features/top/ScrollRevealContainer'),
  { ssr: false },
)

interface Props {
  data: Slide[]
}

const SlideDetail: React.FC<Props> = memo(({ data }) => {
  const [isSp] = useSp()
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const slug = router.query.slug
  const slideData = useMemo(() => {
    return data.find((item) => item.slug === slug)
  }, [data])
  const { isDark } = useDesignSystem()
  const { isOpen, onOpen } = useDisclosure()
  const [appGray200Color, appGray800Color]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.200', 'app-gray.800'],
  )
  const iframeBgColor = useMemo(
    () => (isDark ? appGray800Color : appGray200Color),
    [isDark, appGray200Color, appGray800Color],
  )
  const titleSize = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  useEffect(() => {
    if (!slideData) {
      router.replace('/slides')
    } else {
      onOpen()
    }
  }, [slideData])
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView()
    }
  }, [ref])
  return (
    <>
      <PageWrapper>
        <Flex
          w="100vw"
          minH={'80vh'}
          maxW="1000px"
          m="auto"
          flexDir="column"
          px={4}
          py={8}
        >
          {data.map((slide, idx) => (
            <SlideWrapper key={`slide-${idx}`} w="100%">
              <div ref={slide.slug === slug ? ref : undefined}>
                <SubSectionTitle size={titleSize} fontFamily="inherit" mb={1}>
                  {slide.title}
                </SubSectionTitle>
                <Flex
                  alignItems="center"
                  mt={4}
                  mb={8}
                  justifyContent="space-between"
                >
                  <Text fontFamily="bananaslipplus">{slide.date}</Text>
                  <AppButton
                    round
                    processing={false}
                    scheme="primary"
                    fontSize="xx-small"
                    height="28px"
                    _hover={{ opacity: 0.8 }}
                    _activeLink={{ opacity: 0.8 }}
                    onClick={() => {}}
                    px={3}
                    mr={2}
                  >
                    資料を見る
                  </AppButton>
                </Flex>
                <Box
                  width={'100%'}
                  height={400}
                  position="relative"
                  mb={12}
                  role="button"
                  cursor="pointer"
                >
                  <NextImage
                    src={`/images/slides/${slide.date}.png`}
                    alt={slide.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </div>
            </SlideWrapper>
          ))}
        </Flex>
      </PageWrapper>
      <Modal
        isOpen={isOpen}
        onClose={() => router.push('/slides', undefined, { scroll: false })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent width="90vw" maxWidth="800px">
          <ModalHeader>{slideData?.title || ''}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {slideData && (
              <SlideIframe
                bg={iframeBgColor}
                width={'100%'}
                height={400}
                src={slideData.link}
                title={slideData.title}
                allowFullScreen
                loading="eager"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
})

export default SlideDetail

interface SlideWrapperProps extends BoxProps {}

const SlideWrapper: React.FC<SlideWrapperProps> = memo(
  ({ children, ...props }) => {
    return <ScrollRevealContainer {...props}>{children}</ScrollRevealContainer>
  },
)

const SlideIframe = styled.iframe<{ bg: string }>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.bg};
`
