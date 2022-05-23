import { useEffect } from 'react'
import { getFontSize, setFontSize } from '@/utils/fontSize'

const useFontSizeEffect = (): void => {
  useEffect(() => {
    // 文字サイズの取得
    const fontSize = getFontSize()
    // 文字サイズの保存
    setFontSize(fontSize)
  }, [])
}

export default useFontSizeEffect
