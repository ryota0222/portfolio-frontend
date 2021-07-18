import { memo } from 'react'
import Image from 'next/image'
import imageData from '../../../../public/images/logo.svg'

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

export const Logo = memo(({ width, height }: Props) => {
  return (
    <Image
      src={imageData}
      alt="ロゴ"
      width={width ?? '50px'}
      height={height ?? '50px'}
    />
  )
})

Logo.displayName = 'Logo'
