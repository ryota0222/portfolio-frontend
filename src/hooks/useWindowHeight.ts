import { useBreakpointValue } from '@chakra-ui/react'
import { SCROLL_HEIGHT } from '@/consts/style'

type UseWindowHeight = () => {
  scrollHeight: string
}

const useWindowHeight: UseWindowHeight = () => {
  const scrollHeight = useBreakpointValue({
    base: 'auto',
    md: SCROLL_HEIGHT,
  })
  return { scrollHeight }
}

export default useWindowHeight
