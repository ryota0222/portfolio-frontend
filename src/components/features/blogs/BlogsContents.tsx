import { useCallback, useMemo, useState, useEffect } from 'react'
import { Box, Flex, Text, Fade } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ContentsList from '@/components/features/blogs/ContentsList'
import DeskTopBlogsContents from '@/components/features/blogs/DeskTopBlogsContents'
import SpBlogsContents from '@/components/features/blogs/SpBlogsContents'
import { PageNation } from '@/components/organisms/PageNation/index'
import { FULL_HEIGHT } from '@/consts/style'
import useBlogPath from '@/hooks/blogs/useBlogPath'
import usePageNation from '@/hooks/usePageNation'
import useSp from '@/hooks/useSp'
import { BlogContents, BlogSetting } from '@/types/interface'
import { formatDate } from '@/utils/dayjs'

interface Props {
  data: BlogContents
  settings: BlogSetting
  title: string
  searchWord?: string
}

const BlogsContents: React.FC<Props> = ({ data, searchWord, settings }) => {
  const [isSp] = useSp()
  const { path, setSearch, setTag, setTime } = useBlogPath()
  const [isSpSearch, setIsSpSearch] = useState(false)
  const [isSpArchive, setIsSpArchive] = useState(false)
  const [isSpTag, setIsSpTag] = useState(false)
  const isSpMenuClicked = useMemo(() => {
    return isSpSearch || isSpArchive || isSpTag
  }, [isSpArchive, isSpSearch, isSpTag])
  // pageNation
  const { state, increment, decrement, set } = usePageNation()
  const router = useRouter()
  const { query } = router
  const { contents, page } = data
  useEffect(() => {
    if (typeof query.page === 'string') {
      set(Number(query.page))
    }
  }, [])
  // 検索フォーム
  const [search, setSearchWord] = useState(searchWord ?? '')
  const clearBlur = () => {
    if (isSpSearch) setIsSpSearch(false)
    if (isSpArchive) setIsSpArchive(false)
    if (isSpTag) setIsSpTag(false)
  }
  // 検索
  const handleSearch = () => {
    const e_data = encodeURI(search)
    const _path = setSearch(e_data)
    router.push(_path)
  }
  // 検索文字列の消去
  const clearSearch = (e) => {
    setSearchWord('')
    e.stopPropagation()
    const _path = setSearch()
    router.push(_path)
  }
  // 検索文字を入力
  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }
  // enterを押した際に実行する
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key == 'Enter') {
        e.preventDefault()
        handleSearch()
        if (isSp) setIsSpSearch(false)
      }
    },
    [search],
  )
  useEffect(() => {
    if (searchWord) setSearchWord(searchWord)
  }, [searchWord])
  // 時間の絞り込みの消去
  const clearTime = (e) => {
    setIsSpArchive(false)
    e.stopPropagation()
    const _path = setTime()
    router.push(_path)
  }
  // 月で絞り込み
  const filterMonthlyArchive = (date) => {
    setIsSpArchive(false)
    const path = setTime(formatDate(date, 'YYYY-MM'))
    router.push(path)
  }
  // タグで絞り込み
  const filterTagArchive = (tagId) => {
    setIsSpTag(false)
    const path = setTag(tagId)
    router.push(path)
  }
  // 月別アーカイブがアクティブかどうか
  const isArchiveActive = useCallback(
    (date) => {
      return date === query?.time
    },
    [query],
  )
  return (
    <Box w="full" h="full" boxSizing="border-box" p={4} maxW="800px" m="auto">
      {/* SPのみ表示 */}
      {isSp ? (
        // SP検索
        <SpBlogsContents
          search={search}
          settings={settings}
          clearSearch={clearSearch}
          setSearchWord={setSearchWord}
          handleKeyPress={handleKeyPress}
          clearTime={clearTime}
          filterMonthlyArchive={filterMonthlyArchive}
          filterTagArchive={filterTagArchive}
          isArchiveActive={isArchiveActive}
          setTag={setTag}
        >
          <>
            {/* タイトル（あれば） */}
            {query?.title && (
              <Text fontWeight="bold" mb={4} textAlign="center" as="h3">
                {query.title}
              </Text>
            )}
            {/* 記事一覧 */}
            {contents && <ContentsList contents={contents} path={path} />}
          </>
        </SpBlogsContents>
      ) : (
        <DeskTopBlogsContents
          search={search}
          handleSearchChange={handleSearchChange}
          handleKeyPress={handleKeyPress}
          clearSearch={clearSearch}
        >
          <>
            {/* タイトル（あれば） */}
            {query?.title && (
              <Text fontWeight="bold" mb={4} textAlign="center" as="h3">
                {query.title}
              </Text>
            )}
            {/* 記事一覧 */}
            {contents && <ContentsList contents={contents} path={path} />}
          </>
        </DeskTopBlogsContents>
      )}
      {/* ページネーション */}
      {page && (
        <Flex justifyContent="center" my={8}>
          <PageNation
            total={page.total_count}
            currentPage={state.page}
            increment={increment}
            decrement={decrement}
            set={set}
          />
        </Flex>
      )}
      {/* スマホのメニューにタップされた際の画面全体のブラー */}
      <Fade in={isSpMenuClicked} unmountOnExit={true}>
        <Box
          w="100vw"
          h={FULL_HEIGHT}
          position="fixed"
          left={0}
          top={0}
          backdropFilter="blur(8px)"
          onClick={clearBlur}
        ></Box>
      </Fade>
    </Box>
  )
}

export default BlogsContents
