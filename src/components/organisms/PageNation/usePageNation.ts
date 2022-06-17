import { useCallback, useMemo } from 'react'
import {
  useColorModeValue,
  useBreakpointValue,
  useToken,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Props } from './type'

export const usePageNation = ({
  total,
  currentPage,
  increment,
  decrement,
  set,
}: Props) => {
  const router = useRouter()
  const { query } = router
  // style
  const [appGray900Color, appGray700Color, appGray50Color]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.900', 'app-gray.700', 'app-gray.50'],
  )
  const iconActiveColor = useColorModeValue(appGray700Color, 'white')
  const iconNotActiveColor = useColorModeValue(appGray50Color, appGray700Color)
  const activeTextColor = useColorModeValue('white', appGray900Color)
  const notActiveTextColor = useColorModeValue(appGray900Color, 'white')
  const fontSize = useBreakpointValue({ base: 'xs', sm: 'md' })
  const circleSize = useBreakpointValue({ base: '24px', sm: '32px' })
  const displayNumber = useBreakpointValue({ base: 4, sm: 6 })
  // 現在のテキストカラー
  const currentTextColor = useCallback(
    (page: number | string) => {
      if (currentPage === page) {
        return activeTextColor
      } else {
        return notActiveTextColor
      }
    },
    [currentPage, activeTextColor, notActiveTextColor],
  )
  // 現在の背景カラー
  const currentBgColor = useCallback(
    (page: number) => {
      if (currentPage === page) {
        return iconActiveColor
      } else {
        return iconNotActiveColor
      }
    },
    [currentPage, iconNotActiveColor, iconActiveColor],
  )
  // 現在のパス
  const currentPath = useMemo(() => {
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
  // 前に戻るアイコンのカラー
  const prevIconColor = currentPage <= 1 ? iconNotActiveColor : iconActiveColor
  // 次に晋アイコンのカラー
  const nextIconColor =
    currentPage === total ? iconNotActiveColor : iconActiveColor
  // 戻る処理
  const handlePrev = useCallback(() => {
    if (currentPage > 1) {
      decrement()
      const _path =
        currentPath === '/blog'
          ? `${currentPath}?page=${currentPage - 1}`
          : `${currentPath}&page=${currentPage - 1}`
      router.push(_path)
    }
  }, [decrement, currentPage, currentPath, router])
  // すすむ処理
  const handleNext = useCallback(() => {
    if (currentPage < total) {
      increment()
      const _path =
        currentPath === '/blog'
          ? `${currentPath}?page=${currentPage + 1}`
          : `${currentPath}&page=${currentPage + 1}`
      router.push(_path)
    }
  }, [currentPage, increment, total, currentPath, router])
  // ページを選択した際の処理
  const handleSelect = useCallback(
    (page: number) => {
      if (currentPage !== page) {
        set(page)
        const _path =
          currentPath === '/blog'
            ? `${currentPath}?page=${page}`
            : `${currentPath}&page=${page}`
        router.push(_path)
      }
    },
    [currentPage, set, currentPath, router],
  )
  // 表示するリスト
  const displayList = useMemo(() => {
    const _displayNumber = displayNumber ?? 4
    const halfSize = _displayNumber / 2
    const arr: (number | string)[] = []
    // ページ数を省略する場合
    if (total > _displayNumber) {
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
      } else if (currentPage <= _displayNumber - 2) {
        for (let i = 1; i <= _displayNumber - 1; i++) {
          arr.push(i)
        }
        arr.push('...')
        arr.push(total)
        // 1 ... 11 12 13 14 15
      } else if (currentPage > total - _displayNumber + 2) {
        arr.push(1)
        arr.push('...')
        for (let i = total - _displayNumber + 2; i <= total; i++) {
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
  }, [total, currentPage, displayNumber])
  return {
    fontSize,
    circleSize,
    prevIconColor,
    nextIconColor,
    displayList,
    currentTextColor,
    currentBgColor,
    handlePrev,
    handleNext,
    handleSelect,
  }
}
