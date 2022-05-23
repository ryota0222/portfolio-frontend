import { useColorModeValue } from '@chakra-ui/react'

type UseDesignSystem = () => {
  NO_DATA_COLOR: string
}

const useDesignSystem: UseDesignSystem = () => {
  const NO_DATA_COLOR = useColorModeValue('#999', '#ccc')
  return {
    NO_DATA_COLOR,
  }
}

export default useDesignSystem
