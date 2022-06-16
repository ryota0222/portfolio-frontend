import React, { memo, useMemo } from 'react'
import { Box, BoxProps, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
import Slide from '@/components/features/top/Slide'
import { CreativeItem } from '@/components/molecules/CreativeItem'
import useSp from '@/hooks/useSp'

const APPLICATION_LIST = [
  {
    image: '/images/w-tetris.png',
    title: 'W Tetris',
    description: 'テトリスをWebの技術で作成しています。PWAにも対応済みです。',
    github: 'https://github.com/RyoTa0222/w-tetris',
  },
  {
    image: '/images/presentation-timer.png',
    title: 'Presentation Watch',
    description:
      '勉強会で使用するために作成したタイムキーパーアプリです。WebSocketを用いて双方向通信を実現し複数台の端末で管理可能です。',
    github: 'https://github.com/RyoTa0222/presentation-timer',
  },
]

const LINE_STAMP_LIST = [
  {
    image: '/images/sticky/penpen-2.png',
    link: 'https://line.me/S/sticker/19096682',
  },
  {
    image: '/images/sticky/penpen-1.png',
    link: 'https://line.me/S/sticker/18833443',
  },
  {
    image: '/images/sticky/greeny-chick-enginner.png',
    link: 'https://line.me/S/sticker/19096682',
  },
  {
    image: '/images/sticky/otokonoko-pun.png',
    link: 'https://line.me/S/sticker/16627181',
  },
  {
    image: '/images/sticky/otokonoko-3.png',
    link: 'https://line.me/S/sticker/16584411',
  },
  {
    image: '/images/sticky/otokonoko-2.png',
    link: 'https://line.me/S/sticker/16101783',
  },
  {
    image: '/images/sticky/otokonoko-1.png',
    link: 'https://line.me/S/sticker/15744468',
  },
  {
    image: '/images/sticky/cubicun.png',
    link: 'https://line.me/S/sticker/3859035',
  },
  {
    image: '/images/sticky/yota.png',
    link: 'https://line.me/S/sticker/3546558',
  },
  {
    image: '/images/sticky/gebe.png',
    link: 'https://line.me/S/sticker/1301367',
  },
  {
    image: '/images/sticky/frogman.png',
    link: 'https://line.me/S/sticker/1301351',
  },
]

const Creative = () => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  return (
    <Flex w="100vw" minH={'80vh'} m="auto" flexDir="column">
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
                <CreativeItem image={line_stamp.image} />
              </Box>
            </Link>
          </React.Fragment>
        ))}
      </ScrollableWrapper>
      {/* 登壇資料 */}
      <UnScrollableWrapper mb={12} mt={20}>
        <SubSectionTitle size={size}>Recent Slide</SubSectionTitle>
        <Slide />
      </UnScrollableWrapper>
    </Flex>
  )
}

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
  overflow: scroll;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
`
