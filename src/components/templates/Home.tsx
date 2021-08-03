import {
  useColorModeValue,
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Center,
  Link,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { PageWrapper } from '@/styles/globals'

const HomeTemplate = ({ introduction }) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  const githubColor = useColorModeValue('rgb(24,43,77)', '#FFFFFF')
  const width = useBreakpointValue({ base: '100%', sm: '50%' })
  const flexDirection: 'column' | 'row' = useBreakpointValue({
    base: 'column',
    sm: 'row',
  })
  const minHeight = useBreakpointValue({
    base: 'auto',
    sm: 'calc(100vh - 72px)',
  })
  return (
    <PageWrapper>
      <Flex w="full" minHeight={minHeight} flexDirection={flexDirection}>
        {/* 画像 */}
        <Box w={width} h="full"></Box>
        <Center w={width} minHeight={minHeight}>
          <Box boxSizing="border-box" px="4">
            {/* 名前 */}
            <Text
              fontWeight="700"
              fontSize="4rem"
              fontFamily="'Josefin Sans'"
              lineHeight="4.2rem"
              color={textColor}
              background="-webkit-linear-gradient(0deg, #00A3FF, #0075FF)"
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
