import { memo } from 'react'
import {
  Box,
  Text,
  useColorModeValue,
  SkeletonText,
  Skeleton,
  Flex,
  Center,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { UserIcon } from '@/components/atoms/UserIcon'

export interface Props {
  /**
   * 名前
   */
  name: string | null
  /**
   * 説明文
   */
  intro: string | null
  /**
   * 画像データ
   */
  imageData: StaticImageData | null
}

export const Intro = memo(({ name, intro, imageData }: Props) => {
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  return (
    <Box maxWidth="240px" width="100%">
      <Flex flexFlow="column" alignItems="center">
        {/* 画像 */}
        <Box mb={4}>
          <UserIcon imageData={imageData as unknown as string} size="2xl" />
        </Box>
        <Box>
          <Center>
            <GradationText>{name}</GradationText>
          </Center>
          {/*データがない時 */}
          {intro === null && <Skeleton height="24px" />}
          {intro && intro.length > 0 && (
            <Text noOfLines={4} fontSize="sm" color={textColor}>
              {intro}
            </Text>
          )}
          {/*データがない時 */}
          {intro === null && <SkeletonText mt="4" noOfLines={4} spacing="2" />}
        </Box>
      </Flex>
    </Box>
  )
})

const GradationText = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: white;
  font-family: 'Josefin Sans';
  line-height: 2.4rem;
  background: linear-gradient(60deg, #00a3ff, #0075ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

Intro.displayName = 'Intro'
