import { useColorModeValue } from '@chakra-ui/react'

type UseDesignSystem = () => {
  isDark: boolean
  NO_DATA_COLOR: string
  BLOG_SIDE_MENU_BG: string
  TEXT_COLOR: string
  BG_COLOR: string
}

const useDesignSystem: UseDesignSystem = () => {
  const isDark = useColorModeValue(false, true)
  const NO_DATA_COLOR = useColorModeValue('app-gray.200', 'app-gray.800')
  const BLOG_SIDE_MENU_BG = useColorModeValue('app-gray.600', 'app-gray.500')
  const TEXT_COLOR = useColorModeValue('app-gray.900', 'app-gray.50')
  const BG_COLOR = useColorModeValue('app-gray.50', 'app-gray.700')
  return {
    isDark,
    NO_DATA_COLOR,
    BLOG_SIDE_MENU_BG,
    TEXT_COLOR,
    BG_COLOR,
  }
}

export default useDesignSystem
