import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
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
  Fade,
  useToken,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiOutlineTag } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { BlogCategory } from '@/components/atoms/BlogCategory'
import { FloatingButton } from '@/components/atoms/FloatingButton'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { BlogMenuItem } from '@/components/molecules/BlogMenuItem'
import { FULL_HEIGHT } from '@/consts/style'
import useBlogPath from '@/hooks/blogs/useBlogPath'
import useDesignSystem from '@/hooks/useDesignSystem'
import { BlogSetting } from '@/types/interface'
import { formatDate } from '@/utils/dayjs'
import throttle from '@/utils/throttle'

interface Props {
  search: string
  settings: BlogSetting
  clearSearch: (e: any) => void
  setSearchWord: Dispatch<SetStateAction<string>>
  handleKeyPress: (e: any) => void
  clearTime: (e: any) => void
  filterMonthlyArchive: (date: any) => void
  filterTagArchive: (tagId: any) => void
  isArchiveActive: (date: any) => boolean
  setTag: (val?: string) => string
}

const SpBlogsContents: React.FC<Props> = ({
  children,
  search,
  settings,
  clearSearch,
  setSearchWord,
  handleKeyPress,
  clearTime,
  filterMonthlyArchive,
  filterTagArchive,
  isArchiveActive,
  setTag,
}) => {
  const router = useRouter()
  const { query } = router
  // フラグ
  const [isSpSearch, setIsSpSearch] = useState(false)
  const [isSpArchive, setIsSpArchive] = useState(false)
  const [isSpTag, setIsSpTag] = useState(false)
  // スタイル
  const { NO_DATA_COLOR, TEXT_COLOR, isDark } = useDesignSystem()
  const [appGray500Color, appWhiteColor]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.500', 'white'],
  )
  const inputColor = useMemo(() => {
    return isDark ? appWhiteColor : appGray500Color
  }, [appGray500Color, appWhiteColor, isDark])
  const spMenuBgColor = useColorModeValue('#F1F4F4', '#252829')
  const contentsFlex = useBreakpointValue({ base: 'space-between', md: 'auto' })
  // メニューをクリックしたかどうかのフラグ
  const isSpMenuClicked = useMemo(() => {
    return isSpSearch || isSpArchive || isSpTag
  }, [isSpArchive, isSpSearch, isSpTag])
  // ブラーを解除
  const clearBlur = () => {
    if (isSpSearch) setIsSpSearch(false)
    if (isSpArchive) setIsSpArchive(false)
    if (isSpTag) setIsSpTag(false)
  }
  // タグがアクティブかどうか
  const isTagActive = useCallback(
    (tagId) => {
      return tagId === query?.tag
    },
    [query],
  )
  // タグの絞り込みの消去
  const clearTag = (e) => {
    setIsSpTag(false)
    e.stopPropagation()
    const _path = setTag()
    router.push(_path)
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
  return (
    <>
      {/* 検索フォーム */}
      <Flex
        m="auto"
        mt={4}
        mb={10}
        justifyContent={contentsFlex}
        position="relative"
        flex={1}
      >
        {/* 検索 */}
        <SpMenuItem
          onClick={() => setIsSpSearch(!isSpSearch)}
          isVisible={isSpSearch}
        >
          <IoSearch color={inputColor} size="16px" />
          {/* 検索文字がない場合 */}
          {search.length === 0 && (
            <Text fontSize="sm" ml={1} color="app-gray.600" lineHeight="14px">
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
                maxW="12vw"
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
            <Text
              fontSize="small"
              ml={1}
              color="app-gray.600"
              lineHeight="14px"
            >
              月別アーカイブ
            </Text>
          )}
          {/* 絞り込まれている場合 */}
          {query?.time && (
            <>
              <Text
                fontSize="small"
                ml={1}
                color="app-gray.600"
                lineHeight="14px"
                isTruncated
                maxW="12vw"
              >
                {formatDate(query.time as string, 'YYYY/MM')}
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
            <Box p={2} maxH="50vh" overflowY="scroll">
              {/* データがない場合 */}
              {!settings?.monthly_archives?.length && (
                <Text
                  textAlign="center"
                  fontSize="sm"
                  my={8}
                  color={NO_DATA_COLOR}
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
                      <Box
                        key={idx}
                        my={2}
                        onClick={throttle(() => filterMonthlyArchive(date))}
                      >
                        <BlogMenuItem
                          selected={isArchiveActive(date)}
                          file={count}
                          loading={false}
                        >
                          <Text
                            fontSize="sm"
                            colorScheme={TEXT_COLOR}
                            fontWeight="bold"
                          >
                            {formatDate(date, 'YYYY/M')}
                          </Text>
                        </BlogMenuItem>
                      </Box>
                    )
                  })}
                </>
              )}
            </Box>
          </ModalContent>
        </Modal>
        {/* カテゴリ別アーカイブ */}
        <SpMenuItem onClick={() => setIsSpTag(!isSpTag)} isVisible={isSpTag}>
          <AiOutlineTag color={inputColor} size="16px" />
          {/* デフォルト */}
          {!query?.tag && (
            <Text
              fontSize="small"
              ml={1}
              color="app-gray.600"
              lineHeight="14px"
            >
              タグ
            </Text>
          )}
          {/* 絞り込まれている場合 */}
          {query?.tag && (
            <>
              <Text
                fontSize="small"
                ml={1}
                color="app-gray.600"
                lineHeight="14px"
                isTruncated
                maxW="12vw"
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
        {/* カテゴリ別アーカイブモーダル */}
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
            <Box p={2} maxH="50vh" overflowY="scroll">
              {/* データがない場合 */}
              {!settings?.tag_archives?.length && (
                <Text
                  textAlign="center"
                  fontSize="sm"
                  my={8}
                  color={NO_DATA_COLOR}
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
                    const icon = tagData.icon
                    return (
                      <Box
                        key={index}
                        my={2}
                        onClick={throttle(() => filterTagArchive(tagData.id))}
                      >
                        <BlogMenuItem
                          selected={isTagActive(tagData.id)}
                          file={tagValue.count}
                          folder={tagValue?.series?.length}
                          loading={false}
                        >
                          <BlogCategory icon={icon} label={label} size="sm" />
                        </BlogMenuItem>
                      </Box>
                    )
                  })}
                </>
              )}
            </Box>
          </ModalContent>
        </Modal>
      </Flex>
      {/* **以下は共通** */}
      {/* タイトル（あれば） */}
      {/* 記事一覧 */}
      {children}
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
    </>
  )
}

export default SpBlogsContents

/**
 * スマホ用のメニュー
 */
const SpMenuItem = ({ children, onClick, isVisible }) => {
  return (
    <FloatingButton
      zIndex={isVisible ? 999999999 : 'auto'}
      onClick={onClick}
      processing={isVisible}
    >
      {children}
    </FloatingButton>
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
  const inputBg = useColorModeValue('app-gray.200', 'app-gray.800')
  const inputColor = useColorModeValue('app-gray.500', 'white')
  const inputTextColor = useColorModeValue('app-gray.600', 'white')
  const spMenuShadowColor = useColorModeValue('app-gray.300', 'app-gray.800')
  const inputBtnColor = useColorModeValue('app-gray.800', 'app-gray.200')
  const inputRef = useRef(null)
  const router = useRouter()
  const {
    query: { searchWord },
  } = router
  const { setSearch } = useBlogPath()
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
