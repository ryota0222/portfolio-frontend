import { useMemo, memo } from 'react'
import { Button, useColorModeValue } from '@chakra-ui/react'
import throttle from '@/utils/throttle'
import { Props } from './type'

export const Btn: React.FC<Props> = memo(
  ({ icon, scheme, variant, round, onClick, processing, children }) => {
    // color
    const hoverBgOutlineDanger = useColorModeValue('red.50', 'red.900')
    const hoverBgPrimary = useColorModeValue('app-gray.600', 'app-gray.800')
    const hoverBgOutlinePrimary = useColorModeValue(
      'app-gray.100',
      'app-gray.600',
    )
    // variant
    const _variant = useMemo(() => {
      if (variant) {
        return variant === 'fill' ? 'solid' : 'outline'
      }
      return 'solid'
    }, [variant])
    // scheme
    const _colorScheme = useMemo(() => {
      switch (scheme) {
        case 'danger':
          return 'red'
        case 'secondary':
          return 'white'
        case 'primary':
        default:
          return 'app-gray'
      }
    }, [scheme])
    // style: Border Radius
    const _borderRadius = useMemo(() => {
      return round ? 'full' : 'md'
    }, [round])
    // style: Background Color
    const _bgColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        return 'transparent'
      }
      // scheme: fill
      if (scheme === 'danger') {
        return 'red.500'
      } else if (scheme === 'secondary') {
        return 'white'
      }
      return 'app-gray.900'
    }, [scheme, variant])
    // style: Hover Background Color
    const _hoverBgColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        if (scheme === 'danger') {
          return hoverBgOutlineDanger
        }
        return hoverBgOutlinePrimary
      }
      // scheme: fill
      if (scheme === 'danger') {
        return 'red.600'
      } else if (scheme === 'secondary') {
        return 'app-gray.100'
      }
      return hoverBgPrimary
    }, [
      scheme,
      variant,
      hoverBgOutlineDanger,
      hoverBgPrimary,
      hoverBgOutlinePrimary,
    ])
    // style: Text Color
    const _textColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        if (scheme === 'danger') {
          return 'red.500'
        } else if (scheme === 'secondary') {
          return 'white'
        } else {
          return 'app-gray.900'
        }
      }
      // scheme: fill
      if (scheme === 'secondary') {
        return 'app-gray.900'
      }
      return 'white'
    }, [scheme, variant])
    // style: Border Width
    const _borderWidth = useMemo(() => {
      return variant === 'outline' ? '1px' : 'none'
    }, [variant])
    // style: Border Color
    const _borderColor = useMemo(() => {
      if (scheme === 'danger') {
        return 'red.500'
      } else if (scheme === 'secondary') {
        return 'white'
      }
      return 'app-gray.900'
    }, [scheme])
    return (
      <Button
        onClick={throttle(onClick)}
        leftIcon={icon}
        variant={_variant}
        colorScheme={_colorScheme}
        isLoading={processing}
        bg={_bgColor}
        color={_textColor}
        borderWidth={_borderWidth}
        borderRadius={_borderRadius}
        borderColor={_borderColor}
        _hover={{ bg: _hoverBgColor }}
      >
        {children}
      </Button>
    )
  },
)
