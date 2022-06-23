import React, { memo, useMemo } from 'react'
import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { CARRIER_LIST } from '@/consts/top'
import useSp from '@/hooks/useSp'

const Carrier = memo(() => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  const fontSize = useMemo(() => (isSp ? 'sm' : 'md'), [isSp])
  const pt = useMemo(() => (isSp ? 12 : 4), [isSp])
  return (
    <Flex
      w="100vw"
      minH={'80vh'}
      maxW="1000px"
      m="auto"
      flexDir="column"
      p={4}
      pt={pt}
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
})

export default Carrier
