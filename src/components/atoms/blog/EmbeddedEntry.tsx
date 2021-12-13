import { memo } from 'react'
import {
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  thumbnail_url: string | null
  thumbnail_alt: string
  id: string
}

export const EmbeddedEntry: React.FC<Props> = memo(
  ({ children, title, description, thumbnail_url, thumbnail_alt, id }) => {
    const bg = useColorModeValue('#f6f6f6', '#313131')
    const titleFontSize = useBreakpointValue({ base: '0.9rem', md: '1rem' })
    return (
      <Box my={8} cursor="pointer">
        <Link href={`/blog/${id}`} passHref>
          <Flex
            borderRadius={10}
            borderColor="#dddddd"
            borderWidth="1px"
            p={4}
            backgroundColor={bg}
          >
            {thumbnail_url ? (
              <Flex
                borderRadius={9}
                overflow="hidden"
                width={'80px'}
                height={'80px'}
              >
                <Image
                  src={`https:${thumbnail_url}`}
                  alt={thumbnail_alt.length > 0 ? thumbnail_alt : '画像'}
                  width={'80px'}
                  height={'80px'}
                  objectFit="cover"
                />
              </Flex>
            ) : (
              <></>
            )}
            <Box ml={4} w={`calc(100% - 80px)`}>
              <Text fontWeight="bold" fontSize={titleFontSize}>
                {title}
              </Text>
              <Text noOfLines={2} fontSize={12} mt={2}>
                {description}
              </Text>
            </Box>
          </Flex>
        </Link>
      </Box>
    )
  },
)
