import React, { ReactNode, memo } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export interface Props {
  /**
   * ラベル
   */
  children: ReactNode
  /**
   * スキーマ
   */
  schema: string
}

export const MyButton = ({ children, schema }: Props) => {
  return <Button colorScheme={schema ?? 'blue'}>{children}</Button>
}
