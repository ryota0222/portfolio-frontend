import { memo } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { InlineResponse400, InlineResponse2002 } from '@/apis/models'
import BlogsContents from '@/components/features/blogs/BlogsContents'
import BlogsSideMenu from '@/components/features/blogs/BlogsSideMenu'
import LoadingBlogContents from '@/components/features/blogs/LoadingBlogContents'
import SideMenuWrapper from '@/components/features/blogs/SideMenuWrapper'
import { FULL_HEIGHT } from '@/consts/style'
import useDesignSystem from '@/hooks/useDesignSystem'
import useWindowHeight from '@/hooks/useWindowHeight'
import Error from '@/pages/_error'
import { PageWrapper } from '@/styles/global.css'

interface Props {
  settings?: InlineResponse400 | InlineResponse2002
  contents?: InlineResponse400 | any
  title: string
  searchWord?: string
  isLoading: boolean
  isError: any
}

const BlogsTemplate: React.FC<Props> = memo(
  ({ settings, contents, title, searchWord, isLoading, isError }) => {
    const { BLOG_SIDE_MENU_BG } = useDesignSystem()
    const { scrollHeight } = useWindowHeight()
    const minHeight = useBreakpointValue({
      base: 'auto',
      md: scrollHeight,
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
      md: '320px',
    })
    const contentW = useBreakpointValue({
      base: '100%',
      md: '50%',
    })
    const colorTheme = useColorModeValue('light', 'dark')
    // エラー時
    if ((!settings.success && !contents?.success) || isError) {
      return (
        <Error statusCode={500} message={'データの取得に失敗しました'}></Error>
      )
    }
    // 正常時
    return (
      <PageWrapper id="blog-container">
        <Flex flexFlow={flexFlow} justifyContent="space-between">
          {/* サイドメニュー */}
          <SideMenuWrapper>
            <Box
              maxW={sideMenuMaxW}
              w={sideMenuW}
              minH={minHeight}
              position="relative"
            >
              <Box
                minH={FULL_HEIGHT}
                position="absolute"
                top="-48px"
                left={0}
                w="100%"
              >
                <BlogsSideMenu
                  data={(settings as InlineResponse2002).data}
                  loading={isLoading}
                />
              </Box>
            </Box>
          </SideMenuWrapper>
          {/* コンテンツ */}
          <Box w={contentW} minH={minHeight} flex={1}>
            {/* 取得中 */}
            {isLoading && <LoadingBlogContents />}
            {/* コンテンツが返ってきた場合 */}
            {!isLoading && (
              <BlogsContents
                data={(contents as any).data}
                settings={(settings as InlineResponse2002).data}
                title={title}
                searchWord={searchWord}
              />
            )}
          </Box>
        </Flex>
      </PageWrapper>
    )
  },
)

export default BlogsTemplate
