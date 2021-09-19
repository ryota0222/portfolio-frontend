import {
  useColorModeValue,
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Center,
  Link,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import TopImage from '@/assets/top/image.png'
import { Logo } from '@/components/atoms/Logo'
import { GRADIENT } from '@/consts/config'
import { PageWrapper } from '@/styles/globals'

const HomeTemplate = ({ introduction }) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  const githubColor = useColorModeValue('rgb(24,43,77)', '#FFFFFF')
  const width = useBreakpointValue({ base: '100%', md: '50%' })
  const flexDirection: 'column' | 'row' = useBreakpointValue({
    base: 'column',
    md: 'row',
  })
  const minHeight = useBreakpointValue({
    base: 'auto',
    md: 'calc(var(--vh, 1vh) * 100 - 72px)',
  })
  const imageSize = useBreakpointValue({
    base: 600,
    lg: 500,
    md: 400,
    sm: 300,
    xs: 200,
  })
  return (
    <PageWrapper>
      <Flex
        w="100vw"
        height={minHeight}
        flexDirection={flexDirection}
        maxW="1000px"
        m="auto"
      >
        {/* 画像 */}
        <Center w={width} height="100%">
          <Image
            src={TopImage}
            alt="画像"
            width={imageSize}
            height={imageSize}
            objectFit="contain"
          />
        </Center>
        <Center w={width} height={minHeight}>
          <Box boxSizing="border-box" px="4">
            {/* 名前 */}
            <Text
              fontWeight="700"
              fontSize="4rem"
              fontFamily="'Josefin Sans'"
              lineHeight="4.2rem"
              color={textColor}
              background={GRADIENT}
              backgroundClip="text"
              d="inline-block"
              style={{ WebkitTextFillColor: 'transparent' }}
              mb="8"
            >
              {introduction.name}
            </Text>
            {/* 自己紹介 */}
            {introduction?.description && (
              <Text
                fontSize="sm"
                color={textColor}
                dangerouslySetInnerHTML={{ __html: introduction.description }}
                maxW="480px"
                className="introduction"
              ></Text>
            )}
            <Flex mt="8">
              {/* github */}
              {introduction?.github && (
                <Link href={introduction.github} isExternal mr="6">
                  <FaGithub color={githubColor} size="32px" />
                </Link>
              )}
              {/* twitter */}
              {introduction.twitter && (
                <Link href={introduction.twitter} isExternal>
                  <FaTwitter color="#00AAEC" size="32px" />
                </Link>
              )}
            </Flex>
          </Box>
        </Center>
      </Flex>
    </PageWrapper>
  )
}

export default HomeTemplate
