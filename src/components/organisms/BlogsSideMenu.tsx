import { memo, useCallback, useMemo } from 'react'
import { Box, Flex, Text, Center, useColorModeValue } from '@chakra-ui/react'
import dayjs from 'dayjs'
import throttle from 'just-throttle'
import router, { useRouter } from 'next/router'
import { Counter } from '@/components/atoms/Counter'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import ArchiveItem from '@/components/molecules/ArchiveItem'
import { BlogSetting } from '@/types/interface'
interface Props {
  data: BlogSetting
}

const BlogsSideMenu: React.FC<Props> = memo(({ data }) => {
  const bg = useColorModeValue('#F0F0F0', '#252829')
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
      backgroundColor={bg}
      h="full"
      boxSizing="border-box"
      p={8}
      pt="80px"
      maxW="320px"
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
          <Box>
            {data.monthly_archives.map((item, idx) => {
              const date = Object.keys(item)[0]
              const count = Object.values(item)[0]?.count ?? 0
              return (
                <Box key={idx} my={2}>
                  <ArchiveItem
                    isActive={isArchiveActive(date)}
                    count={count}
                    onClick={throttle(
                      () =>
                        router.push(
                          `/blog?time=${dayjs(date).format('YYYY-MM')}`,
                        ),
                      1000,
                      { trailing: false },
                    )}
                  >
                    {dayjs(date).format('YYYY/M')}
                  </ArchiveItem>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
      {/* タグ別アーカイブ */}
      {data.tag_archives?.length > 0 && data.tags?.length > 0 && (
        <Box pb={4} mt={12}>
          <Flex alignItems="center" mb={4}>
            <Box as="span" mr={2}>
              <SvgIcon width={16} height={16} name="tag-gradient" />
            </Box>
            <Title>タグ別アーカイブ</Title>
          </Flex>
          <Box>
            {data.tag_archives.map((item, index) => {
              const tagName = Object.keys(item)[0]
              const tagValue = Object.values(item)[0]
              const tagData = data.tags.find((tag) => tag.tag_id === tagName)
              const label = tagData.label
              const tagColor = tagData.color
              return (
                <Box key={index} my={2}>
                  <ArchiveItem
                    isActive={isTagActive(tagData.id)}
                    count={tagValue.count}
                    onClick={throttle(
                      () => router.push(`/blog?tag=${tagData.id}`),
                      1000,
                      {
                        trailing: false,
                      },
                    )}
                  >
                    <Flex alignItems="center">
                      <Text fontSize="sm" color={tagColor} fontWeight="bold">
                        #
                      </Text>
                      <Text
                        fontSize="small"
                        p={1}
                        colorScheme="dark"
                        fontWeight="bold"
                      >
                        {label}
                      </Text>
                    </Flex>
                  </ArchiveItem>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Box>
  )
})

const Title = memo(({ children }) => {
  const textColor = useColorModeValue('dark', '#AFAFAF')
  return (
    <Text as="h2" color={textColor} fontWeight="bold" fontSize="sm">
      {children}
    </Text>
  )
})

Title.displayName = 'Title'
BlogsSideMenu.displayName = 'BlogsSideMenu'

export default BlogsSideMenu
