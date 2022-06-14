import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { GRADIENT } from '@/consts/style'

export const PageItemWrapper = styled(Box)<{ isActive: boolean }>`
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${GRADIENT};
    top: 0;
    left: 50%;
    transform: ${(props) =>
      props.isActive ? 'translate(-50%, -10px)' : 'translate(-50%, 0px)'};
    opacity: ${(props) => (props.isActive ? 1 : 0)};
  }
`
