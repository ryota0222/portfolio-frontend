import { memo } from 'react'
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react'
import throttle from 'just-throttle'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BreadcrumbComponent from '@/components/atoms/Breadcrumb'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { Counter } from '@/components/molecules/Counter'
import { Intro } from '@/components/molecules/Intro'
import { Tag, Lgtm, Author, CounterType } from '@/types/interface'

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
}

const BlogSideMenu: React.FC<Props> = memo(({ tag, lgtm, title, author }) => {
  const isSp = useBreakpointValue({ base: true, md: false })
  // const [good, setGood] = useState()
  // const [bad, setBad] = useState()
  const router = useRouter()
  const id = router.query.id
  // 評価する
  const setReview = throttle(
    (type: CounterType) => {
      console.log(type)
    },
    500,
    { trailing: false },
  )
  const bg = useColorModeValue('#F0F0F0', '#252829')
  const iconColor = useColorModeValue('#919AC2', '#CCCCCC')
  const borderBottomColor = useColorModeValue('#D7D7D7', '#666')
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
  return (
    <Box
      w={width}
      bgColor={bg}
      h="full"
      boxSizing="border-box"
      p={3}
      pt={0}
      mr={mr}
    >
      <Box pt={5} position="sticky" top="0px">
        {/* パンくずリスト */}
        {!isSp && (
          <Box
            borderBottomWidth="1px"
            borderBottomColor={borderBottomColor}
            pb={2}
          >
            <BreadcrumbComponent tag={tag} />
          </Box>
        )}
        {/* 目次 */}
        <Box
          mt={2}
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
          visibility={tocVisibility as 'visible' | 'hidden'}
          height={tocHeight}
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
        <Box
          mt={2}
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
        >
          {/* タイトル */}
          <Text
            fontSize="small"
            fontWeight="bold"
            mt={6}
            mb={4}
            textAlign="center"
          >
            シェアしましょう！
          </Text>
          <Center mb={4}>
            <HStack spacing="32px">
              <Box
                as="a"
                aria-label="Twitterで共有する"
                href={encodeURI(
                  `https://twitter.com/intent/tweet?text=${title} | RyoTa.&url=${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`,
                )}
                target="_blank"
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
              >
                <SvgIcon name="facebook" width="40px" height="40px" />
              </Box>
            </HStack>
          </Center>
        </Box>
        {/* 著者 */}
        {author && (
          <Box
            mt={2}
            borderBottomWidth="1px"
            borderBottomColor={borderBottomColor}
            pb={2}
          >
            <Intro
              imageData={author.image as unknown as StaticImageData}
              name={author.name}
              intro={author.description}
            />
          </Box>
        )}
        <Center mt={6}>
          <a
            href="https://www.buymeacoffee.com/RyoTa"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              height="60px"
              width="140px"
              objectFit="contain"
            />
          </a>
        </Center>
      </Box>
    </Box>
  )
})
export default BlogSideMenu
