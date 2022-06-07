import { TextProps } from '@chakra-ui/react'

export type Size = 'lg' | 'sm'
export interface Props extends TextProps {
  size: Size
}
