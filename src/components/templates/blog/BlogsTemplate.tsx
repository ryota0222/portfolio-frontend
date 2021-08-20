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
  title: string
  searchWord?: string
  isLoading: boolean
  isError: any
}

const BlogsTemplate: React.FC<Props> = ({
  settings,
  contents,
  title,
  searchWord,
  isLoading,
  isError,
}) => {
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
  console.log({
    settings,
    contents,
    title,
    searchWord,
    isLoading,
    isError,
  })
  // return <></>
  if (!settings.success || !contents?.success || isError) {
    return (
      // <Error statusCode={500} message={'データの取得に失敗しました'}></Error>
      <></>
    )
  } else {
    return (
      <PageWrapper id="blog-container">
        <Flex flexFlow={flexFlow}>
          {/* メニュー */}
          <Box maxW={sideMenuMaxW} w={sideMenuW} minH={minHeight}>
            <BlogsSideMenu data={(settings as InlineResponse2002).data} />
          </Box>
          {/* コンテンツ */}
          <Box w={contentW} minH={minHeight}>
            <BlogsContents
              data={(contents as InlineResponse2003).data}
              title={title}
              searchWord={searchWord}
            />
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
