import { memo } from 'react'
import Image from 'next/image'
import { SP_LOGO_WIDTH, SP_LOGO_HEIGHT } from './const'
import { Props } from './type'

export const SpLogo: React.FC<Props> = memo(
  ({ width = SP_LOGO_WIDTH, height = SP_LOGO_HEIGHT }) => {
    return (
      <Image src="/images/logo.svg" alt="ロゴ" width={width} height={height} />
    )
  },
)
