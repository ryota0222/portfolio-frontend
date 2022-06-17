import React, { memo, useMemo } from 'react'
import { Flex, Skeleton, useColorModeValue } from '@chakra-ui/react'
import { BlogContentsCounter } from '@/components/atoms/BlogContentsCounter'
import useDesignSystem from '@/hooks/useDesignSystem'
import { BlogMenuItemWrapper } from './module.style'
import { Props } from './type'

export const BlogMenuItem: React.FC<Props> = memo(
  ({ folder, file, children, loading, selected }) => {
    const { BLOG_SIDE_MENU_BG, isDark } = useDesignSystem()
    const hoverBg = useColorModeValue('app-gray.300', 'app-gray.700')
    const startColor = useMemo(() => {
      return isDark ? 'app-gray.600' : 'app-gray.300'
    }, [isDark])
    const endColor = useMemo(() => {
      return isDark ? 'app-gray.500' : 'app-gray.500'
    }, [isDark])
    // ローディング中
    if (loading) {
      return (
        <Flex
          d="inline-flex"
          px={4}
          py={3}
          maxW="300px"
          w="full"
          justifyContent={'space-between'}
        >
          <Skeleton
            width="60%"
            height="20px"
            startColor={startColor}
            endColor={endColor}
          />
          <Skeleton
            width="20px"
            height="20px"
            startColor={startColor}
            endColor={endColor}
          />
        </Flex>
      )
    }
    return (
      <BlogMenuItemWrapper
        borderRadius={'xl'}
        _hover={{ bg: hoverBg }}
        bg={BLOG_SIDE_MENU_BG}
        d="inline-flex"
        px={4}
        py={3}
        maxW="300px"
        w="full"
        justifyContent={'space-between'}
        position="relative"
        selected={selected}
      >
        {children}
        <BlogContentsCounter folder={folder} file={file} />
      </BlogMenuItemWrapper>
    )
  },
)
