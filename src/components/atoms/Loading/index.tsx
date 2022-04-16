import { memo, useMemo } from 'react'
import Image from 'next/image'
import LoadingIcon from '@/assets/commons/loading.png'
import { Animation } from '@/components/atoms/Loading/index.css'

export const Loading = memo(() => {
  return (
    <Animation width="40px" height="40px">
      <Image
        src={LoadingIcon}
        alt="ローディング"
        width={'40'}
        height={'40'}
        aria-hidden
      />
    </Animation>
  )
})
