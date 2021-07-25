import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { HeadComponent } from '@/utils/header'

const Error = () => {
  const color = useColorModeValue('dark', 'white')
  const min = 1
  const max = 2
  let random: number = Math.floor(Math.random() * (max + 1 - min)) + min
  return (
    <>
      <HeadComponent title="404" />
      <Text
        colorScheme={color}
        fontSize="5xl"
        fontWeight="bold"
        fontFamily="'Josefin Sans'"
        as="h1"
        textAlign="center"
        mb="4"
      >
        404
      </Text>
      <Box w="full">
        <Image
          src={require(`../assets/commons/error/image_${random}.png`)}
          alt={'画像'}
          layout="responsive"
        />
      </Box>
      <Text colorScheme={color} textAlign="center" mt="4">
        page not found.
      </Text>
    </>
  )
}

export default Error
