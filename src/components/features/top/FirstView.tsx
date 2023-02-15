import React, { memo } from 'react'
import { useMemo } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Center,
  useColorModeValue,
  useToken,
  Link,
} from '@chakra-ui/react'
import Image from 'next/image'
import useSp from '@/hooks/useSp'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import ÎnstagramImage from '@/assets/icons/instagram.svg'

const FirstView: React.FC = memo(() => {
  const [isSp] = useSp()
  const width = useBreakpointValue({ base: '100%', md: '5xl' })
  const nameFontSize = useMemo(() => (isSp ? '3xl' : '5xl'), [isSp])
  const minH = useMemo(() => (isSp ? '80vh' : 'auto'), [isSp])
  const height = useMemo(() => (isSp ? 'auto' : '80vh'), [isSp])
  const descriptionStyle = useMemo(() => {
    return isSp
      ? {
          size: 'sm',
          lineHeight: '2rem',
        }
      : {
          size: 'md',
          lineHeight: '3rem',
        }
  }, [isSp])
  const [appGray900Color, appGray100Color]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.900', 'app-gray.100'],
  )
  // style
  const color = useColorModeValue(appGray900Color, appGray100Color)
  const nameMb = useBreakpointValue({ base: 4, md: 8 })
  const flexDirection: 'column' | 'row' = useBreakpointValue({
    base: 'column',
    md: 'row',
  })
  const imageSize = useBreakpointValue({
    base: '600px',
    lg: '500px',
    md: '400px',
    sm: '500px',
    xs: '200px',
  })
  return (
    <>
      {/* 自己紹介 */}
      <Flex
        w="100vw"
        minH={minH}
        height={height}
        flexDirection={flexDirection}
        maxW="1000px"
        m="auto"
      >
        {/* 画像 */}
        <Center w={width} height="100%">
          <Image
            src="/images/illust-ryota.png"
            alt="画像"
            objectFit="contain"
            width={imageSize || 0}
            height={imageSize || 0}
          />
        </Center>
        <Center w={width} h="full">
          <Box boxSizing="border-box" px="4">
            {/* 名前 */}
            <Text
              fontWeight="700"
              fontSize={nameFontSize}
              fontFamily="bananaslipplus"
              d="inline-block"
              mb={nameMb}
            >
              りょーた
            </Text>
            {/* 自己紹介 */}
            <Text
              fontSize={descriptionStyle.size}
              lineHeight={descriptionStyle.lineHeight}
            >
              2020年4月から神戸でエンジニア
              <br />
              1998年生まれで、絵を描くことが趣味
              <br />
              デザインに興味があり、デザインエンジニアを目指して活動中
            </Text>
            <Flex mt={6}>
              {/* github */}
              <Link href={'https://github.com/RyoTa0222'} isExternal mr={5}>
                <FaGithub color={color} size="24px" aria-label="github" />
              </Link>
              {/* twitter */}
              <Link href={'https://twitter.com/RyoTa___0222'} isExternal mr={5}>
                <FaTwitter color={color} size="24px" aria-label="twitter" />
              </Link>
              {/* instagram */}
              <Link href={'https://www.instagram.com/ryotanny/'} isExternal>
                <Image
                  src={ÎnstagramImage}
                  width="24px"
                  height="24px"
                  aria-label="instagram"
                />
              </Link>
            </Flex>
          </Box>
        </Center>
      </Flex>
    </>
  )
})

export default FirstView
