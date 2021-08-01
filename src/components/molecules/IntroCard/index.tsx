import { memo } from 'react'
import { Box, Text, useColorModeValue, Link, Flex } from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { Panel } from '@/components/atoms/Panel'
import { UserIcon } from '@/components/atoms/UserIcon'
export interface Props {
  /**
   * 名前
   */
   name?: string
   /**
    * 説明文
    */
    description?: string
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
   imageData?: string | null
}

export const IntroCard = memo(
  ({ name, description, twitter, github, imageData }: Props) => {
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
          <Box py="2">
            <Text
              fontWeight="700"
              fontSize="2rem"
              fontFamily="'Josefin Sans'"
              lineHeight="2.2rem"
              color={textColor}
              d="inline"
            >
              {name}
            </Text>
              <Text noOfLines={4} fontSize="xs" color={textColor} dangerouslySetInnerHTML={{__html: description}} lineHeight="1.2rem">
              </Text>
          </Box>
        </Flex>
      </Panel>
    )
  },
)

IntroCard.displayName = 'IntroCard'
