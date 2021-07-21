import { memo } from 'react'
import { useColorModeValue, Text, Center } from '@chakra-ui/react'

export const FooterComponent = memo(() => {
  const color = useColorModeValue('dark', 'white')
  return (
    <Center as="footer">
      <Text fontFamily="'Josefin Sans'" colorScheme={color}>
        RyoTa.
      </Text>
    </Center>
  )
})

FooterComponent.displayName = 'FooterComponent'
