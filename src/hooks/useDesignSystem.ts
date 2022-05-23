import { useColorModeValue } from '@chakra-ui/react'

type UseDesignSystem = () => {
  NO_DATA_COLOR: string
  BLOG_SIDE_MENU_BG: string
}

const useDesignSystem: UseDesignSystem = () => {
  const NO_DATA_COLOR = useColorModeValue('#999', '#ccc')
  const BLOG_SIDE_MENU_BG = useColorModeValue('#F0F0F0', '#252829')
  return {
    NO_DATA_COLOR,
    BLOG_SIDE_MENU_BG,
  }
}

export default useDesignSystem
