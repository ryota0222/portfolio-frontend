import { memo } from 'react'
import Image from 'next/image'
import LoadingImage from '@/assets/commons/loading.png'
import { Animation } from '@/components/atoms/LoadingIcon/module.style'

export const LoadingIcon = memo(() => {
  return (
    <Animation width="40px" height="40px">
      <Image
        src={LoadingImage}
        alt="ローディング"
        width={'40'}
        height={'40'}
        aria-hidden
      />
    </Animation>
  )
})
