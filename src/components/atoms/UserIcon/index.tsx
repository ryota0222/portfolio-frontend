import { memo } from 'react'
import { Avatar, useColorModeValue } from '@chakra-ui/react'
import { Size } from '@/types/interface'

export interface Props {
  /**
   * 画像データ
   */
  imageData: string | null
  /**
   *サイズ
   */
  size: Size
}

export const UserIcon = memo(({ imageData, size }: Props) => {
  const bg = useColorModeValue('gray.400', 'gray.600')
  return (
    <Avatar
      size={size}
      src={imageData}
      showBorder={true}
      borderWidth="6px"
      bg={imageData ? 'transparent' : bg}
    />
  )
})

UserIcon.displayName = 'UserIcon'
