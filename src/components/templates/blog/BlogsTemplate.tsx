import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import {
  InlineResponse400,
  InlineResponse2002,
  InlineResponse2003,
} from '@/apis/models'
import Ads from '@/components/organisms/Ads'
import BlogsContents from '@/components/organisms/BlogsContents'
import BlogsSideMenu from '@/components/organisms/BlogsSideMenu'
import useSp from '@/hooks/useSp'
import Error from '@/pages/_error'
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
  const [isSp] = useSp()
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
    md: '320px',
  })
  const contentW = useBreakpointValue({
    base: '100%',
    md: '50%',
  })
  const bg = useColorModeValue('#F0F0F0', '#252829')
  const colorTheme = useColorModeValue('light', 'dark')
  if ((!settings.success && !contents?.success) || isError) {
    return (
      <Error statusCode={500} message={'データの取得に失敗しました'}></Error>
    )
  } else {
    return (
      <PageWrapper id="blog-container">
        <Flex flexFlow={flexFlow} justifyContent="space-between">
          {/* メニュー */}
          {/* スマホサイズじゃない場合 */}
          {!isSp && (
            <Box
              maxW={sideMenuMaxW}
              w={sideMenuW}
              minH={minHeight}
              position="relative"
              bgColor={bg}
            >
              <Box
                minH="calc(var(--vh, 1vh) * 100)"
                position="absolute"
                top="-48px"
                left={0}
                w="100%"
              >
                <BlogsSideMenu data={(settings as InlineResponse2002).data} />
              </Box>
            </Box>
          )}
          {/* コンテンツ */}
          <Box w={contentW} minH={minHeight} pl="40px">
            {!isLoading && (
              <BlogsContents
                data={(contents as InlineResponse2003).data}
                settings={(settings as InlineResponse2002).data}
                title={title}
                searchWord={searchWord}
              />
            )}
            {isLoading && (
              <Center w="full" h="full">
                <div className={`loader ${colorTheme}`}>ローディング中</div>
              </Center>
            )}
          </Box>
          {/* サイドメニュー */}
          <Box
            as="aside"
            flex={1}
            minH={minHeight}
            display={sideMenuDisplay}
            maxW="360px"
          >
            <Ads />
          </Box>
        </Flex>
      </PageWrapper>
    )
  }
}

export default BlogsTemplate
