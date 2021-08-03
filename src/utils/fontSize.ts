import { ROOT_FONT_SIZE } from '@/consts/config'
/**
 * フォントサイズの変更
 * @param {number} size
 */
const setFontSize = (size: number) => {
  // htmlの保存
  document.documentElement.style.fontSize = `${size > 0 ? size : 16}px`
  // localStorageに保存
  localStorage.setItem('ryoTaPortfolioFontSize', String(size))
}

/**
 * フォントサイズの取得
 */
const getFontSize = () => {
  // htmlから取得
  let fontSize = Number(document.documentElement.style.fontSize)
  // フォントが設定されていなければlocalStorageから取得
  if (!fontSize) {
    fontSize = Number(localStorage.getItem('ryoTaPortfolioFontSize'))
    // localStorageにfontSizeがなければ初期値を保存
    if (!fontSize) {
      fontSize = ROOT_FONT_SIZE
    }
  }
  return fontSize
}

/**
 * フォントサイズの割合の計算
 * @param {number} size
 */
const calculateFontSizePercentage = (size: number) => {
  // 8pxより小さい数値の場合終了
  if (size < 8) return 0
  return Math.round(((size - 8) * 25) / 4)
}

/**
 * 割合からフォントサイズを計算
 * @param {number} percentage
 */
const getFontSizeFromPercentage = (percentage: number) => {
  // 8pxより小さい数値の場合終了
  if (percentage < 0 || percentage > 100) return ROOT_FONT_SIZE
  return Math.round((percentage * 8) / 50 + 8)
}

export default {
  setFontSize,
  getFontSize,
  calculateFontSizePercentage,
  getFontSizeFromPercentage,
}
