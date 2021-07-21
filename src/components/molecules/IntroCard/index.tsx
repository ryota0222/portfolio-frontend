import { memo } from 'react'
import { Box, Text, useColorModeValue, Link, Flex } from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { Panel } from '@/components/atoms/Panel'
import { UserIcon } from '@/components/atoms/UserIcon'

export interface Props {
  /**
   * 名前
   */
  name: string
  /**
   * 説明文
   */
  intro?: string
  /**
   * twitterのURL
   */
  twitter?: string
  /**
   * githubのURL
   */
  github?: string
  /**
   * 画像データ
   */
  imageData: string | null
}

export const IntroCard = memo(
  ({ name, intro, twitter, github, imageData }: Props) => {
    const textColor = useColorModeValue('#002E48', '#FFFFFF')
    const githubColor = useColorModeValue('rgb(24,43,77)', '#FFFFFF')
    return (
      <Panel maxWidth="280px" width="100%">
        <Flex>
          {/* 画像 */}
          <Box mr={2}>
            <UserIcon imageData={imageData as unknown as string} size="xl" />
            <Flex justifyContent="space-evenly">
              {twitter && twitter.length > 0 && (
                <Link href={twitter} isExternal>
                  <FaTwitter color="#00AAEC" size="1.4rem" />
                </Link>
              )}
              {github && github.length > 0 && (
                <Link href={github} isExternal>
                  <FaGithub color={githubColor} size="1.4rem" />
                </Link>
              )}
            </Flex>
          </Box>
          <Box>
            <Text
              fontWeight="700"
              fontSize="2rem"
              color={textColor}
              fontFamily="'Josefin Sans'"
              lineHeight="2.2rem"
            >
              {name}
            </Text>
            {intro && intro.length > 0 && (
              <Text noOfLines={4} fontSize="sm" color={textColor}>
                {intro}
              </Text>
            )}
          </Box>
        </Flex>
      </Panel>
    )
  },
)

IntroCard.displayName = 'IntroCard'
