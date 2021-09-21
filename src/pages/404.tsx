import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import useErrorImage from '@/hooks/useErrorImage'
import { HeadComponent } from '@/utils/head'

const Error = () => {
  const color = useColorModeValue('dark', 'white')
  const [selectedImage] = useErrorImage()
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
        <Box maxW="320px" mx="auto">
          <Image src={selectedImage} alt={'画像'} layout="responsive" />
        </Box>
      </Box>
      <Text colorScheme={color} textAlign="center" mt="4">
        page not found.
      </Text>
    </>
  )
}

export default Error
