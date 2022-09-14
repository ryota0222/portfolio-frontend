import styled from 'styled-components'
import { GRADIENT } from '@/consts/config'

const H1 = styled.h1``

const H2 = styled.h2`
  font-size: 1.6rem;
  margin-top: 72px;
  margin-bottom: 24px;
  font-weight: bold;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${GRADIENT};
    opacity: 0.6;
  }
`

const H3 = styled.h3`
  font-size: 1.4rem;
  margin-top: 64px;
  margin-bottom: 16px;
  font-weight: bold;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${GRADIENT};
    opacity: 0.6;
  }
`

const H4 = styled.h4`
  font-size: 1.3rem;
  margin-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${GRADIENT};
    opacity: 0.6;
  }
`

const H5 = styled.h5`
  font-size: 1.2rem;
  margin-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${GRADIENT};
    opacity: 0.6;
  }
`

const H6 = styled.h6`
  font-size: 1.1rem;
  margin-top: 48px;
  margin-bottom: 16px;
  font-weight: bold;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${GRADIENT};
    opacity: 0.6;
  }
`

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  margin: 2rem 0;
  @media (max-width: 30em) {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
  & > code {
    padding: 2px 8px;
    font-size: 0.8rem;
    margin: 0 4px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #dddddd10;
    color: var(--code);
  }
`

const ExternalLink = styled.a`
  text-decoration: underline;
`

const Bold = styled.b`
  background: linear-gradient(transparent 60%, #fddd0060 60%);
`

const UnOrderList = styled.ul`
  margin: 24px 0;
  padding-left: 32px;
  p {
    margin: 0.4rem 0;
  }
`

const OrderList = styled.ol`
  margin: 24px 0;
  padding-left: 32px;
  p {
    margin: 0.4rem 0;
  }
`

const BlockQuote = styled.blockquote`
  border-left: 3px solid #dddddd;
  padding-left: 10px;
  margin: 48px 0;
  p {
    margin: 0px 8px;
  }
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

const ImageDialog = styled.dialog`
  padding: 8px;
  background: transparent;
  &:modal {
    background-color: none;
    border-radius: 8px;
    border: none;
    padding: 0;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* Safari 用 */
  }
  img {
    object-fit: contain;
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
  ImageDialog,
}
