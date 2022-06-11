import { memo, useCallback } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { GRADIENT } from '@/consts/style'

export const useBlogIndex = (currentIndex: number) => {
  const textColor = useColorModeValue('app-gray.900', 'app-gray.50')
  const getToggleCircleWidth = useCallback(
    (idx) => {
      if (idx <= currentIndex) {
        return '12px'
      } else {
        return '8px'
      }
    },
    [currentIndex],
  )
  const getCircleSx = useCallback(
    (idx) => {
      if (idx <= currentIndex) {
        return {
          filter: 'grayscale(0)',
        }
      } else {
        return {
          filter: 'grayscale(1)',
        }
      }
    },
    [currentIndex],
  )
  const getTextSx = useCallback(
    (idx) => {
      if (idx <= currentIndex) {
        return {
          opacity: 1,
        }
      } else {
        return {
          opacity: 0.72,
        }
      }
    },
    [currentIndex],
  )
  return {
    textColor,
    getToggleCircleWidth,
    getTextSx,
    getCircleSx,
  }
}
