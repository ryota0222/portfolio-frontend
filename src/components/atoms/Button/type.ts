import { ReactElement, JSXElementConstructor } from 'react'
import { ButtonProps } from '@chakra-ui/react'

export type ButtonVariant = 'fill' | 'outline'
export type ButtonScheme = 'primary' | 'secondary' | 'danger'
export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '2xs' | 'xs'

export interface Props extends ButtonProps {
  /**
   * アイコン
   */
  icon?: ReactElement<any, string | JSXElementConstructor<any>>
  /**
   * スキーマ
   */
  scheme?: ButtonScheme
  /**
   * タイプ
   */
  variant?: ButtonVariant
  /**
   * trueなら角丸
   */
  round?: boolean
  /**
   * 処理中のフラグ
   */
  processing: boolean
  /**
   * クリックイベントの処理
   */
  onClick: (args?: unknown) => void
}
