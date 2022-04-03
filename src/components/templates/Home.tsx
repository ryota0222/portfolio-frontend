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
import { Remark } from 'react-remark'
import TopImage from '@/assets/top/image.png'
import { GRADIENT } from '@/consts/config'
import useWindowHeight from '@/hooks/useWindowHeight'
import { PageWrapper } from '@/styles/global.css'
import { Introduction } from '@/types/interface'

interface Props {
  /**
   * 自己紹介データ
   */
  introduction: Introduction
}

const HomeTemplate: React.FC<Props> = ({ introduction }) => {
  const { scrollHeight } = useWindowHeight()
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  const githubColor = useColorModeValue('rgb(24,43,77)', '#FFFFFF')
  const colorTheme = useColorModeValue('light', 'dark')
  const width = useBreakpointValue({ base: '100%', md: '50%' })
  const nameFontSize = useBreakpointValue({ base: '3rem', md: '4rem' })
  const snsJustifyContent = useBreakpointValue({
    base: 'flex-end',
    md: 'flex-start',
  })
  const snsMx = useBreakpointValue({ base: 8, md: 0 })
  const nameMb = useBreakpointValue({ base: 4, md: 8 })
  const flexDirection: 'column' | 'row' = useBreakpointValue({
    base: 'column',
    md: 'row',
  })
  const minHeight = useBreakpointValue({
    base: 'auto',
    md: scrollHeight,
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
              fontSize={nameFontSize}
              fontFamily="'Josefin Sans'"
              lineHeight="4.2rem"
              color={textColor}
              background={GRADIENT}
              backgroundClip="text"
              d="inline-block"
              style={{ WebkitTextFillColor: 'transparent' }}
              mb={nameMb}
            >
              {introduction.name}
            </Text>
            {/* 自己紹介 */}
            {introduction?.description && (
              <Box className={`${colorTheme} md`} mb={8}>
                <Remark
                  rehypeReactOptions={{
                    components: {
                      p: (props) => <p className="md-para" {...props} />,
                    },
                  }}
                >
                  {introduction.description}
                </Remark>
              </Box>
            )}
            {/* <Flex
              mt="20px"
              mx={snsMx}
              justifyContent={snsJustifyContent}
              mb={8}
            > */}
            {/* github */}
            {/* {introduction?.github && (
                <Link href={introduction.github} isExternal mr="6">
                  <FaGithub color={githubColor} size="32px" />
                </Link>
              )} */}
            {/* twitter */}
            {/* {introduction.twitter && (
                <Link href={introduction.twitter} isExternal>
                  <FaTwitter color="#00AAEC" size="32px" />
                </Link>
              )} */}
            {/* </Flex> */}
          </Box>
        </Center>
      </Flex>
    </PageWrapper>
  )
}

export default HomeTemplate
