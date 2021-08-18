import { useState } from 'react'
import { useEffect } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useColorModeValue,
  Input,
  IconButton,
} from '@chakra-ui/react'
import router from 'next/router'
import { FiSearch } from 'react-icons/fi'
import { BlogCard } from '@/components/molecules/BlogCard/index'
import { PageNation } from '@/components/organisms/PageNation/index'
import usePageNation from '@/middleware/blog'

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
  title: string
  searchWord?: string
}

const BlogsContents: React.FC<Props> = ({ data, title, searchWord }) => {
  // pageNation
  const { state, increment, decrement, set } = usePageNation()
  const { contents, page } = data
  const textColor = useColorModeValue('dark', 'white')
  const noDataColor = useColorModeValue('#999', '#ccc')
  // 検索フォーム
  const [search, setSearch] = useState(searchWord ?? '')
  // 検索文字を入力
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  // 検索
  const handleSearch = () => {
    const e_data = encodeURI(search)
    router.push(`/blog?searchWord=${e_data}`)
  }
  useEffect(() => {
    if (searchWord) setSearch(searchWord)
  }, [searchWord])
  /**
   * 詳細ページに遷移
   * @param {string} コンテンツID
   */
  const detail = (id: string) => {
    console.log(id)
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
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              e.preventDefault()
              handleSearch()
            }
          }}
        />
        <IconButton
          aria-label="検索"
          icon={<FiSearch color="white" />}
          bgColor="#252829"
          size="sm"
          ml={2}
          onClick={handleSearch}
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
          {title}
        </Text>
      </Box>
      {contents && contents.length > 0 ? (
        <>
          {/* 記事がある時 */}
          <Flex flexWrap="wrap" justifyContent="space-between">
            {/* コンテンツ */}
            {contents.map((content) => {
              return (
                <Box
                  key={content.id}
                  m="0 8px 16px"
                  onClick={() => detail(content.id)}
                >
                  <BlogCard
                    imageData={`https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png`}
                    title={content.title}
                    tagName={content.tag.label}
                    tagBg={content.tag.color}
                  />
                </Box>
              )
            })}
          </Flex>
          {/* ページネーション */}
          <Flex justifyContent="center" my={4}>
            <PageNation
              total={page.total_count}
              currentPage={state.page}
              increment={increment}
              decrement={decrement}
              set={set}
            />
          </Flex>
        </>
      ) : (
        // 記事がない時
        <Text textAlign="center" fontSize="sm" my={8} color={noDataColor}>
          記事がありません
        </Text>
      )}
    </Box>
  )
}

export default BlogsContents
