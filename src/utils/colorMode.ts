import { Theme } from '@/types/interface'
/**
 * カラーモードの変更
 * @param {Theme} mode
 */
const setColorMode = (mode: Theme) => {
  // localStorageに保存
  localStorage.setItem('ryoTaPortfolioColorMode', mode)
}

/**
 * カラーモードの取得
 */
const getColorMode = () => {
  if (localStorage) {
    // localStorageに保存
    const mode = localStorage.getItem('ryoTaPortfolioColorMode')
    if (mode) return mode
  }
  return null
}

export default { setColorMode, getColorMode }
