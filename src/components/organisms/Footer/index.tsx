import { memo } from 'react'
import {
  useColorModeValue,
  Spacer,
  Text,
  Flex,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export const FooterComponent = memo(() => {
  const router = useRouter()
  const isBlog = router.pathname === '/blog/[id]'
  const color = useColorModeValue('dark', 'white')
  const blogBg = useColorModeValue('#F0F0F0', '#252829')
  const bgColor = isBlog ? blogBg : 'transparent'
  const position = isBlog ? 'absolute' : 'initial'
  const footerBg = useBreakpointValue({ base: bgColor, sm: 'transparent' })
  const iconColor = useColorModeValue('rgb(24,43,77)', '#FFFFFF')
  return (
    <Flex
      as="footer"
      w="full"
      bgColor={footerBg}
      zIndex={1}
      bottom={0}
      position={position}
      alignItems={'center'}
      px={'24px'}
      height={'40px'}
    >
      <Text fontFamily="'Josefin Sans'" colorScheme={color}>
        &copy;RyoTa.
      </Text>
      <Spacer />
      {/* github */}
      <Link href={'https://github.com/RyoTa0222'} isExternal mr="4">
        <FaGithub color={iconColor} size="20px" />
      </Link>
      {/* twitter */}
      <Link href={'https://twitter.com/RyoTa___0222'} isExternal>
        <FaTwitter color={iconColor} size="20px" />
      </Link>
    </Flex>
  )
})

FooterComponent.displayName = 'FooterComponent'
