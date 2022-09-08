import React, { memo, useMemo, useEffect } from 'react'
import { Box, BoxProps, HStack, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ScrollHint from 'scroll-hint'
import styled from 'styled-components'
import { AppButton } from '@/components/atoms/Button'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
import Slide from '@/components/features/top/Slide'
import { CreativeItem } from '@/components/molecules/CreativeItem'
import { LINE_STAMP_LIST, APPLICATION_LIST } from '@/consts/top'
import useSp from '@/hooks/useSp'

const ScrollRevealContainer = dynamic(
  import('@/components/features/top/ScrollRevealContainer'),
  { ssr: false },
)

const Creative = memo(() => {
  const router = useRouter()
  useEffect(() => {
    new ScrollHint('.js-scrollable', {
      suggestiveShadow: true,
      i18n: {
        scrollable: 'スクロールできます',
      },
    })
  }, [])
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  return (
    <ScrollRevealContainer mb={32}>
      <UnScrollableWrapper mb={20}>
        <SectionTitle size={size}>Creative</SectionTitle>
      </UnScrollableWrapper>
      {/* アプリ */}
      <UnScrollableWrapper mb={12}>
        <SubSectionTitle size={size}>Application</SubSectionTitle>
      </UnScrollableWrapper>
      <ScrollableWrapper
        spacing={4}
        pr={8}
        pl={'max(calc((100vw - 1000px) / 2), 1rem)'}
        className="js-scrollable"
      >
        {APPLICATION_LIST.map((application, idx) => (
          <Box
            style={{ scrollSnapAlign: 'start' }}
            key={`${application.title}-${idx}`}
          >
            <CreativeItem
              title={application.title}
              image={application.image}
              description={application.description}
              github={application.github}
            />
          </Box>
        ))}
      </ScrollableWrapper>
      {/* LINE スタンプ */}
      <UnScrollableWrapper mb={12} mt={20}>
        <SubSectionTitle size={size}>LINE Stamp</SubSectionTitle>
      </UnScrollableWrapper>
      <ScrollableWrapper
        spacing={4}
        pr={8}
        pl={'max(calc((100vw - 1000px) / 2), 1rem)'}
        className="js-scrollable"
      >
        {LINE_STAMP_LIST.map((line_stamp, idx) => (
          <React.Fragment key={`${line_stamp.image}-${idx}`}>
            <Link href={line_stamp.link} passHref={true}>
              <Box
                as="a"
                d="inline-block"
                cursor="pointer"
                target="_blank"
                rel="noreferrer"
                transition={'all 0.2s'}
                _hover={{ transform: 'scale(1.1)' }}
              >
                <CreativeItem
                  image={line_stamp.image}
                  title={line_stamp.link}
                />
              </Box>
            </Link>
          </React.Fragment>
        ))}
      </ScrollableWrapper>
      {/* 登壇資料 */}
      <UnScrollableWrapper mb={12} mt={20}>
        <Flex justifyContent={'space-between'}>
          <SubSectionTitle size={size}>Recent Slide</SubSectionTitle>
          <AppButton
            onClick={() => router.push('/slides')}
            processing={false}
            fontSize="sm"
            round
          >
            全て見る
          </AppButton>
        </Flex>
        <Slide />
      </UnScrollableWrapper>
    </ScrollRevealContainer>
  )
})

export default Creative

interface UnScrollableWrapperProps extends BoxProps {}

const UnScrollableWrapper: React.FC<UnScrollableWrapperProps> = memo(
  ({ children, ...props }) => (
    <Box w="full" maxW="1000px" mx="auto" px={4} {...props}>
      {children}
    </Box>
  ),
)

const ScrollableWrapper = styled(HStack)`
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
`
