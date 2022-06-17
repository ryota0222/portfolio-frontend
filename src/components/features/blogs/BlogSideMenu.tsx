import { memo } from 'react'
import BreadcrumbComponent from '@/components/atoms/Breadcrumb'
import { Counter } from '@/components/molecules/Counter'
import { Intro } from '@/components/molecules/Intro'
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  useBreakpointValue,
  HStack,
  Flex,
} from '@chakra-ui/react'
import throttle from 'just-throttle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import coffeeImage from '@/assets/blogs/coffee.png'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'
import useWindowHeight from '@/hooks/useWindowHeight'
import { BlogSideMenuTitle } from '@/styles/global.css'
import { Tag, Lgtm, Author, CounterType, Series } from '@/types/interface'

interface Props {
  /**
   * タグデータ
   */
  tag: Tag
  /**
   * 評価データ
   */
  lgtm: Lgtm
  /**
   * タイトル
   */
  title: string
  /**
   * 著者データ
   */
  author: null | Author
  /**
   * シリーズデータ
   */
  series: null | Series
}

const BlogSideMenu: React.FC<Props> = memo(
  ({ tag, lgtm, title, author, series }) => {
    const [isSp] = useSp()
    const { BLOG_SIDE_MENU_BG } = useDesignSystem()
    const { scrollHeight } = useWindowHeight()
    const router = useRouter()
    const id = router.query.id
    const sideMenuContentsWrapper = useColorModeValue('#FFFFFF', '#353839')
    const width = useBreakpointValue({
      base: '100%',
      md: 'calc(100% - 32px)',
    })
    const mr = useBreakpointValue({
      base: '0px',
      md: '32px',
    })
    const tocVisibility = useBreakpointValue({
      base: 'hidden',
      md: 'visible',
    })
    const tocHeight = useBreakpointValue({
      base: 0,
      md: 'auto',
    })
    const tocMb = useBreakpointValue({ base: 0, md: 10 })
    const tocPb = useBreakpointValue({ base: 0, md: 1 })
    const containerPt = useBreakpointValue({ base: 0, md: '80px' })
    return (
      <Box
        w={width}
        bgColor={BLOG_SIDE_MENU_BG}
        h="full"
        boxSizing="border-box"
        p={3}
        pt={containerPt}
        mr={mr}
      >
        <Box
          position="sticky"
          top="0px"
          pt={4}
          maxHeight={scrollHeight}
          overflowY="scroll"
        >
          {/* パンくずリスト */}
          {!isSp && (
            <Box
              pb={2}
              mb={8}
              backgroundColor={sideMenuContentsWrapper}
              borderRadius={8}
              p={2}
              pl={4}
            >
              <BreadcrumbComponent tag={tag} series={series} />
            </Box>
          )}
          {/* 目次 */}
          <Box
            mb={tocMb}
            py={tocPb}
            visibility={tocVisibility as 'visible' | 'hidden'}
            height={tocHeight}
            backgroundColor={sideMenuContentsWrapper}
            borderRadius={8}
          >
            <Box pl={4}>
              <nav className="toc" />
            </Box>
          </Box>
          {/* カウンター一覧 */}
          {/* <Box
          mt={2}
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
        > */}
          {/* タイトル */}
          {/* <Text fontSize="small" fontWeight="bold" mt={6} mb={4} textAlign="center">参考になりましたか？</Text>
          <Center>
            <HStack spacing="32px">
              <Box as="button" aria-label="高評価をする" onClick={() => setReview('good')}>
                <Counter type="good" count={lgtm.good} active={false} />
              </Box>
              <Box as="button" aria-label="低評価をする" onClick={() => setReview('bad')}>
                <Counter type="bad" count={lgtm.bad} active={false} />
              </Box>
            </HStack>
          </Center>
        </Box> */}
          {/* シェア */}
          <Box mt={2} pb={2}>
            {/* タイトル */}
            <Text fontSize="small" fontWeight="bold" mb={4} textAlign="center">
              <BlogSideMenuTitle>シェアお願いします！</BlogSideMenuTitle>
            </Text>
            <Center
              mb={4}
              backgroundColor={sideMenuContentsWrapper}
              py={4}
              borderRadius={8}
            >
              <HStack spacing="32px">
                <Box
                  as="a"
                  aria-label="Twitterで共有する"
                  href={encodeURI(
                    `https://twitter.com/intent/tweet?text=${title} | RyoTa.&url=${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgIcon name="twitter" width="40px" height="40px" />
                </Box>
                <Box
                  as="a"
                  aria-label="FaceBookで共有する"
                  href={`http://www.facebook.com/share.php?u=${encodeURI(
                    `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgIcon name="facebook" width="40px" height="40px" />
                </Box>
              </HStack>
            </Center>
          </Box>
          {/* buy me a coffee */}
          <Box my={4} mb={12}>
            <Text fontSize="small" fontWeight="bold" mb={4} textAlign="center">
              <BlogSideMenuTitle>コーヒー飲みたいです！</BlogSideMenuTitle>
            </Text>
            <Flex
              mt={6}
              backgroundColor={sideMenuContentsWrapper}
              pt={4}
              px={8}
              borderRadius={8}
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <a
                href="https://www.buymeacoffee.com/RyoTa"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  height="40px"
                  width="180px"
                  objectFit="contain"
                />
              </a>
              <Flex w="70%">
                <Image src={coffeeImage} alt="画像" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    )
  },
)
export default BlogSideMenu
