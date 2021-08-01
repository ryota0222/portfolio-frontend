import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`

export const PageWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 72px);
`

export const TitleLabel = styled.span`
  display: block;
  margin-left: ${(props) => {
    switch (props.type) {
      case 'h1':
        return 1.5
      case 'h2':
        return 2.5
      case 'h3':
        return 3.5
      case 'h4':
        return 4.5
      case 'h5':
        return 5.5
      case 'h6':
        return 6.5
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
  width: 40vw;
  max-width: 280px;
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
