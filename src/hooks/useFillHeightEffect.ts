import { useEffect } from 'react'

/**
 * 高さの保存
 */
const setFillHeight = () => {
  if (window) {
    // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
    let vh = window.innerHeight * 0.01
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }
}

const useFillHeightEffect = (): void => {
  useEffect(() => {
    // vhの値の保存
    setFillHeight()
    // 回転時、もしくは幅の変更時イベント発火
    if (window) {
      window.addEventListener('orientationchange', setFillHeight)
      window.addEventListener('resize', setFillHeight)
    }
    ;() => {
      // イベントの削除
      window.removeEventListener('orientationchange', setFillHeight)
      window.removeEventListener('resize', setFillHeight)
    }
  }, [])
}

export default useFillHeightEffect
