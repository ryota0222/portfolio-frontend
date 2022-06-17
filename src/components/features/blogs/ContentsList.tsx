import { useMemo } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  FlexboxProps,
  Spacer,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppButton } from '@/components/atoms/Button'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { BlogCard } from '@/components/molecules/BlogCard/index'
import { BLOG_SERIES_MAX_CONTENTS } from '@/consts/config'
import useDesignSystem from '@/hooks/useDesignSystem'
import { BlogContent } from '@/types/interface'

const NO_DATA_TEXT = '記事がありません'

interface Props {
  contents: BlogContent[]
  path: string
}

const ContentsList: React.FC<Props> = ({ contents, path }) => {
  const router = useRouter()
  const contentsDirection = useBreakpointValue<FlexboxProps['flexDirection']>({
    base: 'column',
    sm: 'row',
  })
  const blogContentWidth = useBreakpointValue({ base: '100%', md: 'auto' })
  const blogContentMargin = useBreakpointValue({
    base: '0 0 32px',
    md: '0 8px 32px',
  })
  const isBlogContentsArray = useMemo(() => {
    return Array.isArray(contents)
  }, [contents])
  const { TEXT_COLOR, NO_DATA_COLOR } = useDesignSystem()
  // シリーズの詳細を見る
  const getMoreSeries = (contentId: string, label: string) => {
    if (contentId === 'others') {
      router.push(`${path}&series=${contentId}&title=${label}`)
    } else {
      router.push(`/blog?series=${contentId}&title=${label}`)
    }
  }
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      flexDirection={contentsDirection}
      flex={1}
    >
      {/* コンテンツ（配列） */}
      {isBlogContentsArray &&
        contents.map((content) => {
          return (
            <Link href={`/blog/${content.id}`} key={content.id} passHref>
              <Box
                m={blogContentMargin}
                position="relative"
                w={blogContentWidth}
                cursor="pointer"
              >
                <BlogCard
                  image={`https:${content.image}`}
                  title={content.title}
                  label={content.tag.label}
                  icon={content.tag.icon}
                  loading={false}
                />
              </Box>
            </Link>
          )
        })}
      {/* コンテンツ（オブジェクト） */}
      {!isBlogContentsArray && (
        <Box w="100%">
          {Object.keys(contents).map((contentId) => {
            const content = contents[contentId]
            return (
              <>
                <Flex alignItems={'center'} mb={2} pl={2}>
                  <SvgIcon
                    name="folder"
                    color={TEXT_COLOR}
                    width="18px"
                    height="18px"
                    mr={2}
                  />
                  <Text fontWeight="bold">{content.label}</Text>
                  {content.contents.length > BLOG_SERIES_MAX_CONTENTS && (
                    <>
                      <Spacer />
                      <AppButton
                        round
                        processing={false}
                        scheme="primary"
                        onClick={() => getMoreSeries(contentId, content.label)}
                        fontSize="xx-small"
                        height="28px"
                        _hover={{ opacity: 0.8 }}
                        _activeLink={{ opacity: 0.8 }}
                        px={3}
                        mr={2}
                      >
                        もっと見る
                      </AppButton>
                    </>
                  )}
                </Flex>
                {content.total > 0 ? (
                  <Flex
                    flexWrap="wrap"
                    justifyContent="space-between"
                    flexDirection={contentsDirection}
                    mb={8}
                  >
                    {content.contents.map((c) => (
                      <Link href={`/blog/${c.id}`} key={c.id} passHref>
                        <Box
                          m={blogContentMargin}
                          position="relative"
                          w={blogContentWidth}
                          cursor="pointer"
                        >
                          <BlogCard
                            image={`https:${c.image}`}
                            title={c.title}
                            label={c.tag.label}
                            icon={c.tag.icon}
                            loading={false}
                          />
                        </Box>
                      </Link>
                    ))}
                  </Flex>
                ) : (
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    my={16}
                    color={NO_DATA_COLOR}
                  >
                    {NO_DATA_TEXT}
                  </Text>
                )}
              </>
            )
          })}
        </Box>
      )}
      {/* データがない場合 */}
      {isBlogContentsArray && contents.length === 0 && (
        // 記事がない時
        <Text
          textAlign="center"
          fontSize="sm"
          my={8}
          mt={16}
          color={NO_DATA_COLOR}
        >
          {NO_DATA_TEXT}
        </Text>
      )}
    </Flex>
  )
}

export default ContentsList
