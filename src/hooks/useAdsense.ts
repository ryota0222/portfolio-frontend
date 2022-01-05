import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const useAdsense = (): { asPath: string } => {
  const { asPath } = useRouter()

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [asPath])
  return { asPath }
}

export default useAdsense
