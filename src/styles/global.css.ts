import styled from 'styled-components'
import { SCROLL_HEIGHT, FULL_HEIGHT } from '@/consts/style'

export const Container = styled.div`
  width: 100vw;
  min-height: ${FULL_HEIGHT};
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`

export const PageWrapper = styled.div`
  width: 100%;
  min-height: ${SCROLL_HEIGHT};
`

export const TitleLabel = styled.span`
  display: block;
  margin-left: ${(props) => {
    switch (props.type) {
      case 'h1':
        return 1
      case 'h2':
        return 1.5
      case 'h3':
        return 2
      case 'h4':
        return 2.5
      case 'h5':
        return 3
      case 'h6':
        return 3.5
      default:
        return 0
    }
  }}rem;
`

export const Rod = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    display: inline-block;
    height: ${(props) => (props.last ? '0px' : '100%')};
    width: 2px;
    background: #a1a1a1;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
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

export const BlogCardWrapper = styled.div`
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

export const UnVisibleScrollBar = styled.div`
  height: ${({ height }) => (height ? height : '100%')};
  display: block;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
