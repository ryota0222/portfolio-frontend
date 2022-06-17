import { FlexProps } from '@chakra-ui/react'

export interface Props {
  folder?: number
  file: number
  loading: boolean
  selected: boolean
}

export interface BlogMenuItemWrapperProps extends FlexProps {
  selected: boolean
}
