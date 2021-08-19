import { memo, useMemo } from 'react'
import {
  useColorModeValue,
  Text,
  useBreakpointValue,
  Circle,
  HStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export interface Props {
  /**
   * 合計のページ数
   */
  total: number
  /**
   * 現在のページ
   */
  currentPage: number
  /**
   * １つページを増やす処理
   */
  increment: () => void
  /**
   * １つページを戻す処理
   */
  decrement: () => void
  /**
   * 指定のページを設定する処理
   */
  set: (page: number) => void
}

export const PageNation = memo(
  ({ total, currentPage, increment, decrement, set }: Props) => {
    const router = useRouter()
    const { query } = router
    const iconActiveColor = useColorModeValue('#404040', '#FBFBFB')
    const iconNonActiveColor = useColorModeValue('#E9E9E9', '#838383')
    const activeTextColor = useColorModeValue('white', 'black')
    const nonActiveTextColor = useColorModeValue('black', 'white')
    const fontSize = useBreakpointValue({ base: 'xs', sm: 'md' })
    const circleSize = useBreakpointValue({ base: '24px', sm: '32px' })
    const dispNumber = useBreakpointValue({ base: 4, sm: 6 })
    const prevColor = currentPage <= 1 ? iconNonActiveColor : iconActiveColor
    const nextColor =
      currentPage === total ? iconNonActiveColor : iconActiveColor
    // 現在のパス
    const path = useMemo(() => {
      let tmp = '/blog'
      for (const property in query) {
        if (property === 'page') continue
        if (tmp === '/blog') {
          tmp += `?${property}=${query[property]}`
        } else {
          tmp += `&${property}=${query[property]}`
        }
      }
      return tmp
    }, [query])
    // 戻る処理
    const prev = () => {
      if (currentPage > 1) {
        decrement()
        const _path =
          path === '/blog'
            ? `${path}?page=${currentPage - 1}`
            : `${path}&page=${currentPage - 1}`
        router.push(_path)
      }
    }
    // すすむ処理
    const next = () => {
      if (currentPage < total) {
        increment()
        const _path =
          path === '/blog'
            ? `${path}?page=${currentPage + 1}`
            : `${path}&page=${currentPage + 1}`
        router.push(_path)
      }
    }
    // ページを選択した際の処理
    const select = (page: number) => {
      if (currentPage !== page) {
        set(page)
        const _path =
          path === '/blog' ? `${path}?page=${page}` : `${path}&page=${page}`
        router.push(_path)
      }
    }
    const currentTextColor = (page: number) => {
      if (currentPage === page) {
        return activeTextColor
      } else {
        return nonActiveTextColor
      }
    }
    const currentBgColor = (page: number) => {
      if (currentPage === page) {
        return nonActiveTextColor
      } else {
        return activeTextColor
      }
    }
    const number = useMemo(() => {
      const _dispNumber = dispNumber ?? 4
      const halfSize = _dispNumber / 2
      const arr = []
      // ページ数を省略する場合
      if (total > _dispNumber) {
        // 1 2 3 ... 13 14 15
        if (currentPage <= halfSize - 1 || currentPage > total - halfSize + 1) {
          for (let i = 1; i <= halfSize; i++) {
            arr.push(i)
          }
          arr.push('...')
          for (let i = total - halfSize + 2; i <= total; i++) {
            arr.push(i)
          }
          // 1 2 3 4 5... 15
        } else if (currentPage <= _dispNumber - 2) {
          for (let i = 1; i <= _dispNumber - 1; i++) {
            arr.push(i)
          }
          arr.push('...')
          arr.push(total)
          // 1 ... 11 12 13 14 15
        } else if (currentPage > total - _dispNumber + 2) {
          arr.push(1)
          arr.push('...')
          for (let i = total - _dispNumber + 2; i <= total; i++) {
            arr.push(i)
          }
          // 1 ... 7 8 9 ... 15
        } else {
          arr.push(1)
          arr.push('...')
          arr.push(currentPage - 1)
          arr.push(currentPage)
          arr.push(currentPage + 1)
          arr.push('...')
          arr.push(total)
        }
        // 1 2 3 4 5 などの場合
      } else {
        for (let i = 1; i <= total; i++) {
          arr.push(i)
        }
      }
      return arr
    }, [total, currentPage])
    if (Number(total) <= 1) {
      return <></>
    } else {
      return (
        <HStack spacing="24px">
          {/* 前へ */}
          <Circle cursor="pointer" onClick={prev}>
            <IoIosArrowBack color={prevColor} />
          </Circle>
          {number.map((item, key) => {
            if (typeof item === 'number') {
              return (
                <Circle
                  key={key}
                  bg={currentBgColor(item)}
                  width={circleSize}
                  height={circleSize}
                  cursor="pointer"
                  borderRadius={circleSize}
                  onClick={() => select(item)}
                >
                  <Text
                    color={currentTextColor(item)}
                    fontWeight="bold"
                    fontSize={fontSize}
                  >
                    {item}
                  </Text>
                </Circle>
              )
            } else {
              return (
                <Text
                  color={currentTextColor(item)}
                  fontWeight="bold"
                  key={`txt-${key}`}
                  fontSize={fontSize}
                  px={1}
                >
                  {item}
                </Text>
              )
            }
          })}
          {/* 次へ */}
          <Circle cursor="pointer" onClick={next}>
            <IoIosArrowForward color={nextColor} />
          </Circle>
        </HStack>
      )
    }
  },
)

PageNation.displayName = 'PageNation'
