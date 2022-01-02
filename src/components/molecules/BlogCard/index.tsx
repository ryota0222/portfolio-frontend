import { memo } from 'react'
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { IoMdCreate } from 'react-icons/io'
import { MdUpdate } from 'react-icons/md'
import styled from 'styled-components'
import useSp from '@/hooks/useSp'
import { BlogCardWrapper } from '@/styles/globals'
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
  /**
   * 作成日
   */
  createdAt: string
  /**
   * 更新日
   */
  updatedAt: string | null
}

export const BlogCard = memo(
  ({ title, imageData, tagBg, tagName, createdAt, updatedAt }: Props) => {
    const [isSp] = useSp()
    const textColor = useColorModeValue('dark', '#FFFFFF')
    const bgColor = useColorModeValue('#F1F4F4', '#303334')
    const secondColor = useColorModeValue('#9A9A9A', '#9A9A9A')
    if (isSp) {
      return (
        <Flex p={2} width={'100%'}>
          {/* 画像 */}
          <Image
            src={imageData}
            alt={title}
            width={'120px'}
            height={'90px'}
            objectFit={'cover'}
            loading={'lazy'}
            quality={100}
          />
          <Box ml="8px" width="calc(100% - 120px - 8px)">
            {/* タイトル */}
            <Text
              color={textColor}
              noOfLines={2}
              mt={1}
              fontWeight="bold"
              fontSize="0.8rem"
              wordBreak="break-all"
            >
              {title}
            </Text>
            {/* タグ */}
            <Flex
              display="flex"
              height="18px"
              data-type="tag"
              alignItems="center"
              pl={1}
              mt={3}
              pb={4}
            >
              <Text color={tagBg} fontSize="small" mr={1}>
                #
              </Text>
              <Text fontSize="x-small">{tagName}</Text>
            </Flex>
            {/* 作成日 */}
            <Flex alignItems="center">
              <IoMdCreate color={secondColor} size={12} />
              <Text ml={1} fontSize="x-small" color={secondColor}>
                {createdAt}
              </Text>
            </Flex>
            {/* 更新日 */}
            {updatedAt && (
              <Flex alignItems="center" ml={2}>
                <MdUpdate color={secondColor} size={14} />
                <Text ml={1} fontSize="x-small" color={secondColor}>
                  {updatedAt}
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
      )
    } else {
      return (
        <BlogCardWrapper>
          <Box p={1} width={'40vw'} maxWidth={'180px'} h="100%">
            <Box
              position="relative"
              width={'100%'}
              height={'100%'}
              overflow="hidden"
            >
              {/* 画像 */}
              <Wrapper>
                <Image
                  src={imageData}
                  alt={title}
                  width={'100%'}
                  height={'100%'}
                  objectFit={'cover'}
                  loading={'lazy'}
                  quality={100}
                />
              </Wrapper>
            </Box>
            {/* タイトル */}
            <Text
              color={textColor}
              noOfLines={2}
              mt={0}
              fontWeight="bold"
              fontSize="0.8rem"
            >
              {title}
            </Text>
            {/* タグ */}
            <Flex
              display="flex"
              height="18px"
              data-type="tag"
              alignItems="center"
              pl={1}
              mt={3}
              pb={7}
            >
              <Text color={tagBg} fontSize="small" mr={1}>
                #
              </Text>
              <Text fontSize="x-small">{tagName}</Text>
            </Flex>
            {/* 作成日 / 更新日 */}
            <Flex mt={2} position="absolute" left={2} bottom={2}>
              {/* 作成日 */}
              <Flex alignItems="center">
                <IoMdCreate color={secondColor} size={12} />
                <Text ml={1} fontSize="x-small" color={secondColor}>
                  {createdAt}
                </Text>
              </Flex>
              {/* 更新日 */}
              {updatedAt && (
                <Flex alignItems="center" ml={2}>
                  <MdUpdate color={secondColor} size={14} />
                  <Text ml={1} fontSize="x-small" color={secondColor}>
                    {updatedAt}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Box>
        </BlogCardWrapper>
      )
    }
  },
)

BlogCard.displayName = 'BlogCard'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  div:not([data-type='tag']) {
    width: 100%;
    height: 100%;
  }
`
