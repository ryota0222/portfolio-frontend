import { useCallback, useMemo, useState, useRef } from 'react'
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
import { MdQueryBuilder } from 'react-icons/md'
import { Counter } from '@/components/atoms/Counter'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import ArchiveItem from '@/components/molecules/ArchiveItem'
import { BlogCard } from '@/components/molecules/BlogCard/index'
import { PageNation } from '@/components/organisms/PageNation/index'
import useBlogPath from '@/hooks/useBlogPath'
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
  const noDataColor = useColorModeValue('#999', '#ccc')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  const blogBgColor = useColorModeValue('#F1F4F4', '#303334')
  const spMenuBgColor = useColorModeValue('#F1F4F4', '#252829')
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
  const [search, setSearchWord] = useState(searchWord ?? '')
  // 検索文字を入力
  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }
  // 検索
  const handleSearch = () => {
    const e_data = encodeURI(search)
    const _path = setSearch(e_data)
    router.push(_path)
  }
  const clearBlur = () => {
    if (isSpSearch) setIsSpSearch(false)
    if (isSpArchive) setIsSpArchive(false)
    if (isSpTag) setIsSpTag(false)
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
  // 検索文字列の消去
  const clearSearch = (e) => {
    setSearchWord('')
    e.stopPropagation()
    const _path = setSearch()
    router.push(_path)
  }
  // 時間の絞り込みの消去
  const clearTime = (e) => {
    setIsSpArchive(false)
    e.stopPropagation()
    const _path = setTime()
    router.push(_path)
  }
  // タグの絞り込みの消去
  const clearTag = (e) => {
    setIsSpTag(false)
    e.stopPropagation()
    const _path = setTag()
    router.push(_path)
  }
  // 月で絞り込み
  const filterMonthlyArchive = (date) => {
    setIsSpArchive(false)
    const path = setTime(dayjs(date).format('YYYY-MM'))
    router.push(path)
  }
  // タグで絞り込み
  const filterTagArchive = (tagId) => {
    setIsSpTag(false)
    const path = setTag(tagId)
    router.push(path)
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
        {/* SPのみ表示 */}
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
              setValue={setSearchWord}
              onKeyPress={handleKeyPress}
              isVisible={isSpSearch}
              toggleVisible={() => setIsSpSearch(!isSpSearch)}
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
                <>
                  <Text
                    fontSize="small"
                    ml={1}
                    color="#9A9A9A"
                    lineHeight="14px"
                  >
                    {dayjs(query.time as string).format('YYYY/MM')}
                  </Text>
                  <Button
                    backgroundColor="transparent"
                    height="24px"
                    width="24px"
                    p={0}
                    minW={0}
                    onClick={clearTime}
                  >
                    <IoIosClose color={inputColor} size="24px" />
                  </Button>
                </>
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
                <>
                  <Text
                    fontSize="small"
                    ml={1}
                    color="#9A9A9A"
                    lineHeight="14px"
                    isTruncated
                  >
                    {tagLabel(query.tag)}
                  </Text>
                  <Button
                    backgroundColor="transparent"
                    height="24px"
                    width="24px"
                    p={0}
                    minW={0}
                    onClick={clearTag}
                  >
                    <IoIosClose color={inputColor} size="24px" />
                  </Button>
                </>
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
        {/* PCのみ表示 */}
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
                      imageData={`https:${content.image}`}
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
        <Text
          textAlign="center"
          fontSize="sm"
          my={8}
          mt={16}
          color={noDataColor}
        >
          記事がありません
        </Text>
      )}
      {/* スマホのメニューにタップされた際の画面全体のブラー */}
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
    </Box>
  )
}

/**
 * デスクトップ用の検索フォーム
 */
const SearchForm = ({ value, setValue, onChange, onKeyPress }) => {
  const inputBg = useColorModeValue('#F0F0F0', '#252829')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  const inputTextColor = useColorModeValue('#666', 'white')
  // 検索文字列の消去
  const clearSearch = () => {
    setValue('')
  }
  return (
    <InputGroup>
      <Input
        size="sm"
        bgColor="white"
        color={inputTextColor}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        style={{ backgroundColor: inputBg, borderRadius: 8 }}
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
const SpSearchForm = ({
  value,
  setValue,
  onKeyPress,
  isVisible,
  toggleVisible,
}) => {
  const inputBg = useColorModeValue('#F1F4F4', '#252829')
  const inputColor = useColorModeValue('#B9B9B9', 'white')
  const inputTextColor = useColorModeValue('#666', 'white')
  const spMenuShadowColor = useColorModeValue('#e1e6e6', '#252829')
  const inputBtnColor = useColorModeValue('#252829', '#F0F0F0')
  const inputRef = useRef(null)
  const router = useRouter()
  const {
    query: { searchWord },
  } = router
  const { path, setSearch } = useBlogPath()
  // 検索文字を入力
  const handleSearchChange = (event) => {
    setValue(event.target.value)
  }
  // 検索文字列の消去
  const clearSearch = () => {
    setValue('')
    const _path = setSearch('')
    router.push(_path)
  }
  // 検索
  const search = (val?: string) => {
    const _path = setSearch(val)
    router.push(_path)
  }
  // 検索ボタンをおす
  const onSearchPress = (val?: string) => {
    search(val)
    toggleVisible()
  }
  // side effect
  useEffect(() => {
    // フォームが非表示になった場合
    if (!isVisible) {
      // queryの検索文字と実際の入力値が異なる場合検索をし直す
      if (value !== searchWord) {
        search(value)
      }
    }
    // フォームが表示された時フォーカスを当てる
    if (isVisible && inputRef) {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [isVisible])
  return (
    <Box
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
      <InputGroup
        _before={{
          content: '""',
          position: 'absolute',
          width: '90%',
          height: '100%',
          left: '50%',
          top: '4px',
          filter: 'blur(5px)',
          background: spMenuShadowColor,
          zIndex: -1,
          transform: 'translateX(-50%)',
        }}
      >
        <Input
          padding={isVisible ? '0 40px' : 0}
          ref={inputRef}
          size="sm"
          bgColor="white"
          value={value}
          onChange={handleSearchChange}
          _focus={{ outline: 'none' }}
          style={{
            backgroundColor: inputBg,
            color: inputTextColor,
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
      <Flex justifyContent="flex-end" mt={4}>
        <Button
          backgroundColor={inputBtnColor}
          display={isVisible ? 'inline-block' : 'none'}
          color={inputBg}
          height="32px"
          fontSize="0.8rem"
          _active={{}}
          _hover={{}}
          onClick={() => onSearchPress(value)}
        >
          検索
        </Button>
      </Flex>
    </Box>
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
