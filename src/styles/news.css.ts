import { Box, Text, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import { GRADIENT } from '@/consts/style'

export const NewsItemComponent = styled<{
  color: string
  'is-top': boolean
  'is-end': boolean
}>(Box)`
  min-height: 280px;
  border-left-width: 1px;
  border-left-color: ${(props) => props.color};
  border: ${(props) => (props['is-end'] ? 'none' : 'auto')};
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transform: translate(-50%, 0%);
    background: ${(props) => (props['is-top'] ? GRADIENT : props.color)};
  }
  &::before {
    transform-origin: center center;
    animation: ${(props) =>
      props['is-top'] ? `blink 1s infinite ease-out` : 'none'};
  }
  &::after {
  }
  @keyframes blink {
    0% {
      transform: translate(-50%, 0%);
      opacity: 0.8;
    }
    20% {
      transform: translate(-50%, 0%) scale(1.4);
      opacity: 0.6;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, 0%) scale(1.8);
      opacity: 0;
    }
  }
`

export const NewsItemText = styled(Text)`
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  background: ${GRADIENT};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const NewsItemImage = styled(Image)`
  border-radius: 24px;
  height: 240px;
`
