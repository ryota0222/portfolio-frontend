import {
  useEffect,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'
import {
  Box,
  Text,
  useColorModeValue,
  Spacer,
  Flex,
  Spinner,
  SlideFade,
} from '@chakra-ui/react'
import { useUpdateEffect } from 'react-use'
import { NewsItem } from '@/apis/api'
import useDetectBottom from '@/hooks/useDetectBottom'
import useWindowHeight from '@/hooks/useWindowHeight'
import {
  NewsItemComponent,
  NewsItemText,
  NewsItemImage,
} from '@/styles/news.css'
import { formatDate } from '@/utils/dayjs'

interface Props {
  contents: NewsItem[]
  total: number
  setOffset: Dispatch<SetStateAction<number>>
}

const NewsTemplate: React.FC<Props> = ({ contents, total, setOffset }) => {
  const noDataColor = useColorModeValue('#999', '#ccc')
  const lineColor = useColorModeValue('#A0AEC0', 'white')
  const bgColor = useColorModeValue('#FBFBFB', '#404040')
  const textColor = useColorModeValue('#000000', '#FFFFFF')
  const { isBottom } = useDetectBottom()
  const { scrollHeight } = useWindowHeight()
  const [timeRef, setTimeRef] = useState<NodeJS.Timeout | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // 取得したコンテンツがtotalより大きいかどうか
  const isMaxContents = useMemo(() => {
    return total <= contents.length
  }, [total, contents])
  useUpdateEffect(() => {
    // ページの最下部にきて、かつコンテンツが全て取っていない場合offsetを更新
    if (isBottom && !isMaxContents && !isLoading) {
      setIsLoading(true)
      const rf = setTimeout(() => {
        setOffset(contents.length)
      }, 1000)
      if (rf) setTimeRef(rf)
    }
  }, [isMaxContents, isBottom, contents])
  // アンマウント時にtimeRefを解除
  useEffect(() => {
    return () => {
      if (timeRef) clearTimeout(timeRef)
    }
  }, [])
  // pendingの値が変わった際にローディングフラグを更新
  useEffect(() => {
    setIsLoading(false)
    setTimeRef(null)
  }, [contents])
  if (!contents.length) {
    // データがない場合
    return (
      <Flex minH={scrollHeight} flexDir="column" alignItems="center">
        <Spacer />
        <Text textAlign="center" fontSize="sm" my={8} color={noDataColor}>
          新しいお知らせがありません
        </Text>
        <Spacer />
      </Flex>
    )
  } else {
    // データがある場合
    return (
      <Flex
        minH={scrollHeight}
        ref={ref}
        alignItems="center"
        direction={'column'}
      >
        <Box maxW="500px" mt={8} px={4}>
          {contents.map((content, idx) => (
            <NewsItemComponent
              key={content.id}
              pl={8}
              pb={16}
              color={lineColor}
              is-top={Number(idx === 0)}
              is-end={Number(idx === total - 1)}
            >
              {/* 日付 */}
              <NewsItemText mb="8px">
                {formatDate(content.date, 'YYYY/MM/DD')}
              </NewsItemText>
              <br />
              {/* テキスト（あれば） */}
              {Boolean(content.text) && (
                <Text fontSize="0.9rem" mb={8} color={textColor}>
                  {content.text}
                </Text>
              )}
              {/* 画像（あれば） */}
              {Boolean(content.image) && (
                <NewsItemImage
                  src={`https:${content.image.url}`}
                  alt={content.image.alt}
                />
              )}
            </NewsItemComponent>
          ))}
        </Box>
        <Box
          position={'fixed'}
          bottom={0}
          left={0}
          background={`linear-gradient(180deg, ${bgColor}00 0%, ${bgColor} 60%)`}
          h={'150px'}
          w={'100vw'}
        ></Box>
        <Spacer />
        {/* ローディングアイコン */}
        <SlideFade in={isLoading}>
          <Box pb={10}>
            <Spinner />
          </Box>
        </SlideFade>
      </Flex>
    )
  }
}

export default NewsTemplate
