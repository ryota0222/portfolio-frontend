import { memo, useCallback, useRef, useMemo } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import router, { useRouter } from 'next/router'
import { BlogCategory } from '@/components/atoms/BlogCategory'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { BlogMenuItem } from '@/components/molecules/BlogMenuItem'
import useDesignSystem from '@/hooks/useDesignSystem'
import { BlogSetting } from '@/types/interface'
import { formatDate } from '@/utils/dayjs'
import throttle from '@/utils/throttle'

interface Props {
  data: BlogSetting
  loading: boolean
  width: string
}

const BlogsSideMenu: React.FC<Props> = memo(({ data, loading }) => {
  const { BLOG_SIDE_MENU_BG } = useDesignSystem()
  const { query } = useRouter()

  // 月別アーカイブがアクティブかどうか
  const isArchiveActive = useCallback(
    (date) => {
      return date === query?.time
    },
    [query],
  )
  // タグがアクティブかどうか
  const isTagActive = useCallback(
    (tagId) => {
      return tagId === query?.tag
    },
    [query],
  )
  return (
    <Box
      w="full"
      h="full"
      boxSizing="border-box"
      p={8}
      pt="80px"
      maxW="320px"
      position={'relative'}
      _before={{
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30%',
        maxWidth: '320px',
        minHeight: '100vh',
        backgroundColor: BLOG_SIDE_MENU_BG,
        zIndex: -9999,
      }}
    >
      {/* 月別アーカイブ */}
      {data.monthly_archives?.length > 0 && (
        <Box pb={2}>
          <Flex alignItems="center" mb={4}>
            <Box as="span" mr={2}>
              <SvgIcon width={18} height={18} name="archive-gradient" />
            </Box>
            <Title>月別アーカイブ</Title>
          </Flex>
          <Box maxHeight={'calc(50px * 7.4)'} overflow="scroll">
            {loading ? (
              <>
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <Box key={item} my={2}>
                      <BlogMenuItem
                        selected={false}
                        file={0}
                        loading={true}
                      ></BlogMenuItem>
                    </Box>
                  )
                })}
              </>
            ) : (
              <>
                {data.monthly_archives.map((item, idx) => {
                  const date = Object.keys(item)[0]
                  const count = Object.values(item)[0]?.count ?? 0
                  return (
                    <Box
                      key={idx}
                      my={2}
                      onClick={throttle(() =>
                        router.push(
                          `/blog?time=${formatDate(date, 'YYYY-MM')}`,
                        ),
                      )}
                      cursor="pointer"
                    >
                      <BlogMenuItem
                        selected={date === query?.time}
                        file={count}
                        loading={false}
                      >
                        {formatDate(date, 'YYYY/M')}
                      </BlogMenuItem>
                    </Box>
                  )
                })}
              </>
            )}
          </Box>
        </Box>
      )}
      {/* カテゴリ別アーカイブ */}
      {data.tag_archives?.length > 0 && data.tags?.length > 0 && (
        <Box pb={4} mt={12}>
          <Flex alignItems="center" mb={4}>
            <Box as="span" mr={2}>
              <SvgIcon width={'16px'} height={'16px'} name="tag-gradient" />
            </Box>
            <Title>カテゴリ別アーカイブ</Title>
          </Flex>
          <Box maxHeight={'calc(50px * 7.4)'} overflow="scroll">
            {loading ? (
              <>
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <Box key={item} my={2}>
                      <BlogMenuItem
                        selected={false}
                        file={0}
                        loading={true}
                      ></BlogMenuItem>
                    </Box>
                  )
                })}
              </>
            ) : (
              <>
                {data.tag_archives.map((item, index) => {
                  const tagName = Object.keys(item)[0]
                  const tagValue = Object.values(item)[0]
                  const tagData = data.tags.find(
                    (tag) => tag.tag_id === tagName,
                  )
                  const label = tagData.label
                  const icon = tagData.icon
                  return (
                    <Box
                      key={index}
                      my={2}
                      onClick={throttle(() =>
                        router.push(`/blog?tag=${tagData.id}`),
                      )}
                      cursor="pointer"
                    >
                      <BlogMenuItem
                        selected={isTagActive(tagData.id)}
                        file={tagValue.count}
                        folder={tagValue?.series?.length}
                        loading={false}
                      >
                        <BlogCategory icon={icon} label={label} />
                      </BlogMenuItem>
                    </Box>
                  )
                })}
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  )
})

const Title = memo(({ children }) => {
  const { TEXT_COLOR } = useDesignSystem()
  return (
    <Text as="h2" color={TEXT_COLOR} fontWeight="bold" fontSize="sm">
      {children}
    </Text>
  )
})

export default BlogsSideMenu
