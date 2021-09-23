import { useMemo } from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import useErrorImage from '@/hooks/useErrorImage'
import { HeadComponent } from '@/utils/head'

const Error = ({ statusCode, message }) => {
  const color = useColorModeValue('dark', 'white')
  const [selectedImage] = useErrorImage()
  return (
    <>
      <HeadComponent title={statusCode} />
      <Text
        colorScheme={color}
        fontSize="5xl"
        fontWeight="bold"
        fontFamily="'Josefin Sans'"
        as="h1"
        textAlign="center"
        mb="4"
      >
        {statusCode}
      </Text>
      <Box w="full">
        <Box maxW="320px" mx="auto" w="90%">
          <Image src={selectedImage} alt={'画像'} layout="responsive" />
        </Box>
      </Box>
      <Text colorScheme={color} textAlign="center" mt="8">
        {message}
      </Text>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const message =
    err?.response?.message ?? `An error ${statusCode} occurred on server`
  return { statusCode, message }
}

export default Error
