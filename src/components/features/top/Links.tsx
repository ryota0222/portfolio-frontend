import React, { memo, useMemo } from 'react'
import { VStack, Flex } from '@chakra-ui/react'
import { ExternalServiceLink } from '@/components/atoms/ExternalServiceLink'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import useSp from '@/hooks/useSp'

const Links = () => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  return (
    <Flex
      w="100vw"
      height={'80vh'}
      maxW="1000px"
      m="auto"
      flexDir="column"
      px={4}
    >
      <SectionTitle size={size}>Creative</SectionTitle>
      <VStack spacing={8} alignItems="flex-start" maxW="20rem" m="auto">
        <ExternalServiceLink type="qiita" />
        <ExternalServiceLink type="twitter" />
        <ExternalServiceLink type="zenn" />
        <ExternalServiceLink type="github" />
        <ExternalServiceLink type="tsunagaru" />
        <ExternalServiceLink type="wcm" />
        <ExternalServiceLink type="line-creators-market" />
      </VStack>
    </Flex>
  )
}

export default Links
