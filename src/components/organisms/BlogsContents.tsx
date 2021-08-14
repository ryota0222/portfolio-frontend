import { useState } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useColorModeValue,
  Input,
  IconButton,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { PageNation } from '@/components/organisms/PageNation/index'
import { useBlogContext } from '@/middleware/blog'

interface Props {
  data: {
    contents: {
      created_at: string
      id: string
      image: string
      tag: {
        color: string
        id: string
        label: string
        tag_id: string
      }
      title: string
    }[]
    page: {
      current: number
      total_count: number
    }
  }
}

const BlogsContents: React.FC<Props> = ({ data }) => {
  const { contents, page } = data
  const textColor = useColorModeValue('dark', 'white')
  const noDataColor = useColorModeValue('#999', '#ccc')
  const { tag, searchWord } = useBlogContext()
  // 検索フォーム
  const [search, setSearch] = useState(searchWord)
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <Box w="full" h="full" boxSizing="border-box" p={4} maxW="500px" m="auto">
      {/* 検索フォーム */}
      <Flex m="auto" mt={4}>
        <Input
          size="sm"
          bgColor="white"
          color="black"
          value={search}
          onChange={handleSearchChange}
        />
        <IconButton
          aria-label="検索"
          icon={<FiSearch color="white" />}
          bgColor="#252829"
          size="sm"
          ml={2}
        />
      </Flex>
      {/* タイトル */}
      <Box h="32px" my={8}>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
          isTruncated
          color={textColor}
        >
          {tag}
        </Text>
      </Box>
      {contents && contents.length > 0 ? (
        // 記事がある時
        <PageNation total={page.total_count} currentPage={page.current} />
      ) : (
        // ない時
        <Text textAlign="center" fontSize="sm" my={8} color={noDataColor}>
          記事がありません
        </Text>
      )}
    </Box>
  )
}

export default BlogsContents
