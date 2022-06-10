import React, { memo, useMemo } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { DEFAULT_SIZE } from './const'
import { Props } from './type'

export const BlogCategory: React.FC<Props> = memo(
  ({ size = DEFAULT_SIZE, icon, label }) => {
    const { TEXT_COLOR } = useDesignSystem()
    // style: Font Weight
    const fontWeight = useMemo(() => {
      return size === 'lg' ? 'bold' : 'normal'
    }, [size])
    const labelSize = useMemo(() => {
      return size === 'lg' ? 'md' : 'xs'
    }, [size])
    const marginRight = useMemo(() => {
      return size === 'lg' ? 2 : 1
    }, [size])
    return (
      <Flex alignItems="center">
        <Text fontSize={size} mr={marginRight}>
          {icon}
        </Text>
        <Text fontSize={labelSize} fontWeight={fontWeight} color={TEXT_COLOR}>
          {label}
        </Text>
      </Flex>
    )
  },
)
