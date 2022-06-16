import { BoxProps } from '@chakra-ui/react'

export type PageName = 'top' | 'blog' | 'news'

export interface Props {
  pathname: string
}

export interface PageItemProps extends BoxProps {
  isactive: boolean
}
