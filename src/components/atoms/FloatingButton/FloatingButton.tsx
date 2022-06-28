import React, { memo, useCallback } from 'react'
import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import throttle from '@/utils/throttle'
import { Props } from './type'

export const FloatingButton: React.FC<Props> = memo(
  ({ children, onClick, processing, width = 'auto' }) => {
    const bgColor = useColorModeValue('app-gray.100', 'app-gray.900')
    const shadowColor = useColorModeValue('app-gray.300', 'app-gray.800')
    /**
     * 処理中でない場合処理を実行
     */
    const handleClick = useCallback(() => {
      if (!processing) onClick()
    }, [processing, onClick])
    return (
      <Box position="relative" d="inline-block" w={width}>
        <Box
          aria-hidden={true}
          filter="blur(8px)"
          bgColor={shadowColor}
          w="80%"
          h="100%"
          position="absolute"
          bottom="-16%"
          left="50%"
          transform="translateX(-50%)"
          borderRadius={'md'}
          zIndex={-1}
        />
        <Button
          bg={bgColor}
          isDisabled={processing}
          onClick={throttle(handleClick)}
          borderRadius={'md'}
          w="full"
          px={4}
          py={2}
          _hover={{ bg: bgColor }}
          _active={{ bg: bgColor, outline: 'none', transform: 'scale(0.9)' }}
          _focus={{ bg: bgColor, outline: 'none' }}
        >
          {children}
        </Button>
      </Box>
    )
  },
)
