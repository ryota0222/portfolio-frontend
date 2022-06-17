import { useBreakpointValue } from '@chakra-ui/react'

const useSp = (): [boolean] => {
  const isSp = useBreakpointValue({ base: true, md: false })
  return [isSp]
}

export default useSp
