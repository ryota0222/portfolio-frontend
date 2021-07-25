import { memo } from 'react'
import { useColorModeValue, Text, Center } from '@chakra-ui/react'

export const FooterComponent = memo(() => {
  const color = useColorModeValue('dark', 'white')
  return (
    <Center as="footer" w="full">
      <Text fontFamily="'Josefin Sans'" colorScheme={color}>
        &copy;RyoTa.
      </Text>
    </Center>
  )
})

FooterComponent.displayName = 'FooterComponent'
