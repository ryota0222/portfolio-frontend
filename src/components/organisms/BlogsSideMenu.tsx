import { memo } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import dayjs from 'dayjs'

interface Props {
  data: {
    monthly_archives?: Record<
      string,
      {
        count: number
      }
    >[]
    tag_archives?: Record<
      string,
      {
        count: number
        percent: number
      }
    >[]
    tags?: {
      color: string
      id: string
      label: string
      tag_id: string
    }[]
  }
}

const BlogsSideMenu: React.FC<Props> = memo(({ data }) => {
  console.log(data)
  const bg = useColorModeValue('#F0F0F0', '#252829')
  const textColor = useColorModeValue('dark', 'white')
  const borderBottomColor = useColorModeValue('#D7D7D7', '#58688F')
  return (
    <Box w="full" bgColor={bg} h="full" boxSizing="border-box" p={3} pt={5}>
      {/* 月別アーカイブ */}
      {data.monthly_archives?.length > 0 && (
        <Box
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={2}
        >
          <Title>月別アーカイブ</Title>
          <Box>
            {data.monthly_archives.map((item, idx) => {
              const date = Object.keys(item)[0]
              const count = Object.values(item)[0]?.count ?? 0
              return (
                <Flex
                  key={idx}
                  my={2}
                  ml={2}
                  alignItems="center"
                  cursor="pointer"
                >
                  <Text mr={2} fontSize="xs" colorScheme={textColor}>
                    {dayjs(date).format('YYYY/M')}
                  </Text>
                  <Text
                    fontFamily="monospace"
                    fontSize="xs"
                    colorScheme={textColor}
                  >
                    ({count})
                  </Text>
                </Flex>
              )
            })}
          </Box>
        </Box>
      )}
      {/* タグ別アーカイブ */}
      {data.tag_archives?.length > 0 && data.tags?.length > 0 && (
        <Box
          borderBottomWidth="1px"
          borderBottomColor={borderBottomColor}
          pb={4}
          mt={6}
        >
          <Title>タグ別アーカイブ</Title>
          <Box>
            {data.tag_archives.map((item, index) => {
              const tagName = Object.keys(item)[0]
              const tagValue = Object.values(item)[0]
              const tagData = data.tags.find((tag) => tag.tag_id === tagName)
              const label = tagData.label
              const tagColor = tagData.color
              return (
                <Flex
                  key={index}
                  my={3}
                  ml={2}
                  alignItems="center"
                  cursor="pointer"
                >
                  <Box borderRadius="4px" mr={1} bgColor={`${tagColor}50`}>
                    <Text
                      fontSize="xx-small"
                      p={1}
                      colorScheme="dark"
                      fontWeight="bold"
                    >
                      {label}
                    </Text>
                  </Box>
                  <Text fontSize="xs" colorScheme={textColor}>
                    の記事 ...{' '}
                  </Text>
                  <Text fontSize="xs" colorScheme={textColor} ml={1}>
                    {tagValue.percent}% ({tagValue.count})
                  </Text>
                </Flex>
              )
            })}
          </Box>
        </Box>
      )}
      {/* タグ */}
      {data.tags?.length > 0 && (
        <Box pb={4} mt={6}>
          <Title>タグ</Title>
          <Box>
            {data.tags.map((item) => {
              const tagColor = item.color ?? '#FFFFFF'
              const label = item.label ?? ''
              return (
                <Flex
                  key={item.id}
                  my={3}
                  ml={2}
                  alignItems="center"
                  cursor="pointer"
                >
                  <Box
                    w="20px"
                    h="20px"
                    borderRadius="4px"
                    mr={2}
                    bgColor={tagColor}
                  ></Box>
                  <Text fontSize="xs" colorScheme={textColor}>
                    {label}
                  </Text>
                </Flex>
              )
            })}
          </Box>
        </Box>
      )}
    </Box>
  )
})

const Title = memo(({ children }) => {
  const textColor = useColorModeValue('dark', 'white')
  return (
    <Text as="h2" colorScheme={textColor} fontWeight="bold" fontSize="sm">
      {children}
    </Text>
  )
})

Title.displayName = 'Title'
BlogsSideMenu.displayName = 'BlogsSideMenu'

export default BlogsSideMenu
