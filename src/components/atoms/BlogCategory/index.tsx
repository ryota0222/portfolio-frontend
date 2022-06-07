import React, { memo, useMemo } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const BlogCategory: React.FC<Props> = memo(
  ({ size = 'lg', icon, label }) => {
    const { TEXT_COLOR } = useDesignSystem()
    // style: Font Weight
    const fontWeight = useMemo(() => {
      return size === 'lg' ? 'bold' : 'normal'
    }, [size])
    const labelSize = useMemo(() => {
      return size === 'lg' ? 'md' : 'xs'
    }, [size])
    return (
      <Flex alignItems="center">
        <Text fontSize={size} mr={2}>
          {icon}
        </Text>
        <Text fontSize={labelSize} fontWeight={fontWeight} color={TEXT_COLOR}>
          {label}
        </Text>
      </Flex>
    )
  },
)
