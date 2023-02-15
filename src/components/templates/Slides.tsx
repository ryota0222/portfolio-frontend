import React, { memo, useCallback, useMemo } from 'react'
import { Text, Flex, Box, BoxProps } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
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

const Slides: React.FC<Props> = memo(({ data }) => {
  const [isSp] = useSp()
  const router = useRouter()
  const titleSize = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  // モーダルを開く処理
  const handleOpenModal = useCallback((slide: Slide) => {
    router.push(`/slides/${slide.slug}`, undefined, { scroll: false })
  }, [])
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
                  onClick={() => handleOpenModal(slide)}
                  fontSize="xx-small"
                  height="28px"
                  _hover={{ opacity: 0.8 }}
                  _activeLink={{ opacity: 0.8 }}
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
                onClick={() => handleOpenModal(slide)}
                cursor="pointer"
              >
                <NextImage
                  src={`/images/slides/${slide.date}.png`}
                  alt={slide.title}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </SlideWrapper>
          ))}
        </Flex>
      </PageWrapper>
    </>
  )
})

export default Slides

interface SlideWrapperProps extends BoxProps {}

const SlideWrapper: React.FC<SlideWrapperProps> = memo(
  ({ children, ...props }) => {
    return <ScrollRevealContainer {...props}>{children}</ScrollRevealContainer>
  },
)
