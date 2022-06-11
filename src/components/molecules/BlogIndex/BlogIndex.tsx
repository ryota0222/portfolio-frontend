import { memo } from 'react'
import { Box, Flex, Text, Center } from '@chakra-ui/react'
import { GRADIENT } from '@/consts/style'
import { TitleLabel } from './module.style'
import { Props } from './type'
import { useBlogIndex } from './useBlogIndex'

export const BlogIndex: React.FC<Props> = memo(({ list, currentIndex }) => {
  const { textColor, getToggleCircleWidth, getTextSx, getCircleSx } =
    useBlogIndex(currentIndex)

  return (
    <Flex width="100%" maxWidth="300px">
      {/* ラベル */}
      <Box position="relative" pl={2}>
        {list.map((item) => {
          return (
            <a key={`label_${item.index}`} href={`#${encodeURI(item.label)}`}>
              <TitleLabel type={item.type}>
                <Text
                  isTruncated
                  color={textColor}
                  fontWeight="bold"
                  fontSize={10}
                  sx={getTextSx(item.index)}
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
                  <Box
                    borderRadius="50%"
                    transition={'all 0.5s'}
                    bg={GRADIENT}
                    sx={getCircleSx(item.index)}
                    width={getToggleCircleWidth(item.index)}
                    height={getToggleCircleWidth(item.index)}
                  ></Box>
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
