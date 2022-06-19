import { BoxProps, FlexProps } from '@chakra-ui/react'

export type PageName = 'top' | 'blog' | 'news'

export interface Props extends FlexProps {
  pathname: string
}

export interface PageItemProps extends BoxProps {
  isactive: boolean
}
