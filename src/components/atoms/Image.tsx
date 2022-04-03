import { useEffect, useState, useCallback, useMemo } from 'react'
import NextImage from 'next/image'
import { BLOG_IMAGE_MAX_WIDTH } from '@/consts/config'
import useBlogContentWidth from '@/hooks/useBlogContentWidth'

interface Props {
  /**
   * 画像URL
   */
  url: string
  /**
   * タイトル
   */
  title: string
}

const ImageComponent = ({ url, title }) => {
  const [w, h, setImageW, setImageH, clientW, ratio] = useBlogContentWidth()
  // 画像の幅と高さを取得
  useEffect(() => {
    const element = new Image()
    element.onload = function () {
      setImageW(element.naturalWidth)
      setImageH(element.naturalHeight)
    }
    element.src = url
  }, [url])
  // TODO: styled-componentsに移植
  return (
    <div
      style={{
        width: '100%',
        height: `calc(${ratio} * ${
          clientW > BLOG_IMAGE_MAX_WIDTH ? BLOG_IMAGE_MAX_WIDTH : clientW
        }px)`,
        position: 'relative',
        maxWidth: `${BLOG_IMAGE_MAX_WIDTH}px`,
      }}
    >
      <NextImage src={url} alt={title} layout="fill" objectFit="contain" />
    </div>
  )
}

export default ImageComponent
