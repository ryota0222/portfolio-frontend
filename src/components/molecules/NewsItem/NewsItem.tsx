import React, { memo } from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import {
  NewsItemComponent,
  NewsItemText,
  NewsItemImage,
} from '@/components/molecules/NewsItem/module.style'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const NewsItem: React.FC<Props> = memo(
  ({ content, isTop, isBottom, date }) => {
    const { TEXT_COLOR } = useDesignSystem()
    const lineColor = useColorModeValue('app-gray.500', 'app-gray.50')
    console.log(content.image.url)
    return (
      <NewsItemComponent
        key={content.id}
        pl={8}
        pb={16}
        color={lineColor}
        is-top={isTop}
        is-end={isBottom}
      >
        {/* 日付 */}
        <NewsItemText mb="8px" fontWeight="bold" d="inline-block">
          {date}
        </NewsItemText>
        <br />
        {/* テキスト（あれば） */}
        {Boolean(content.text) && (
          <Text fontSize="0.9rem" mb={8} color={TEXT_COLOR}>
            {content.text}
          </Text>
        )}
        {/* 画像（あれば） */}
        {Boolean(content.image) && (
          <NewsItemImage
            src={`https:${content.image.url}`}
            alt={content.image.alt}
            borderRadius="lg"
          />
        )}
      </NewsItemComponent>
    )
  },
)
