import { memo, useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import throttle from 'just-throttle'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { BlogIndex } from '@/components/organisms/BlogIndex'
import useBlogContentScroll from '@/hooks/useBlogContentScroll'
import { Tag, BlogIndexItem } from '@/types/interface'
interface Props {
  tag: Tag
  index: BlogIndexItem[]
}

const BlogSideMenu: React.FC<Props> = memo(({ tag, index }) => {
  const [idx, setIndex] = useBlogContentScroll()
  useEffect(() => {
    console.log(idx)
  }, [idx])
  const bg = useColorModeValue('#F0F0F0', '#252829')
  const iconColor = useColorModeValue('#919AC2', '#CCCCCC')
  const textColor = useColorModeValue('dark', 'white')
  const borderBottomColor = useColorModeValue('#D7D7D7', '#666')
  const width = useBreakpointValue({
    base: '100%',
    md: 'calc(100% - 32px)',
  })
  const mr = useBreakpointValue({
    base: '0px',
    md: '32px',
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
        <Box
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">
                <SvgIcon
                  name="home"
                  color={iconColor}
                  width="16px"
                  height="14px"
                />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/blog?category=${tag.tag_id}`}
                fontSize="sm"
              >
                {tag.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        {/* 目次 */}
        <Box
          mt={2}
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
        >
          {/*  */}
          <BlogIndex list={index} currentIndex={idx} />
        </Box>
      </Box>
    </Box>
  )
})
export default BlogSideMenu
