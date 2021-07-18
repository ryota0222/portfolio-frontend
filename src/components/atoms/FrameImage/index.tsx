import { ReactNode, memo } from 'react'
import { Box, BoxProps, useColorModeValue, Skeleton } from '@chakra-ui/react'
import Image from 'next/image'

export interface Props extends BoxProps {
  /**
   * ラベル
   */
  imageData: StaticImageData | null
  /**
   * オルトテキスト
   */
  alt?: string
  /**
   * 幅
   */
  imageWidth?: string
  /**
   * 幅
   */
  imageHeight?: string
}

export const FrameImage = memo((props: Props) => {
  const bg = useColorModeValue('#FBFBFB', '#404040')
  const shadow = useColorModeValue(
    '-4px -4px 4px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.08)',
    '-4px -4px 4px #585858, 4px 4px 8px rgba(41, 41, 41, 0.94)',
  )
  const _props = Object.assign({}, props)
  delete _props.imageData
  delete _props.alt
  delete _props.imageWidth
  delete _props.imageHeight
  return (
    <Box
      bg={bg}
      boxShadow={shadow}
      p={3}
      borderRadius="12px"
      display="inline-block"
      {..._props}
    >
      {props.imageData === null ? (
        <Skeleton
          width={props.imageWidth ?? '100px'}
          height={props.imageHeight ?? '100px'}
        />
      ) : (
        <Image
          src={props.imageData}
          alt={props.alt ?? '画像'}
          width={props.imageWidth ?? '100px'}
          height={props.imageHeight ?? '100px'}
        />
      )}
    </Box>
  )
})

FrameImage.displayName = 'FrameImage'
