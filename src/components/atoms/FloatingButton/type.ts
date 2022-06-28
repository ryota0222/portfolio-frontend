import { ButtonProps } from '@chakra-ui/react'

export interface Props extends ButtonProps {
  onClick: (args?: unknown) => void
  processing: boolean
  width?: string
}
