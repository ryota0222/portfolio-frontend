import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'
import { GRADIENT } from '@/consts/style'
import { BlogMenuItemWrapperProps } from './type'

export const BlogMenuItemWrapper = styled(Flex)<BlogMenuItemWrapperProps>`
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: ${GRADIENT};
    z-index: -1;
    display: ${(props) => (props.selected ? 'inline-block' : 'none')};
    border-radius: 0.8rem;
  }
`
