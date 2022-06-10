import React, { memo, useMemo } from 'react'
import { Text, Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import Image from 'next/image'
import { BlogCategory } from '@/components/atoms/BlogCategory'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const BlogCard: React.FC<Props> = memo(
  ({ title, icon, label, loading, image }) => {
    const { TEXT_COLOR, isDark } = useDesignSystem()
    const startColor = useMemo(() => {
      return isDark ? 'app-gray.600' : 'app-gray.300'
    }, [isDark])
    const endColor = useMemo(() => {
      return isDark ? 'app-gray.500' : 'app-gray.500'
    }, [isDark])
    // 取得中
    if (loading) {
      return (
        <Box>
          <Skeleton
            width="200px"
            height="150px"
            borderRadius="md"
            startColor={startColor}
            endColor={endColor}
          />
          <Skeleton
            width="200px"
            height="16px"
            mt={2}
            startColor={startColor}
            endColor={endColor}
          />
          <Skeleton
            width="60px"
            height="16px"
            mt={2}
            startColor={startColor}
            endColor={endColor}
          />
        </Box>
      )
    }
    return (
      <Box>
        {/* 画像 */}
        <Box
          width={'200px'}
          height={'150px'}
          borderRadius="md"
          overflow={'hidden'}
        >
          <Image
            src={image}
            alt={title}
            width={'200px'}
            height={'150px'}
            objectFit={'cover'}
            loading={'lazy'}
            quality={100}
          />
        </Box>
        <Text
          color={TEXT_COLOR}
          fontWeight="bold"
          noOfLines={2}
          mt={2}
          mb={1}
          maxW="200px"
          fontSize="sm"
        >
          {title}
        </Text>
        <BlogCategory icon={icon} label={label} size="sm" />
      </Box>
    )
  },
)
