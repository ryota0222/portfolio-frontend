import { memo } from 'react'
import Image from 'next/image'
import LoadingIcon from '@/assets/commons/loading.png'
import { Animation } from '@/components/atoms/LoadingIcon/module.style'

export const LoadingIconComponent = memo(() => {
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
