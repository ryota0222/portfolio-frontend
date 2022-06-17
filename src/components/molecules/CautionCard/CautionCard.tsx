import { memo, useMemo } from 'react'
import {
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { SystemProps } from '@chakra-ui/system'
import Image from 'next/image'
import DarkError from '@/assets/blogs/caution/dark/error.png'
import DarkInfo from '@/assets/blogs/caution/dark/info.png'
import DarkWarning from '@/assets/blogs/caution/dark/warning.png'
import LightError from '@/assets/blogs/caution/light/error.png'
import LightInfo from '@/assets/blogs/caution/light/info.png'
import LightWarning from '@/assets/blogs/caution/light/warning.png'
import { Props } from './type'

export const CautionCard: React.FC<Props> = memo(({ type, children }) => {
  // 画像
  const infoImage = useColorModeValue(LightInfo, DarkInfo)
  const warningImage = useColorModeValue(LightWarning, DarkWarning)
  const errorImage = useColorModeValue(LightError, DarkError)
  const imageData = useMemo(() => {
    switch (type) {
      case 'info':
        return infoImage
      case 'warning':
        return warningImage
      case 'error':
        return errorImage
      default:
        return null
    }
  }, [type, infoImage, warningImage, errorImage])
  // 背景色
  const infoBgColor = useColorModeValue('#E1F6FF', '#556065')
  const warningBgColor = useColorModeValue('#FFF8E1', '#635F53')
  const errorBgColor = useColorModeValue('#FFE1E1', '#695959')
  const bgColor = useMemo(() => {
    switch (type) {
      case 'info':
        return infoBgColor
      case 'warning':
        return warningBgColor
      case 'error':
        return errorBgColor
      default:
        return null
    }
  }, [type, infoBgColor, warningBgColor, errorBgColor])
  const fontSize = useBreakpointValue({ base: '0.8rem', md: '0.9rem' })
  const textBox = useBreakpointValue({ base: '100%', md: 'calc(100% - 60px)' })
  const textMargin = useBreakpointValue({ base: 0, md: 2 })
  const boxPy = useBreakpointValue({ base: 2, md: 4 })
  const direction: SystemProps['flexDirection'] = useBreakpointValue({
    base: 'column',
    md: 'row',
  })
  return (
    <Flex
      direction={direction}
      alignItems="center"
      backgroundColor={bgColor}
      px={4}
      py={boxPy}
    >
      {imageData && (
        <Image src={imageData} alt="画像" width="48px" height="48px" />
      )}
      <Box w={textBox} ml={textMargin}>
        <Text
          fontSize={fontSize}
          style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
        >
          {children}
        </Text>
      </Box>
    </Flex>
  )
})

CautionCard.displayName = 'CautionCard'
