import React, { useMemo } from 'react'
import { Box, Center, Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import useSp from '@/hooks/useSp'

const CARRIER_LIST = [
  {
    date: '2020.03',
    detail: '神戸大学  工学部  機械工学科卒業',
  },
  {
    date: '2020.04',
    detail: '株式会社 神戸デジタル・ラボ入社',
  },
  {
    date: '2021.01',
    detail: '現在まで、つながる勉強会の運営',
  },
  {
    date: '2022.03',
    detail: '副業でデザインの業務委託を開始（2022.05まで）',
  },
  {
    date: '2022.06',
    detail: '現在まで、Web Creators Meetupの運営',
  },
]

const Carrier = () => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  const fontSize = useMemo(() => (isSp ? 'sm' : 'md'), [isSp])
  return (
    <Flex
      w="100vw"
      height={'80vh'}
      maxW="1000px"
      m="auto"
      flexDir="column"
      px={4}
    >
      <SectionTitle size={size}>Carrier</SectionTitle>
      <Spacer />
      <Center>
        <Box mt={-24}>
          {CARRIER_LIST.map((carrier, idx) => (
            <React.Fragment key={`${carrier.date}-${idx}`}>
              <Box mb={4} d="inline-block">
                <Text
                  as="span"
                  d="inline-block"
                  fontFamily="bananaslipplus"
                  mr={2}
                  w="70px"
                  fontSize={fontSize}
                >
                  {carrier.date}
                </Text>
                <Text as="span" fontSize={fontSize}>
                  {carrier.detail}
                </Text>
              </Box>
              <br />
            </React.Fragment>
          ))}
        </Box>
      </Center>
      <Spacer />
    </Flex>
  )
}

export default Carrier
