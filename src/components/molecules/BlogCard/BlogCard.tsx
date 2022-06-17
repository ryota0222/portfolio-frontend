import React, { memo } from 'react'
import { Text, Box, Skeleton, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { BlogCategory } from '@/components/atoms/BlogCategory'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'
import { useBlogCard } from './useBlogCard'

export const BlogCard: React.FC<Props> = memo(
  ({ title, icon, label, loading, image }) => {
    const { TEXT_COLOR } = useDesignSystem()
    const styles = useBlogCard()
    // 取得中
    if (loading) {
      return (
        <Flex flexDirection={styles.wrapperFlexDir}>
          <Skeleton
            width={styles.imageSize.width}
            height={styles.imageSize.height}
            borderRadius="md"
            startColor={styles.skeltonColor.start}
            endColor={styles.skeltonColor.end}
          />
          <Box sx={styles.textWrapperStyle}>
            <Skeleton
              width={styles.textMaxW}
              height="16px"
              mt={2}
              startColor={styles.skeltonColor.start}
              endColor={styles.skeltonColor.end}
            />
            <Skeleton
              width="60px"
              height="16px"
              mt={2}
              startColor={styles.skeltonColor.start}
              endColor={styles.skeltonColor.end}
            />
          </Box>
        </Flex>
      )
    }
    return (
      <Flex flexDirection={styles.wrapperFlexDir}>
        {/* 画像 */}
        <Box
          width={styles.imageSize.width}
          height={styles.imageSize.height}
          borderRadius="md"
          overflow={'hidden'}
        >
          <Image
            src={image}
            alt={title}
            width={styles.imageSize.width}
            height={styles.imageSize.height}
            objectFit={'cover'}
            loading={'lazy'}
            quality={100}
          />
        </Box>
        <Box sx={styles.textWrapperStyle}>
          <Text
            color={TEXT_COLOR}
            fontWeight="bold"
            noOfLines={2}
            mb={1}
            maxW={styles.textMaxW}
            fontSize="sm"
          >
            {title}
          </Text>
          <BlogCategory icon={icon} label={label} size="sm" />
        </Box>
      </Flex>
    )
  },
)
