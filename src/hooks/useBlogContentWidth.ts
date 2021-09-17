import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react'

const useBlogContentWidth = (): [
  number,
  number,
  Dispatch<SetStateAction<number>>,
  Dispatch<SetStateAction<number>>,
  number,
  number,
] => {
  const [w, setImageW] = useState(0)
  const [h, setImageH] = useState(0)
  const [clientW, setClientW] = useState(0)
  const _onResize = useCallback((e: Event) => {
    const ele = document.getElementById('blog-content')
    if (ele) {
      setClientW(ele.clientWidth)
    }
  }, [])
  useEffect(() => {
    const ele = document.getElementById('blog-content')
    if (ele) {
      setClientW(ele.clientWidth)
    }
    // イベントリスナーを登録
    window.addEventListener('resize', _onResize)
    // イベントリスナーを削除
    return () => window.removeEventListener('resize', _onResize)
  }, [])
  // 縦横比
  const ratio = useMemo(() => {
    return h / w
  }, [w, h])
  return [w, h, setImageW, setImageH, clientW, ratio]
}

export default useBlogContentWidth
