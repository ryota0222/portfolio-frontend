import styled from 'styled-components'

export const Animation = styled.div<{ width: string; height: string }>`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: hueRotate 5s infinite, rotate 2.5s infinite;
  @keyframes hueRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`
