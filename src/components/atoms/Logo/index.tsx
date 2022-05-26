import { memo } from 'react'
import Image from 'next/image'
import useDesignSystem from '@/hooks/useDesignSystem'

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
  const { isDark } = useDesignSystem()
  if (isDark) {
    // ダークモードの場合
    return (
      <Image
        src="/images/dark/logo.png"
        alt="ロゴ"
        width={width ?? '75px'}
        height={height ?? '48px'}
      />
    )
  } else {
    // ライトテーマの場合
    return (
      <Image
        src="/images/light/logo.png"
        alt="ロゴ"
        width={width ?? '75px'}
        height={height ?? '48px'}
      />
    )
  }
})

Logo.displayName = 'Logo'
