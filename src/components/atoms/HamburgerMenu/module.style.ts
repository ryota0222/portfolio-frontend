import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const HamburgerIcon = styled(Box)<{ width: string; height: string }>`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 0;
    height: 2px;
    border-radius: 2px;
    width: 100%;
    &:nth-of-type(1) {
      top: 2px;
    }
    &:nth-of-type(2) {
      top: 9px;
    }
    &:nth-of-type(3) {
      top: 16px;
    }
  }
  &.active {
    span {
      &:nth-of-type(1) {
        top: 0px;
        left: 0px;
        transform: translateY(8px) rotate(-45deg);
        width: 100%;
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        bottom: 0px;
        right: 0px;
        transform: translateY(-8px) rotate(45deg);
        width: 100%;
      }
    }
  }
`
