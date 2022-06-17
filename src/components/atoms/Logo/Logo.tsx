import { memo } from 'react'
import Image from 'next/image'
import useDesignSystem from '@/hooks/useDesignSystem'
import { LOGO_WIDTH, LOGO_HEIGHT } from './const'
import { Props } from './type'

export const Logo = memo(
  ({ width = LOGO_WIDTH, height = LOGO_HEIGHT }: Props) => {
    const { isDark } = useDesignSystem()
    if (isDark) {
      // ダークモードの場合
      return (
        <Image
          src="/images/dark/logo.png"
          alt="ロゴ"
          width={width}
          height={height}
        />
      )
    } else {
      // ライトテーマの場合
      return (
        <Image
          src="/images/light/logo.png"
          alt="ロゴ"
          width={width}
          height={height}
        />
      )
    }
  },
)
