import styled from 'styled-components'

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
