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
import { useBlogContext } from '@/middleware/blog'

const BlogsContents = () => {
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
      {/* 記事 */}
      {/* ない時 */}
      <Text textAlign="center" fontSize="sm" my={8} color={noDataColor}>
        記事がありません
      </Text>
    </Box>
  )
}

export default BlogsContents
