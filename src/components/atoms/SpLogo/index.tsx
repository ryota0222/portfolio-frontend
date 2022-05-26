import { memo } from 'react'
import Image from 'next/image'

export interface Props {
  /**
   * 幅
   */
  width?: string
  /**
   * 高さ
   */
  height?: string
}

export const SpLogo = memo(({ width, height }: Props) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="ロゴ"
      width={width ?? '50px'}
      height={height ?? '50px'}
    />
  )
})

SpLogo.displayName = 'SpLogo'
