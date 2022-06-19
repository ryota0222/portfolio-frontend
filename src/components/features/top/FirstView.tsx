import React, { memo } from 'react'
import { useMemo } from 'react'
import { Box, Flex, useBreakpointValue, Text, Center } from '@chakra-ui/react'
import Image from 'next/image'
import useSp from '@/hooks/useSp'

const FirstView: React.FC = memo(() => {
  const [isSp] = useSp()
  const width = useBreakpointValue({ base: '100%', md: '5xl' })
  const nameFontSize = useMemo(() => (isSp ? '3xl' : '5xl'), [isSp])
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
        height={'80vh'}
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
          </Box>
        </Center>
      </Flex>
    </>
  )
})

export default FirstView
