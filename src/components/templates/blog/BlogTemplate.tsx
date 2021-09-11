import { useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import ImageComponent from '@/components/atoms/Image'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import Ads from '@/components/organisms/Ads'
import { BLOG_IMAGE_MAX_WIDTH } from '@/consts/config'
import useBlogContentWidth from '@/hooks/useBlogContentWidth'
import { PageWrapper } from '@/styles/globals'
import { Blog } from '@/types/interface'
import getRichTextRenderer from '@/utils/richTextRenderer'

interface Props {
  data: Blog
}

const BlogDetailTemplate: React.FC<Props> = ({ data }) => {
  const [w, h, setImageW, setImageH, clientW, ratio] = useBlogContentWidth()
  const iconColor = useColorModeValue('#919AC2', '#CCCCCC')
  // 画像の幅と高さを取得
  useEffect(() => {
    const url = `https:${data.image}`
    const element = new Image()
    element.onload = function () {
      setImageW(element.naturalWidth)
      setImageH(element.naturalHeight)
    }
    element.src = url
  }, [])
  const cssName = useColorModeValue('light', 'dark')
  const minHeight = useBreakpointValue({
    base: 'auto',
    md: 'calc(var(--vh, 1vh) * 100 - 48px)',
  })
  const sideMenuDisplay = useBreakpointValue({
    base: 'none',
    md: 'inherit',
  })
  const flexFlow = useBreakpointValue({
    base: 'column-reverse',
    md: 'row',
  })
  const sideMenuW = useBreakpointValue({
    base: '100%',
    md: '30%',
  })
  const sideMenuMaxW = useBreakpointValue({
    base: '100%',
    md: '360px',
  })
  const contentW = useBreakpointValue({
    base: '100%',
    md: '50%',
  })
  return (
    <PageWrapper id="blog-container">
      <Flex flexFlow={flexFlow}>
        {/* メニュー */}
        <Box maxW={sideMenuMaxW} w={sideMenuW} minH={minHeight}>
          {/* <BlogsSideMenu data={(settings as InlineResponse2002).data} /> */}
        </Box>
        {/* コンテンツ */}
        <Box
          w={contentW}
          minH={minHeight}
          id="blog-content"
          className={cssName}
          pb={16}
        >
          {/* タイトル */}
          <Text
            fontSize="3xl"
            fontWeight="bold"
            mt={4}
            mb={4}
            position="sticky"
            top={0}
            zIndex={9999}
            pl={2}
            backdropFilter="blur(4px)"
          >
            {data.title}
          </Text>
          {/* 画像 */}
          <Box position="relative" my={8} mb={4} overflow="hidden">
            <Box
              width="100%"
              height={`calc(${ratio} * ${
                clientW > BLOG_IMAGE_MAX_WIDTH ? BLOG_IMAGE_MAX_WIDTH : clientW
              }px)`}
              filter="brightness(0.8) blur(6px)"
              transform="scale(1.03)"
            >
              <NextImage
                src={`https:${data.image}`}
                alt={data.title}
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Center position="absolute" top={0} left={0} w="100%">
              <ImageComponent url={`https:${data.image}`} title={data.title} />
            </Center>
          </Box>
          <Box mb={8}>
            {/* 作成日 */}
            <Flex alignItems="center" justifyContent="flex-end">
              <SvgIcon
                name="create"
                color={iconColor}
                width="16px"
                height="16px"
              />
              <Text ml={2} fontSize="14px" letterSpacing="1px">
                {data.created_at.replaceAll('-', '/')}
              </Text>
            </Flex>
            {/* 更新日 */}
            {data.updated_at && (
              <Flex alignItems="center" mt={2} justifyContent="flex-end">
                <SvgIcon
                  name="update"
                  color={iconColor}
                  width="16px"
                  height="16px"
                />
                <Text ml={2} fontSize="14px" letterSpacing="1px">
                  {data.created_at.replaceAll('-', '/')}
                </Text>
              </Flex>
            )}
          </Box>
          {/* 本文 */}
          {getRichTextRenderer(data.content)}
        </Box>
        {/* サイドメニュー */}
        <Box as="aside" flex={1} minH={minHeight} display={sideMenuDisplay}>
          <Ads />
        </Box>
      </Flex>
    </PageWrapper>
  )
}

export default BlogDetailTemplate
