import styled from 'styled-components'

const H1 = styled.h1``

const H2 = styled.h2`
  font-size: 1.6rem;
  padding-top: 72px;
  margin-bottom: 24px;
  font-weight: bold;
  display: inline-block;
  background: -webkit-linear-gradient(0deg, #6882ff, #00cbcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const H3 = styled.h3`
  font-size: 1.4rem;
  padding-top: 64px;
  margin-bottom: 16px;
  font-weight: bold;
  display: inline-block;
  background: -webkit-linear-gradient(0deg, #6882ff, #00cbcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const H4 = styled.h4`
  font-size: 1.3rem;
  padding-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  display: inline-block;
  background: -webkit-linear-gradient(0deg, #6882ff, #00cbcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const H5 = styled.h5`
  font-size: 1.2rem;
  padding-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  display: inline-block;
  background: -webkit-linear-gradient(0deg, #6882ff, #00cbcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const H6 = styled.h6`
  font-size: 1.1rem;
  padding-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  display: inline-block;
  background: -webkit-linear-gradient(0deg, #6882ff, #00cbcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  @media (max-width: 30em) {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
`

const ExternalLink = styled.a`
  text-decoration: underline;
`

const Bold = styled.b`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.6rem;
    left: 0;
    bottom: 0;
    background: #fddd0060;
    z-index: -1;
  }
`

const UnOrderList = styled.ul`
  margin: 24px 0;
  padding-left: 32px;
`

const OrderList = styled.ol`
  margin: 24px 0;
  padding-left: 32px;
`

const BlockQuote = styled.blockquote`
  border-left: 3px solid #dddddd;
  padding-left: 10px;
  margin: 24px 0;
`

const CodeWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 50px 0;
  pre {
    scrollbar-track-color: #272822;
    margin: 0;
    border: none;
    border-radius: 0;
    position: inherit;
    overflow-x: scroll;
    border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;
    -webkit-border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;
    &::-webkit-scrollbar-track {
      background: #272822;
    }
    &[class*='language-'].line-numbers {
      @media (max-width: 30em) {
        padding-left: 2.6rem;
      }
    }
    .token.operator {
      background: transparent;
    }
    padding-top: 20px;
    code {
      background: transparent;
      height: inherit;
      font-size: 1rem;
      @media (max-width: 30em) {
        font-size: 0.8rem;
        line-height: 1.3rem;
      }
    }
  }
  .code-toolbar {
    position: relative;
    .toolbar {
      position: absolute;
      opacity: 1 !important;
      z-index: 100;
      right: 8px;
      top: -34px;
      .toolbar-item {
        button {
          box-shadow: none;
          padding: 5px 10px;
          transition: color 0.3s;
          &:hover {
            color: white;
          }
          &:active {
            outline: none;
          }
        }
      }
    }
  }
  .head-component {
    width: 100%;
    height: 40px;
    border-bottom: solid 1px #666;
    background: #272822;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .btn-wrapper {
      padding-left: 20px;
      .btn {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        background: #ef4444;
        margin-right: 5px;
        &:nth-child(1) {
          background: #ef4444;
        }
        &:nth-child(2) {
          background: #fbbf24;
        }
        &:nth-child(3) {
          background: #4ade80;
        }
      }
    }
  }
`

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  ExternalLink,
  Bold,
  UnOrderList,
  OrderList,
  BlockQuote,
  CodeWrapper,
}
