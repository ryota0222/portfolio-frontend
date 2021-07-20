import { memo } from 'react'
import { Box, Flex, Text, useColorModeValue, Center } from '@chakra-ui/react'
import styled from 'styled-components'
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
            <TitleLabel key={`label_${item.index}`} type={item.type}>
              <Text
                isTruncated
                color={toggleColor(item.index)}
                fontWeight="bold"
                fontSize="md"
                py={1}
              >
                {item.label}
              </Text>
            </TitleLabel>
          )
        })}
        {/* マップ */}
        <Box height="100%" width="16px" position="absolute" left="0" top="0">
          {list.map((item) => {
            return (
              <Center
                key={`map_${item.index}`}
                height={`calc(100% / ${list.length})`}
              >
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
            )
          })}
        </Box>
      </Box>
    </Flex>
  )
})

const TitleLabel = styled.span`
  display: block;
  margin-left: ${(props) => {
    switch (props.type) {
      case 'h1':
        return 1.5
      case 'h2':
        return 2.5
      case 'h3':
        return 3.5
      case 'h4':
        return 4.5
      case 'h5':
        return 5.5
      case 'h6':
        return 6.5
      default:
        return 0
    }
  }}rem;
`

const Rod = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    height: ${(props) => (props.last ? '0px' : '100%')};
    width: 2px;
    background: #a1a1a1;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`

BlogIndex.displayName = 'BlogIndex'
