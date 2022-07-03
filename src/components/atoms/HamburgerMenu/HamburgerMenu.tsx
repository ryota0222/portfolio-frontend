import React, { memo } from 'react'
import { Box } from '@chakra-ui/react'
import clsx from 'clsx'
import { HamburgerIcon } from '@/components/atoms/HamburgerMenu/module.style'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const HamburgerMenu: React.FC<Props> = memo(({ isOpen }) => {
  const { TEXT_COLOR } = useDesignSystem()
  return (
    <HamburgerIcon
      w="20px"
      h="20px"
      className={clsx(isOpen && 'active')}
      cursor="pointer"
      role="button"
      aria-label="メニュー"
    >
      <Box as="span" bgColor={TEXT_COLOR}></Box>
      <Box as="span" bgColor={TEXT_COLOR}></Box>
      <Box as="span" bgColor={TEXT_COLOR}></Box>
    </HamburgerIcon>
  )
})
