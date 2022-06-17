import { useMemo } from 'react'
import { CSSObject } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'

export const useBlogCard = () => {
  const { isDark } = useDesignSystem()
  const [isSp] = useSp()
  const startColor = useMemo(() => {
    return isDark ? 'app-gray.600' : 'app-gray.300'
  }, [isDark])
  const endColor = useMemo(() => {
    return isDark ? 'app-gray.500' : 'app-gray.500'
  }, [isDark])
  // スケルトンのカラー
  const skeltonColor = useMemo(() => {
    return {
      start: startColor,
      end: endColor,
    }
  }, [startColor, endColor])
  const wrapperFlexDir: 'row' | 'column' = useMemo(() => {
    return isSp ? 'row' : 'column'
  }, [isSp])
  const imageSize = useMemo(() => {
    return isSp
      ? {
          width: '100px',
          height: '75px',
        }
      : {
          width: '200px',
          height: '150px',
        }
  }, [isSp])
  const textWrapperStyle: CSSObject = useMemo(() => {
    if (isSp) {
      return {
        marginLeft: 2,
        flex: 1,
      }
    }
    return {
      marginTop: 2,
    }
  }, [isSp])
  const textMaxW = useMemo(() => {
    return isSp ? '100%' : '200px'
  }, [isSp])
  return {
    textWrapperStyle,
    textMaxW,
    imageSize,
    skeltonColor,
    wrapperFlexDir,
  }
}
