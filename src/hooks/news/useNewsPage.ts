import { useState, useEffect, useMemo } from 'react'
import * as apis from '@/apis/api'

type UseNewsPage = (data: apis.InlineResponse2005) => {
  contents: apis.NewsItem[] | undefined
  isLoadingWhileNoData: boolean
  totalNumber: number
}

const useNewsPage: UseNewsPage = (data) => {
  // コンテンツ
  const [contents, setContents] = useState<apis.NewsItem[] | undefined>(
    undefined,
  )
  useEffect(() => {
    if (data && data.success) {
      setContents((prev) => {
        // typeチェック
        if (typeof prev === 'object') {
          // 同じIDがあれば無視
          const findSameContents = data.data.contents.filter((c) => {
            let flg = false
            if (contents.find((content) => content.id === c.id)) {
              flg = true
            }
            return flg
          })
          if (findSameContents.length) return prev
          return prev.concat(data.data.contents)
        } else {
          return data.data.contents
        }
      })
    }
  }, [data])
  // データなしの状態でのローディング中フラグ
  const isLoadingWhileNoData = useMemo(() => {
    return !data && !contents
  }, [data, contents])
  // totalの数
  const totalNumber = useMemo(() => {
    if (data) {
      return data.data?.total || 0
    }
    return 0
  }, [data])
  return { contents, isLoadingWhileNoData, totalNumber }
}

export default useNewsPage
