import { ReactNode, useMemo, memo } from 'react'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'
import { ButtonVariant, ButtonScheme } from '@/types/interface'

export interface Props extends ButtonProps {
  /**
   * ラベル
   */
  children: ReactNode
  /**
   * スキーマ
   */
  scheme: ButtonScheme
  /**
   * タイプ
   */
  variant?: ButtonVariant
  /**
   * trueなら角丸
   */
  round?: boolean
  /**
   * trueなら影をつける
   */
  floating?: boolean
  /**
   * trueならニューモーフィズムにする
   */
  neumorphic?: boolean
}

export const Btn = memo((props: Props) => {
  const { scheme } = props
  const n_bg = useColorModeValue('#FBFBFB', '#404040')
  const n_boxShadow = useColorModeValue(
    '4px 4px 10px rgba(0, 0, 0, 0.08), -4px -4px 15px 9px #FFFFFF',
    '4px 4px 10px #292929, -4px -4px 20px 4px #505050',
  )
  const _props = Object.assign({}, props)
  delete _props.children
  delete _props.scheme
  delete _props.round
  delete _props.floating
  delete _props.neumorphic
  // schemeの値取得
  const [color, bg] = useMemo(() => {
    switch (scheme) {
      case 'primary':
      default:
        return ['white', 'blue.900']
      case 'secondary':
        return ['#666', 'white']
      case 'danger':
        return ['white', 'red.400']
      case 'info':
        return ['white', 'blue.300']
    }
  }, [scheme])
  // round
  if (props.round) {
    _props.borderRadius = '999999px'
  }
  // neumorphicの場合、デザイン固定
  if (props.neumorphic) {
    _props.bg = n_bg
    _props.boxShadow = n_boxShadow
    _props._hover = {}
    _props._active = {}
  } else {
    // variant
    if (props.variant === 'solid') {
      _props.bg = bg
      _props.color = color
      switch (scheme) {
        case 'primary':
        default:
          _props._hover = { filter: 'brightness(1.2)' }
          break
        case 'secondary':
          _props._hover = { filter: 'brightness(0.9)' }
          break
        case 'danger':
          _props.colorScheme = 'red'
          break
        case 'info':
          _props.colorScheme = 'blue'
          break
      }
    }
    if (props.variant === 'outline') {
      switch (scheme) {
        case 'primary':
        default:
          _props.colorScheme = 'gray'
          break
        case 'secondary':
          _props.colorScheme = 'Cyan'
          break
        case 'danger':
          _props.colorScheme = 'red'
          break
        case 'info':
          _props.colorScheme = 'blue'
          break
      }
    }
    // floating
    if (props.floating) {
      let boxShadow
      switch (scheme) {
        case 'primary':
        default:
          boxShadow = '0px 27px 17px -14px #1A365D50'
          break
        case 'secondary':
          boxShadow = '0px 27px 17px -14px #A0AEC050'
          break
        case 'danger':
          boxShadow = '0px 27px 17px -14px #F5656550'
          break
        case 'info':
          boxShadow = '0px 27px 17px -14px #4DC8F150'
          break
      }
      _props.boxShadow = boxShadow
    }
  }
  return <Button {..._props}>{props.children}</Button>
})
