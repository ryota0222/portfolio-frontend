import { useState, useEffect } from 'react'

type UseDetectBottom = () => {
  isBottom: boolean
}

const useDetectBottom: UseDetectBottom = () => {
  const [isBottom, setIsBottom] = useState(false)
  useEffect(() => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    )

    // 一番下までスクロールした時の数値を取得
    const pageMostBottom = scrollHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // iosはバウンドするので、無難に `>=` にする
      if (scrollTop >= pageMostBottom) {
        setIsBottom(true)
      } else {
        setIsBottom(false)
      }
    })
  }, [])
  return { isBottom }
}

export default useDetectBottom
