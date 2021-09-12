import { memo } from 'react'
import { Box, Flex, Text, useColorModeValue, Center } from '@chakra-ui/react'
import { TitleLabel, Rod } from '@/styles/globals'
import { BlogIndexItem } from '@/types/interface'

export interface Props {
  list: BlogIndexItem[]
  currentIndex: number
}

export const BlogIndex = memo(({ list, currentIndex }: Props) => {
  const textColor = useColorModeValue('#00141F', '#FFFFFF')
  const borderColor = useColorModeValue('#00141F', '#FFFFFF')
  const circleFillColor = useColorModeValue(
    'linear-gradient(120deg, #FBFBFB, #FBFBFB)',
    'linear-gradient(120deg, #404040, #404040)',
  )
  const toggleColor = (idx) => {
    if (idx <= currentIndex) {
      return textColor
    } else {
      return '#A1A1A1'
    }
  }
  const toggleCircleWidth = (idx) => {
    if (idx <= currentIndex) {
      return '16px'
    } else {
      return '12px'
    }
  }
  const toggleBgColor = (idx) => {
    if (idx <= currentIndex) {
      return 'linear-gradient(120deg, #9FF9FF, #349EFF)'
    } else {
      return circleFillColor
    }
  }
  return (
    <Flex width="100%" maxWidth="300px">
      {/* ラベル */}
      <Box position="relative">
        {list.map((item) => {
          return (
            <a key={`label_${item.index}`} href={`#${encodeURI(item.label)}`}>
              <TitleLabel type={item.type}>
                <Text
                  isTruncated
                  color={toggleColor(item.index)}
                  fontWeight="bold"
                  fontSize="small"
                  py={1}
                >
                  {item.label}
                </Text>
              </TitleLabel>
            </a>
          )
        })}
        {/* マップ */}
        <Box height="100%" width="16px" position="absolute" left="0" top="0">
          {list.map((item) => {
            return (
              <a href={`#${encodeURI(item.label)}`} key={`map_${item.index}`}>
                <Center height={`calc(100% / ${list.length})`} className="toc">
                  <Rod last={item.index === list.length - 1}>
                    <Box
                      borderRadius="50%"
                      borderWidth="2px"
                      borderColor={borderColor}
                      transition={'all 0.5s'}
                      bg={toggleBgColor(item.index)}
                      width={toggleCircleWidth(item.index)}
                      height={toggleCircleWidth(item.index)}
                    ></Box>
                  </Rod>
                </Center>
              </a>
            )
          })}
        </Box>
      </Box>
    </Flex>
  )
})

BlogIndex.displayName = 'BlogIndex'
