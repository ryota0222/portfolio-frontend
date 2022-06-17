import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface PathProps {
  searchWord?: string
  tag?: string
  time?: string
}

const useBlogPath = () => {
  const router = useRouter()
  const [path, setPath] = useState('/blog')
  const {
    query: { searchWord, tag, time },
  } = router
  useEffect(() => {
    let path = getPath({ searchWord, tag, time } as PathProps)
    setPath(path)
  }, [searchWord, tag, time])
  // pathの生成
  const getPath = ({ searchWord, tag, time }: PathProps) => {
    let path = '/blog'
    if (typeof tag === 'string') {
      path += `?tag=${tag}`
      if (typeof time === 'string') {
        path += `&time=${time}`
      }
      if (typeof searchWord === 'string') {
        path += `&searchWord=${searchWord}`
      }
    } else if (typeof time === 'string') {
      path += `?time=${time}`
      if (typeof searchWord === 'string') {
        path += `&searchWord=${searchWord}`
      }
    } else if (typeof searchWord === 'string') {
      path += `?searchWord=${searchWord}`
    }
    return path
  }
  // 検索の更新
  const setSearch = useCallback(
    (val?: string) => {
      if (typeof val === 'string' && val.trim().length > 0) {
        let path = getPath({ searchWord: val, tag, time } as PathProps)
        setPath(path)
        return path
      } else {
        let path = getPath({ searchWord: undefined, tag, time } as PathProps)
        setPath(path)
        return path
      }
    },
    [tag, time],
  )
  // 検索の更新
  const setTag = useCallback(
    (val?: string) => {
      if (typeof val === 'string' && val.trim().length > 0) {
        let path = getPath({ searchWord, tag: val, time } as PathProps)
        setPath(path)
        return path
      } else {
        let path = getPath({ searchWord, tag: undefined, time } as PathProps)
        setPath(path)
        return path
      }
    },
    [searchWord, time],
  )
  // 検索の更新
  const setTime = useCallback(
    (val?: string) => {
      if (typeof val === 'string' && val.trim().length > 0) {
        let path = getPath({ searchWord, tag, time: val } as PathProps)
        setPath(path)
        return path
      } else {
        let path = getPath({ searchWord, tag, time: undefined } as PathProps)
        setPath(path)
        return path
      }
    },
    [searchWord, tag],
  )
  return { path, setSearch, setTag, setTime }
}

export default useBlogPath
