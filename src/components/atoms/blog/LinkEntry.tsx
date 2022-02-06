import { memo } from 'react'
import { Box, Center, Flex, Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
  url: string
  ogp_title: string
  ogp_description: string
  ogp_url: string
  ogp_image: string
}

export const LinkEntry: React.FC<Props> = memo(
  ({ url, ogp_title, ogp_description, ogp_url, ogp_image }) => {
    const bg = useColorModeValue('#f6f6f6', '#313131')
    const hoverBg = useColorModeValue('#f2f2f2', '#444')
    const textColor = useColorModeValue('#002E48', '#FFFFFF')
    return (
      <Box my={16}>
        <Flex
          as="a"
          href={url}
          target="_blank"
          rel="noreferrer"
          borderRadius={10}
          borderColor="#dddddd"
          borderWidth="1px"
          justifyContent="space-between"
          h="120px"
          _hover={{ bgColor: hoverBg }}
          boxSizing="content-box"
          backgroundColor={bg}
        >
          <Box p={4}>
            <Text
              color={textColor}
              fontWeight="bold"
              noOfLines={2}
              fontSize="0.9rem"
              lineHeight="1.2rem"
            >
              {ogp_title}
            </Text>
            {ogp_description?.length && (
              <Text
                noOfLines={1}
                color={textColor}
                fontSize="0.7rem"
                lineHeight="1rem"
                mt={2}
              >
                {ogp_description}
              </Text>
            )}
            {ogp_url?.length && (
              <Flex justifyContent="flex-start" alignItems="center" mt={2}>
                <Center w="14px" h="14px">
                  <img
                    src={`http://www.google.com/s2/favicons?domain=${ogp_url}`}
                    alt="favicon"
                    width="14px"
                    height="14px"
                  />
                </Center>
                <Text
                  color={textColor}
                  fontSize="0.7rem"
                  ml={2}
                  noOfLines={1}
                  lineHeight="1rem"
                  wordBreak="break-all"
                >
                  {ogp_url}
                </Text>
              </Flex>
            )}
          </Box>
          {ogp_image?.length && (
            <img
              src={`${ogp_image}`}
              alt="favicon"
              style={{
                aspectRatio: '1 /1',
                borderTopRightRadius: '9px',
                borderBottomRightRadius: '9px',
                objectFit: 'cover',
              }}
            />
          )}
        </Flex>
      </Box>
    )
  },
)
