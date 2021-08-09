import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import Error from 'next/error'
import {
  InlineResponse400,
  InlineResponse2002,
  InlineResponse2003,
} from '@/apis/models'
import Ads from '@/components/organisms/Ads'
import BlogsContents from '@/components/organisms/BlogsContents'
import BlogsSideMenu from '@/components/organisms/BlogsSideMenu'
import { PageWrapper } from '@/styles/globals'

interface Props {
  settings?: InlineResponse400 | InlineResponse2002
  contents?: InlineResponse400 | InlineResponse2003
}

const BlogsTemplate: React.FC<Props> = ({ settings, contents }) => {
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
  if (!settings.success || !contents.success) {
    return (
      <Error statusCode={500} message={'データの取得に失敗しました'}></Error>
    )
  } else {
    return (
      <PageWrapper id="blog-container">
        <Flex flexFlow={flexFlow}>
          {/* メニュー */}
          <Box maxW="360px" w="20%" minH={minHeight}>
            <BlogsSideMenu data={(settings as InlineResponse2002).data} />
          </Box>
          {/* コンテンツ */}
          <Box maxW="720px" w="50%" minH={minHeight}>
            <BlogsContents />
          </Box>
          {/* サイドメニュー */}
          <Box as="aside" flex={1} minH={minHeight} display={sideMenuDisplay}>
            <Ads />
          </Box>
        </Flex>
      </PageWrapper>
    )
  }
}

export default BlogsTemplate
