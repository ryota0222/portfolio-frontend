import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { GRADIENT } from '@/consts/style'

export const PageItemWrapper = styled(Box)<{ isactive: number }>`
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
    transition: all 0.4s;
    transform: ${(props) =>
      props.isactive ? 'translate(-50%, -10px)' : 'translate(-50%, 0px)'};
    opacity: ${(props) => props.isactive};
  }
`
