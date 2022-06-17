import { useCallback } from 'react'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Theme } from '@/types/interface'
import {
  getFontSizeFromPercentage,
  setFontSize,
  getFontSize,
  calculateFontSizePercentage,
} from '@/utils/fontSize'

export const useMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  // style
  const { TEXT_COLOR: textColor } = useDesignSystem()
  const neumorphicShadow = useColorModeValue(
    '-2px -2px 4px #FFFFFF80, 2px 2px 4px rgba(0, 0, 0, 0.05)',
    '-2px -2px 4px rgba(135, 135, 135, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25)',
  )
  const panelBgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.72)',
    'rgba(34, 34, 34, 0.72)',
  )
  const sectionBgColor = useColorModeValue('app-gray.100', 'app-gray.800')
  // 文字サイズの変更
  const handleChangeFontSize = useCallback((e) => {
    // 文字サイズの取得
    const fontSize = getFontSizeFromPercentage(e)
    // 保存
    setFontSize(fontSize)
  }, [])
  // 初期値のパーセントの取得
  const getDefaultValue = useCallback(() => {
    const fontSize = getFontSize()
    return calculateFontSizePercentage(fontSize)
  }, [])
  // カラーモード変更
  const handleColorMode = useCallback(
    (type: Theme) => {
      if (colorMode !== type) {
        toggleColorMode()
      }
    },
    [colorMode, toggleColorMode],
  )
  return {
    textColor,
    neumorphicShadow,
    panelBgColor,
    sectionBgColor,
    handleChangeFontSize,
    getDefaultValue,
    handleColorMode,
  }
}
