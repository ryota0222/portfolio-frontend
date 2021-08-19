import { memo } from 'react'
import {
  useColorModeValue,
  Text,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const FooterComponent = memo(() => {
  const router = useRouter()
  const isBlog = router.route === '/blog'
  const color = useColorModeValue('dark', 'white')
  const blogBg = useColorModeValue('#F0F0F0', '#252829')
  const bgColor = isBlog ? blogBg : 'transparent'
  const footerBg = useBreakpointValue({ base: bgColor, sm: 'transparent' })
  return (
    <Center as="footer" w="full" bgColor={footerBg}>
      <Text fontFamily="'Josefin Sans'" colorScheme={color}>
        &copy;RyoTa.
      </Text>
    </Center>
  )
})

FooterComponent.displayName = 'FooterComponent'
