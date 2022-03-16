import {
  Box,
  Spacer,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import useErrorImage from '@/hooks/useErrorImage'
import { PageWrapper } from '@/styles/globals'
import { HeadComponent } from '@/utils/head'

interface Props {
  /**
   * ページタイトル
   */
  title: string
  /**
   * 説明文
   */
  description: string
}

const ErrorPageTemplate: React.VFC<Props> = ({ title, description }) => {
  const color = useColorModeValue('dark', 'white')
  const [selectedImage] = useErrorImage()
  const imageMaxWidth = useBreakpointValue({ base: '240px', sm: '320px' })
  return (
    <PageWrapper style={{ display: 'flex', flexDirection: 'column' }}>
      <HeadComponent title={title} />
      <Spacer />
      <Text
        colorScheme={color}
        fontSize="5xl"
        fontWeight="bold"
        fontFamily="'Josefin Sans'"
        as="h1"
        textAlign="center"
        mb="8"
      >
        {title}
      </Text>
      <Box w="full">
        <Box maxW={imageMaxWidth} mx="auto">
          <Image src={selectedImage} alt={'画像'} layout="responsive" />
        </Box>
      </Box>
      <Text colorScheme={color} textAlign="center" mt="8">
        {description}
      </Text>
      <Spacer />
    </PageWrapper>
  )
}

export default ErrorPageTemplate
