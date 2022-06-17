import React, { memo } from 'react'
import useSp from '@/hooks/useSp'

const SideMenuWrapper = memo(({ children }) => {
  const [isSp] = useSp()
  // スマホサイズでは何も表示しない
  if (isSp) return <></>
  return <>{children}</>
})

export default SideMenuWrapper
