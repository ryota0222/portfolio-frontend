import { useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import tocbot from 'tocbot'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import BlogSideMenu from '@/components/features/blogs/BlogSideMenu'
import { Breadcrumb } from '@/components/molecules/Breadcrumb'
import useBlogContentWidth from '@/hooks/blogs/useBlogContentWidth'
import useSp from '@/hooks/useSp'
import useWindowHeight from '@/hooks/useWindowHeight'
import { PageWrapper } from '@/styles/global.css'
import { Blog } from '@/types/interface'
import { formatDate } from '@/utils/dayjs'
import getRichTextRenderer from '@/utils/richTextRenderer'

interface Props {
  data: Blog
}

const BlogDetailTemplate: React.FC<Props> = ({ data }) => {
  const [w, h, setImageW, setImageH, clientW, ratio] = useBlogContentWidth()
  const { scrollHeight } = useWindowHeight()
  const iconColor = useColorModeValue('#919AC2', '#FFFFFF')
  const [isSp] = useSp()
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
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.body',
      headingSelector: 'h2, h3, h4, h5, h6',
    })
    return () => tocbot.destroy()
  }, [])
  const cssName = useColorModeValue('light', 'dark')
  const minHeight = useBreakpointValue({
    base: 'auto',
    md: scrollHeight,
  })
  const titleFontSize = useBreakpointValue({
    base: 'lg',
    md: '3xl',
  })
  const contentsPadding = useBreakpointValue({
    base: 4,
    md: 0,
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
  const breadCrumbBgColor = useColorModeValue('#F0F0F0', '#252829')
  return (
    <PageWrapper id="blog-container">
      <Flex flexFlow={flexFlow} justifyContent="space-between">
        {/* メニュー */}
        <Box maxW={sideMenuMaxW} w={sideMenuW} minH={minHeight} mt={'-48px'}>
          <BlogSideMenu
            tag={data.tag}
            series={data.series}
            lgtm={data.lgtm}
            title={data.title}
            author={data.author}
          />
        </Box>
        {/* コンテンツ */}
        <Box
          w={contentW}
          minH={minHeight}
          id="blog-content"
          className={cssName}
          pb={16}
          m="auto"
        >
          <Box maxW="550px" m="auto" h="100%">
            {/* タイトル */}
            <Text
              fontSize={titleFontSize}
              fontWeight="bold"
              mt={4}
              mb={4}
              position="sticky"
              top={0}
              zIndex={99}
              pl={2}
              pt={2}
              backdropFilter="blur(4px)"
              as="h1"
            >
              {data.title}
            </Text>
            {isSp && (
              <Box
                backgroundColor={breadCrumbBgColor}
                px={contentsPadding}
                py={1}
              >
                <Breadcrumb tag={data.tag} series={data.series} />
              </Box>
            )}
            <Box px={contentsPadding}>
              {/* 画像 */}
              <Box mt={8} mb={4}>
                <img
                  src={`https:${data.image}`}
                  alt={data.title}
                  style={{ width: '100%' }}
                />
              </Box>
              <Box mb={8}>
                {/* 作成日 */}
                {data?.created_at && (
                  <Flex alignItems="center" justifyContent="flex-end">
                    <SvgIcon
                      name="create"
                      color={iconColor}
                      width="18px"
                      height="18px"
                    />
                    <Text ml={2} fontSize="14px" letterSpacing="1px">
                      {formatDate(data.created_at, 'YYYY/MM/DD')}
                    </Text>
                  </Flex>
                )}
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
                      {formatDate(data.updated_at, 'YYYY/MM/DD')}
                    </Text>
                  </Flex>
                )}
              </Box>
              {/* 本文 */}
              <div className="contents-wrapper body">
                {getRichTextRenderer(data.content)}
              </div>
              {/* 広告 */}
              {/* <Box key={asPath} boxSizing="border-box" w="100%" py="40px">
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block', textAlign: 'center' }}
                  data-ad-client="ca-pub-7852298720384342"
                  data-ad-slot="2534210176"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </Box> */}
            </Box>
          </Box>
        </Box>
        {/* サイドメニュー */}
        {!isSp && (
          <Box
            as="aside"
            flex={1}
            minH={minHeight}
            display={sideMenuDisplay}
            maxW="360px"
            overflow="hidden"
          >
            {/* <Ads /> */}
          </Box>
        )}
      </Flex>
    </PageWrapper>
  )
}

export default BlogDetailTemplate
