import { memo, useState, useMemo, useEffect } from 'react'
import {
  useColorModeValue,
  Box,
  Flex,
  ScaleFade,
  Circle,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { SHOP_TYPE } from '@/consts/config'

export interface Props {
  /**
   * ショップのタイプ
   */
  type: string
  /**
   * trueなら活性
   */
  isActive: boolean
}

const Icon = ({ type, isActive }: Props) => {
  const iconNonActiveColor = useColorModeValue('#BABABA', '#BABABA')
  const iconColor = useMemo(() => {
    if (isActive) {
      return '#FFFFFF'
    } else {
      return iconNonActiveColor
    }
  }, [isActive])
  const iconName = useMemo(() => {
    switch (type) {
      case 'stamp':
      default:
        return 'balloon'
      case 'product':
        return 'shirt'
      case 'wallpaper':
        return 'phone'
    }
  }, [type])
  const iconBg = useMemo(() => {
    if (!isActive) {
      return 'transparent'
    } else {
      switch (type) {
        case 'stamp':
        default:
          return '#02C755'
        case 'product':
          return '#52ACFF'
        case 'wallpaper':
          return '#FF7373'
      }
    }
  }, [type, isActive])
  const iconShadow = useMemo(() => {
    if (!isActive) {
      return 'none'
    } else {
      switch (type) {
        case 'stamp':
        default:
          return '-1px -1px 3px 1px #02C75520, 1px 2px 6px #02C75540, inset 1px 0px 3px rgba(0, 162, 68, 0.88), inset 0px -2px 1px rgba(255, 255, 255, 0.4), inset 1px 1px 1px rgba(255, 255, 255, 0.63), inset 2px 3px 7px 2px #00B04A'
        case 'product':
          return '-1px -1px 3px 1px #52ACFF20, 1px 2px 6px #52ACFF40, inset 1px 0px 3px #52ACFF88, inset 0px -2px 1px rgba(255, 255, 255, 0.4), inset 1px 1px 1px rgba(255, 255, 255, 0.63), inset 2px 3px 7px 2px #0085FF'
        case 'wallpaper':
          return '-1px -1px 3px 1px #FF737320, 1px 2px 6px #FF737340, inset 1px 0px 3px #FF737388, inset 0px -2px 1px rgba(255, 255, 255, 0.4), inset 1px 1px 1px rgba(255, 255, 255, 0.63), inset 2px 3px 7px 2px #FF4A4A'
      }
    }
  }, [type, isActive])
  const size = useBreakpointValue({ base: '20px', sm: '32px' })
  const wrapperSize = useBreakpointValue({ base: '40px', sm: '56px' })
  return (
    <Circle width={wrapperSize} height={wrapperSize} position="relative">
      <ScaleFade initialScale={0} in={isActive}>
        <Circle
          width={wrapperSize}
          height={wrapperSize}
          bg={iconBg}
          boxShadow={iconShadow}
          zIndex="0"
        ></Circle>
      </ScaleFade>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <SvgIcon name={iconName} color={iconColor} width={size} height={size} />
      </Box>
    </Circle>
  )
}

export const ShopMenu = memo(() => {
  const bgScheme = useColorModeValue('white', 'black')
  const shadow = useColorModeValue(
    '4px 4px 12px rgba(0, 0, 0, 0.04), -4px -4px 10px 4px #FFFFFF',
    '4px 4px 12px #292929, -4px -4px 10px 4px #595959',
  )
  const width = useBreakpointValue({ base: '160px', md: '240px' })
  const height = useBreakpointValue({ base: '48px', md: '72px' })
  const [type, setType] = useState('stamp')
  return (
    <Box
      width={width}
      height={height}
      borderRadius={height}
      bg={bgScheme}
      boxShadow={shadow}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        paddingLeft="8px"
        paddingRight="8px"
        boxSizing="border-box"
      >
        {SHOP_TYPE.map((shopType, idx) => {
          return (
            <Box onClick={() => setType(shopType)} key={idx} cursor="pointer">
              <Icon type={shopType} isActive={shopType === type} />
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
})

ShopMenu.displayName = 'ShopMenu'
