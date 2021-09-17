import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react'

const useBlogContentScroll = (): [number, Dispatch<SetStateAction<number>>] => {
  const [positions, setPositions] = useState([])
  const [index, setIndex] = useState(0)
  const _onScroll = useCallback(() => {
    if (positions.length === 0) return
    const toc = document.querySelectorAll('.toc')
    const wrapper = document.getElementById('blog-container')
    const h = Math.ceil(wrapper.getBoundingClientRect().height)
    const scrollTop =
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const scroll =
      wrapper.offsetTop + scrollTop + document.documentElement.clientHeight
    toc.forEach((item, i) => {
      const { startPosition, endPosition } = positions[i]
      // console.log(`start: ${startPosition}, end: ${endPosition}`)
      if (scroll > wrapper.scrollHeight) {
        setIndex(toc.length - 1)
      } else if (scrollTop >= startPosition && scrollTop < endPosition) {
        setIndex(i)
      }
    })
  }, [])
  useEffect(() => {
    const wrapper = document.getElementById('blog-container')
    const contents = document.querySelectorAll('.content')
    const contentsPosition = []
    contents.forEach((content, i) => {
      const startPosition =
        content.getBoundingClientRect().top -
        wrapper.getBoundingClientRect().top +
        wrapper.scrollTop
      const endPosition = contents.item(i + 1)
        ? contents.item(i + 1).getBoundingClientRect().top -
          wrapper.getBoundingClientRect().top +
          wrapper.scrollTop
        : wrapper.scrollHeight
      contentsPosition.push({ startPosition, endPosition })
    })
    setPositions(contentsPosition)
    // イベントリスナーを登録
    window.addEventListener('scroll', _onScroll)
    _onScroll()
    // イベントリスナーを削除
    return () => window.removeEventListener('scroll', _onScroll)
  }, [])
  return [index, setIndex]
}

export default useBlogContentScroll
