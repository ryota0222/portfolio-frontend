import React, { memo, useRef, useEffect } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'

interface Props extends FlexProps {
  move?: string
}

const ScrollRevealContainer: React.FC<Props> = memo(
  ({ children, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if (ref.current)
        scrollReveal().reveal(ref.current, {
          reset: false,
          delay: 400,
          opacity: 0,
          origin: 'bottom',
          distance: '40px',
        })
    }, [ref])
    return (
      <Flex
        w="100vw"
        minH={'80vh'}
        m="auto"
        flexDir="column"
        className="sr-container"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    )
  },
)

export default ScrollRevealContainer
