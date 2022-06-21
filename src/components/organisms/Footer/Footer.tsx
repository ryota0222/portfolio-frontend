import { memo } from 'react'
import { Spacer, Text, Flex, Link } from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { useFooter } from './useFooter'

export const AppFooter = memo(() => {
  const { color, position } = useFooter()

  return (
    <Flex
      as="footer"
      w="full"
      bgColor={'transparent'}
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
        <FaGithub color={color} size="20px" aria-label="github" />
      </Link>
      {/* twitter */}
      <Link href={'https://twitter.com/RyoTa___0222'} isExternal>
        <FaTwitter color={color} size="20px" aria-label="twitter" />
      </Link>
    </Flex>
  )
})
