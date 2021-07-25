import { memo, useState, useMemo, useEffect } from 'react'
import {
  useColorModeValue,
  Text,
  Flex,
  useBreakpointValue,
  Circle,
} from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { SvgIcon } from '@/components/atoms/SvgIcon'

export interface Props {
  /**
   * 合計のページ数
   */
  total: number
  /**
   * 現在のページ
   */
  currentPage: number
}

export const PageNation = memo(({ total, currentPage }: Props) => {
  const iconActiveColor = useColorModeValue('#404040', '#FBFBFB')
  const iconNonActiveColor = useColorModeValue('#E9E9E9', '#838383')
  const activeTextColor = useColorModeValue('white', 'black')
  const nonActiveTextColor = useColorModeValue('black', 'white')
  const fontSize = useBreakpointValue({ base: 'xs', sm: 'md' })
  const circleSize = useBreakpointValue({ base: '24px', sm: '32px' })
  const dispNumber = useBreakpointValue({ base: 4, sm: 6 })
  const prevColor = currentPage <= 1 ? iconNonActiveColor : iconActiveColor
  const nextColor = currentPage === total ? iconNonActiveColor : iconActiveColor
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
  console.log(dispNumber)
  const number = useMemo(() => {
    const _dispNumber = dispNumber ?? 4
    const halfSize = _dispNumber / 2
    console.log(`_dispNumber: ${_dispNumber}`)
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
      <Flex justifyContent="space-between">
        {/* 前へ */}
        <Circle cursor="pointer">
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
        <Circle>
          <IoIosArrowForward color={nextColor} />
        </Circle>
      </Flex>
    )
  }
})

PageNation.displayName = 'PageNation'
