import React from 'react'
import { Box } from '@chakra-ui/react'
import useAdsense from '@/hooks/useAdsense'

const Ads = () => {
  const { asPath } = useAdsense()
  return (
    <Box key={asPath} boxSizing="border-box" w="100%" px={4} py="40px">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-7852298720384342"
        data-ad-slot="3823047599"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* 縦長 */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-7852298720384342"
        data-ad-slot="7187577532"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Box>
  )
}

export default Ads
