import { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useColorModeValue,
  Input,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  InputLeftElement,
  Button,
  InputRightElement,
  FlexboxProps,
  Fade,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import throttle from 'just-throttle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineTag } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { Counter } from '@/components/atoms/Counter'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import ArchiveItem from '@/components/molecules/ArchiveItem'
import { BlogCard } from '@/components/molecules/BlogCard/index'
import { PageNation } from '@/components/organisms/PageNation/index'
import useSp from '@/hooks/useSp'
import usePageNation from '@/middleware/blog'
import { BlogContents, BlogSetting } from '@/types/interface'

interface Props {
  data: BlogContents
  settings: BlogSetting
  title: string
  searchWord?: string
}

const BlogsContents: React.FC<Props> = ({
  data,
  title,
  searchWord,
  settings,
}) => {
  const [isSp] = useSp()
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
  const noDataColor = useColorModeValue('#999', '#ccc')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  const blogBgColor = useColorModeValue('#F1F4F4', '#303334')
  const spMenuBgColor = useColorModeValue('#F1F4F4', '#252829')
  const spMenuShadowColor = useColorModeValue('#e1e6e6', '#252829')
  const hoverBgColor = useColorModeValue('#e5e5e5', '#353839')
  const textColor = useColorModeValue('dark', 'white')
  const contentsDirection = useBreakpointValue<FlexboxProps['flexDirection']>({
    base: 'column',
    sm: 'row',
  })
  const blogContentWidth = useBreakpointValue({ base: '100%', md: 'auto' })
  const blogContentMargin = useBreakpointValue({
    base: '0 0 16px',
    md: '0 8px 16px',
  })
  const contentsFlex = useBreakpointValue({ base: 'space-between', md: 'auto' })
  useEffect(() => {
    if (typeof query.page === 'string') {
      set(Number(query.page))
    }
  }, [])
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
  const clearBlur = () => {
    if (isSpSearch) setIsSpSearch(false)
    if (isSpArchive) setIsSpArchive(false)
    if (isSpTag) setIsSpTag(false)
  }
  // enterを押した際に実行する
  const handleKeyPress = useCallback((e) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      handleSearch()
      if (isSp) setIsSpSearch(false)
    }
  }, [])
  useEffect(() => {
    if (searchWord) setSearch(searchWord)
  }, [searchWord])
  // 検索文字列の消去
  const clearSearch = (e) => {
    setSearch('')
    e.stopPropagation()
  }
  // 月で絞り込み
  const filterMonthlyArchive = (date) => {
    setIsSpArchive(false)
    router.push(`/blog?time=${dayjs(date).format('YYYY-MM')}`)
  }
  // タグで絞り込み
  const filterTagArchive = (tagId) => {
    setIsSpTag(false)
    router.push(`/blog?tag=${tagId}`)
  }
  // タグのラベル
  const tagLabel = useCallback(
    (id) => {
      if (settings) {
        const tags = settings.tags
        const data = tags.find((item) => item.id === id)
        return data.label
      }
      return ''
    },
    [settings],
  )
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
    <Box w="full" h="full" boxSizing="border-box" p={4} maxW="620px" m="auto">
      {/* 検索フォーム */}
      <Flex
        m="auto"
        mt={4}
        mb={10}
        justifyContent={contentsFlex}
        position="relative"
      >
        {/* SP */}
        {isSp && (
          <>
            {/* 検索 */}
            <SpMenuItem
              onClick={() => setIsSpSearch(!isSpSearch)}
              isVisible={isSpSearch}
            >
              <IoSearch color={inputColor} size="16px" />
              {/* 検索文字がない場合 */}
              {search.length === 0 && (
                <Text fontSize="sm" ml={1} color="#9A9A9A" lineHeight="14px">
                  search
                </Text>
              )}
              {/* ある場合 */}
              {search.length > 0 && (
                <>
                  <Text
                    fontSize="sm"
                    ml={1}
                    color={inputColor}
                    mr={1}
                    lineHeight="14px"
                    isTruncated
                  >
                    {search}
                  </Text>
                  <Button
                    backgroundColor="transparent"
                    height="24px"
                    width="24px"
                    p={0}
                    minW={0}
                    onClick={clearSearch}
                  >
                    <IoIosClose color={inputColor} size="24px" />
                  </Button>
                </>
              )}
            </SpMenuItem>
            {/* 検索フォーム */}
            <SpSearchForm
              value={search}
              setValue={setSearch}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              isVisible={isSpSearch}
            />
            {/* 月別アーカイブ */}
            <SpMenuItem
              onClick={() => setIsSpArchive(!isSpArchive)}
              isVisible={isSpArchive}
            >
              <SvgIcon
                color={inputColor}
                width={18}
                height={18}
                name="archive-solid"
              />
              {/* デフォルト */}
              {!query?.time && (
                <Text fontSize="small" ml={1} color="#9A9A9A" lineHeight="14px">
                  月別アーカイブ
                </Text>
              )}
              {/* 絞り込まれている場合 */}
              {query?.time && (
                <Text fontSize="small" ml={1} color="#9A9A9A" lineHeight="14px">
                  {dayjs(query.time as string).format('YYYY/MM')}
                </Text>
              )}
            </SpMenuItem>
            {/* 月別アーカイブモーダル */}
            <Modal
              isOpen={isSpArchive}
              onClose={() => setIsSpArchive(false)}
              motionPreset="scale"
            >
              <ModalOverlay bg="transparent" />
              <ModalContent
                bg={spMenuBgColor}
                width="80%"
                maxW="240px"
                // position="absolute"
                top="140px"
                // top="50px"
                m={0}
              >
                <Box p={2}>
                  {/* データがない場合 */}
                  {!settings?.monthly_archives?.length && (
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      my={8}
                      color={noDataColor}
                    >
                      アーカイブがありません
                    </Text>
                  )}
                  {/* データがある場合 */}
                  {settings?.monthly_archives?.length > 0 && (
                    <>
                      {settings.monthly_archives.map((item, idx) => {
                        const date = Object.keys(item)[0]
                        const count = Object.values(item)[0]?.count ?? 0
                        return (
                          <Box key={idx} my={2}>
                            <ArchiveItem
                              isActive={isArchiveActive(date)}
                              count={count}
                              onClick={throttle(
                                () => filterMonthlyArchive(date),
                                1000,
                                { trailing: false },
                              )}
                            >
                              <Text
                                fontSize="sm"
                                colorScheme={textColor}
                                fontWeight="bold"
                              >
                                {dayjs(date).format('YYYY/M')}
                              </Text>
                            </ArchiveItem>
                          </Box>
                        )
                      })}
                    </>
                  )}
                </Box>
              </ModalContent>
            </Modal>
            {/* タグ別アーカイブ */}
            <SpMenuItem
              onClick={() => setIsSpTag(!isSpTag)}
              isVisible={isSpTag}
            >
              <AiOutlineTag color={inputColor} size="16px" />
              {/* デフォルト */}
              {!query?.tag && (
                <Text fontSize="small" ml={1} color="#9A9A9A" lineHeight="14px">
                  タグ
                </Text>
              )}
              {/* 絞り込まれている場合 */}
              {query?.tag && (
                <Text
                  fontSize="small"
                  ml={1}
                  color="#9A9A9A"
                  lineHeight="14px"
                  isTruncated
                >
                  {tagLabel(query.tag)}
                </Text>
              )}
            </SpMenuItem>
            {/* タグ別アーカイブモーダル */}
            <Modal
              isOpen={isSpTag}
              onClose={() => setIsSpTag(false)}
              motionPreset="scale"
            >
              <ModalOverlay bg="transparent" />
              <ModalContent
                bg={spMenuBgColor}
                width="80%"
                maxW="240px"
                position="absolute"
                top="140px"
                right={4}
                m={0}
              >
                <Box p={2}>
                  {/* データがない場合 */}
                  {!settings?.tag_archives?.length && (
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      my={8}
                      color={noDataColor}
                    >
                      アーカイブがありません
                    </Text>
                  )}
                  {/* データがある場合 */}
                  {settings?.tag_archives?.length > 0 && (
                    <>
                      {settings.tag_archives.map((item, index) => {
                        const tagName = Object.keys(item)[0]
                        const tagValue = Object.values(item)[0]
                        const tagData = settings.tags.find(
                          (tag) => tag.tag_id === tagName,
                        )
                        const label = tagData.label
                        const tagColor = tagData.color
                        return (
                          <Box key={index} my={2}>
                            <ArchiveItem
                              isActive={isTagActive(tagData.id)}
                              count={tagValue.count}
                              onClick={throttle(
                                () => filterTagArchive(tagData.id),
                                1000,
                                { trailing: false },
                              )}
                            >
                              <Flex alignItems="center">
                                <Text
                                  fontSize="sm"
                                  color={tagColor}
                                  fontWeight="bold"
                                >
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
                    </>
                  )}
                </Box>
              </ModalContent>
            </Modal>
          </>
        )}
        {/* PC */}
        {!isSp && (
          // 検索フォーム
          <SearchForm
            value={search}
            setValue={setSearch}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        )}
      </Flex>
      {/* 記事一覧 */}
      {contents && contents.length > 0 ? (
        <>
          {/* 記事がある時 */}
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            flexDirection={contentsDirection}
          >
            {/* コンテンツ */}
            {contents.map((content) => {
              return (
                <Link href={`/blog/${content.id}`} key={content.id} passHref>
                  <Box
                    m={blogContentMargin}
                    backgroundColor={blogBgColor}
                    borderRadius={8}
                    position="relative"
                    w={blogContentWidth}
                  >
                    <BlogCard
                      imageData={`https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png`}
                      title={content.title}
                      tagName={content.tag.label}
                      tagBg={content.tag.color}
                      createdAt={content.created_at}
                      updatedAt={content.updated_at}
                    />
                  </Box>
                </Link>
              )
            })}
          </Flex>
          {/* ページネーション */}
          <Flex justifyContent="center" my={4} mt={8}>
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
      {/* スマホのメニューにタップされた際の画面全体のブラー */}
      {/* {isSpMenuClicked && ( */}
      <Fade in={isSpMenuClicked} unmountOnExit={true}>
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          left={0}
          top={0}
          backdropFilter="blur(8px)"
          onClick={clearBlur}
        ></Box>
      </Fade>
      {/* )} */}
    </Box>
  )
}

/**
 * デスクトップ用の検索フォーム
 */
const SearchForm = ({ value, setValue, onChange, onKeyPress }) => {
  const inputBg = useColorModeValue('#F0F0F0', '#252829')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  // 検索文字列の消去
  const clearSearch = () => {
    setValue('')
  }
  return (
    <InputGroup>
      <Input
        size="sm"
        bgColor="white"
        color="black"
        value={value}
        onChange={onChange}
        style={{ backgroundColor: inputBg, color: inputColor, borderRadius: 8 }}
        onKeyPress={onKeyPress}
      />
      <InputLeftElement height="32px">
        <FiSearch color={inputColor} size="16px" />
      </InputLeftElement>
      <InputRightElement height="32px">
        <Button
          backgroundColor="transparent"
          height="24px"
          width="24px"
          p={0}
          minW={0}
          onClick={clearSearch}
        >
          <IoIosClose color={inputColor} size="24px" />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

/**
 * スマホ用の検索フォーム
 */
const SpSearchForm = ({ value, setValue, onChange, onKeyPress, isVisible }) => {
  const inputBg = useColorModeValue('#F0F0F0', '#252829')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  // 検索文字列の消去
  const clearSearch = () => {
    setValue('')
  }
  return (
    <InputGroup
      w={isVisible ? '100%' : 0}
      zIndex={999999999}
      style={{
        position: 'absolute',
        left: '0%',
        top: 0,
        transition: 'all 0.4s',
        borderRadius: 4,
      }}
    >
      <Input
        padding={isVisible ? '0 40px' : 0}
        size="sm"
        bgColor="white"
        color="black"
        value={value}
        onChange={onChange}
        _focus={{ outline: 'none' }}
        style={{
          backgroundColor: inputBg,
          color: inputColor,
          borderRadius: 8,
          height: '36px',
          border: 'none',
        }}
        onKeyPress={onKeyPress}
      />
      <InputLeftElement height="32px" display={isVisible ? 'flex' : 'none'}>
        <FiSearch color={inputColor} size="16px" />
      </InputLeftElement>
      <InputRightElement height="32px" display={isVisible ? 'flex' : 'none'}>
        <Button
          backgroundColor="transparent"
          height="24px"
          width="24px"
          p={0}
          minW={0}
          onClick={clearSearch}
        >
          <IoIosClose color={inputColor} size="24px" />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

/**
 * スマホ用のメニュー
 */
const SpMenuItem = ({ children, onClick, isVisible }) => {
  const spMenuBgColor = useColorModeValue('#F1F4F4', '#252829')
  const spMenuShadowColor = useColorModeValue('#e1e6e6', '#252829')
  return (
    <Box
      zIndex={isVisible ? 999999999 : 'auto'}
      _active={{ transform: 'scale(0.9)' }}
    >
      <Flex
        minW="84px"
        maxW="128px"
        height="36px"
        backgroundColor={spMenuBgColor}
        borderRadius={4}
        p={2}
        alignItems="center"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: '80%',
          height: '100%',
          left: '50%',
          top: '4px',
          filter: 'blur(5px)',
          background: spMenuShadowColor,
          zIndex: -1,
          transform: 'translateX(-50%)',
        }}
        onClick={onClick}
      >
        {children}
      </Flex>
    </Box>
  )
}

export default BlogsContents
