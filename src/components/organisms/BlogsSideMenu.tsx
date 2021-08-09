import { memo } from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { InlineResponse2002 } from '@/apis/models'

interface Props {
  data: {
    monthly_archives?: unknown[]
    tag_archives?: unknown[]
    tags?: unknown[]
  }
}

const BlogsSideMenu: React.FC<Props> = memo(({ data }) => {
  console.log(data)
  const bg = useColorModeValue('#F0F0F0', '#252829')
  const textColor = useColorModeValue('dark', 'white')
  return (
    <Box w="full" bgColor={bg} h="full" boxSizing="border-box" p={3} pt={5}>
      {data.monthly_archives?.length > 0 && (
        <Box>
          <Text as="h2" colorScheme={textColor} fontWeight="bold" fontSize="sm">
            月別アーカイブ
          </Text>
          <Box>
            {data.monthly_archives.map((item, idx) => {
              const date = Object.keys(item)[0]
              const count = Object.values(item)[0]?.count ?? 0
              return (
                <Box key={idx}>
                  <Text>{date}</Text>
                  <Text>{count}</Text>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Box>
  )
})

BlogsSideMenu.displayName = 'BlogsSideMenu'

export default BlogsSideMenu
