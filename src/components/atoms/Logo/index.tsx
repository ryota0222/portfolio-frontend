import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import darkImageData from '@/assets/commons/title/dark.png'
import lightImageData from '@/assets/commons/title/light.png'

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
  const isDark = useColorModeValue(false, true)
  if (isDark) {
    return (
      <Image
        src={darkImageData}
        alt="ロゴ"
        width={width ?? '75px'}
        height={height ?? '48px'}
      />
    )
  } else {
    return (
      <Image
        src={lightImageData}
        alt="ロゴ"
        width={width ?? '75px'}
        height={height ?? '48px'}
      />
    )
  }
})

Logo.displayName = 'Logo'
