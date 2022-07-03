import React, { memo, useMemo } from 'react'
import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ExternalServiceLink } from '@/components/atoms/ExternalServiceLink'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import useSp from '@/hooks/useSp'

const ScrollRevealContainer = dynamic(
  import('@/components/features/top/ScrollRevealContainer'),
  { ssr: false },
)

const Links = memo(() => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  return (
    <ScrollRevealContainer maxW="1000px" px={4} mb={12}>
      <SectionTitle size={size}>Link</SectionTitle>
      <VStack spacing={8} alignItems="flex-start" maxW="20rem" m="auto">
        <ExternalServiceLink type="qiita" />
        <ExternalServiceLink type="twitter" />
        <ExternalServiceLink type="zenn" />
        <ExternalServiceLink type="github" />
        <ExternalServiceLink type="tsunagaru" />
        <ExternalServiceLink type="wcm" />
        <ExternalServiceLink type="line-creators-market" />
      </VStack>
    </ScrollRevealContainer>
  )
})

export default Links
