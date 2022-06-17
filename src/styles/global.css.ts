import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { SCROLL_HEIGHT, FULL_HEIGHT } from '@/consts/style'

export const Container = styled(Box)`
  width: 100vw;
  min-height: ${FULL_HEIGHT};
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`

export const PageWrapper = styled(Box)`
  width: 100%;
  min-height: ${SCROLL_HEIGHT};
`

export const GradationText = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: white;
  font-family: 'Josefin Sans';
  line-height: 2.4rem;
  background: linear-gradient(60deg, #00a3ff, #0075ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const BlogCardWrapper = styled(Box)`
  display: inline-block;
  width: ${(props) => (props.width ? props.width : '100%')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  img {
    transition: transform 0.4s;
  }
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
  }
`

export const BlogSideMenuTitle = styled.span`
  display: inline-block;
  position: relative;
  &::before,
  &::after {
    content: '/';
    position: absolute;
    bottom: 0;
  }
  &::before {
    left: -14px;
    transform: scale(-1, 1);
  }
  &::after {
    right: -10px;
  }
`

export const UnVisibleScrollBar = styled(Box)`
  height: ${({ height }) => (height ? height : '100%')};
  display: block;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
