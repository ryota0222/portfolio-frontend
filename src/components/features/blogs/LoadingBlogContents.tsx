import React, { useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { BlogCard } from '@/components/molecules/BlogCard'
import useSp from '@/hooks/useSp'

const LoadingBlogContents = () => {
  const [isSp] = useSp()
  const contentsDirection = useMemo(() => {
    return isSp ? 'column' : 'row'
  }, [isSp])
  if (isSp) {
    return (
      <Flex
        padding="10%"
        flexWrap="wrap"
        justifyContent="space-between"
        flexDirection={contentsDirection}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <Box my={4} key={item}>
              <BlogCard image="" title="" icon="" label="" loading={true} />
            </Box>
          )
        })}
      </Flex>
    )
  }
  return (
    <Flex
      maxW="800px"
      m="auto"
      flexWrap="wrap"
      justifyContent="space-between"
      flexDirection={contentsDirection}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return (
          <Box m={4} key={item}>
            <BlogCard image="" title="" icon="" label="" loading={true} />
          </Box>
        )
      })}
    </Flex>
  )
}

export default LoadingBlogContents
