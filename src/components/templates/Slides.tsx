import React, { memo, useMemo } from 'react'
import { Text, Flex, Box, BoxProps, useToken } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'
import { PageWrapper } from '@/styles/global.css'
import { Slide } from '@/types/top'

const ScrollRevealContainer = dynamic(
  import('@/components/features/top/ScrollRevealContainer'),
  { ssr: false },
)

interface Props {
  data: Slide[]
}

const Slides: React.FC<Props> = memo(({ data }) => {
  const [isSp] = useSp()
  const { isDark } = useDesignSystem()
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
  return (
    <PageWrapper>
      <Flex
        w="100vw"
        minH={'80vh'}
        maxW="1000px"
        m="auto"
        flexDir="column"
        px={4}
      >
        {data.map((slide) => (
          <SlideWrapper key={slide.page} w="100%">
            <SubSectionTitle size={titleSize} fontFamily="inherit" mb={1}>
              {slide.title}
            </SubSectionTitle>
            <Text fontFamily="bananaslipplus" mt={4} mb={8}>
              {slide.date}
            </Text>
            <Box width={'100%'} height={400} position="relative">
              <SlideIframe
                bg={iframeBgColor}
                width={'100%'}
                height={400}
                src={slide.link}
                allowFullScreen
              ></SlideIframe>
            </Box>
          </SlideWrapper>
        ))}
      </Flex>
    </PageWrapper>
  )
})

export default Slides

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
