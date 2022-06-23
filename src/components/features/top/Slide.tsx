import React, { memo } from 'react'
import { Flex } from '@chakra-ui/react'
import { SLIDE_LIST } from '@/consts/top'

const Slide = memo(() => {
  return (
    <Flex justifyContent={'space-between'} flexWrap="wrap" my={16}>
      <iframe
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}
        width={'100%'}
        height={400}
        title={'slide'}
        src={SLIDE_LIST[0].link}
        allowFullScreen
      ></iframe>
    </Flex>
  )
})

export default Slide
