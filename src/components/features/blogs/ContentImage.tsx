import { memo } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import ImageComponent from '@/components/atoms/Image'

interface ContentImageProps {
  url: string
  title: string
}

export const ContentImage: React.FC<ContentImageProps> = memo(
  ({ url, title }) => {
    const shadow = useColorModeValue('#00000010', '#00000080')
    return (
      <Box m="40px auto" maxW="600px">
        <Box boxShadow={`0 8px 40px ${shadow}`} maxW="600px">
          <ImageComponent url={url} title={title} />
        </Box>
      </Box>
    )
  },
)
