import { memo, useMemo } from 'react'
import {
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import styled from 'styled-components'
import { Tag } from '@/components/atoms/Tag'

export interface Props {
  /**
   * ブログのタイトル
   */
  title: string
  /**
   * 画像
   */
  imageData: string | null
  /**
   * タグの背景色
   */
  tagBg: string
  /**
   * タグの名前
   */
  tagName: string
}

export const BlogCard = memo(({ title, imageData, tagBg, tagName }: Props) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  const fontSize = useBreakpointValue({ base: 'xs', sm: 'md' })
  return (
    <BlogCardWrapper>
      <Box
        position="relative"
        width={'40vw'}
        height={'30vw'}
        maxWidth={'280px'}
        maxHeight={'210px'}
        overflow="hidden"
      >
        <Image
          src={imageData}
          alt={title}
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          loading={'lazy'}
          quality={70}
        />
        <Box position="absolute" left="0" top="0" display="flex" height="18px">
          <Tag bg={tagBg}>{tagName}</Tag>
        </Box>
      </Box>
      <Text
        color={textColor}
        noOfLines={2}
        mt={2}
        fontWeight="bold"
        fontSize={fontSize}
      >
        {title}
      </Text>
    </BlogCardWrapper>
  )
})

const BlogCardWrapper = styled.div`
  display: inline-block;
  width: 40vw;
  max-width: 280px;
  img {
    transition: transform 0.4s;
  }
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
  }
`

BlogCard.displayName = 'BlogCard'
