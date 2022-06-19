import React, { memo, useMemo } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { SKILL_LIST } from '@/consts/top'
import useDesignSystem from '@/hooks/useDesignSystem'
import { SkillId } from '@/types/top'

interface Props {
  id: SkillId
  alt?: string
  width?: string | number
  height?: string | number
}

const SkillIcon: React.FC<Props> = memo(({ id, alt, width, height }) => {
  const { isDark } = useDesignSystem()
  const altText = useMemo(() => alt || id, [alt, id])
  if (id === 'react-js') {
    return (
      <Image
        src="/images/skills/react.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'vue-js') {
    return (
      <Image
        src="/images/skills/vue.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'next-js') {
    return (
      <Image
        src={
          isDark
            ? '/images/skills/next-dark.svg'
            : '/images/skills/next-light.svg'
        }
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'nuxt-js') {
    return (
      <Image
        src="/images/skills/nuxt.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'typescript') {
    return (
      <Image
        src="/images/skills/typescript.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'sass') {
    return (
      <Image
        src="/images/skills/sass.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'styled-components') {
    return (
      <Box w={width} h={height}>
        <Text fontSize={width} lineHeight={width}>
          💅
        </Text>
      </Box>
    )
  }
  if (id === 'redux-toolkit') {
    return (
      <Image
        src="/images/skills/redux-toolkit.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'swr') {
    return (
      <Image
        src={
          isDark
            ? '/images/skills/swr-dark.svg'
            : '/images/skills/swr-light.svg'
        }
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'node-js') {
    return (
      <Image
        src="/images/skills/nodejs.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'express') {
    return (
      <Image
        src={
          isDark
            ? '/images/skills/express-dark.svg'
            : '/images/skills/express-light.svg'
        }
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'flask') {
    return (
      <Image
        src="/images/skills/flask.png"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'adobe-xd') {
    return (
      <Image
        src="/images/skills/xd.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'figma') {
    return (
      <Image
        src="/images/skills/figma.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'git') {
    return (
      <Image
        src="/images/skills/git.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'mysql') {
    return (
      <Image
        src="/images/skills/mysql.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'firebase') {
    return (
      <Image
        src="/images/skills/firebase.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'netlify') {
    return (
      <Image
        src="/images/skills/netlify.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'vercel') {
    return (
      <Image
        src={
          isDark
            ? '/images/skills/vercel-dark.svg'
            : '/images/skills/vercel-light.svg'
        }
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'storybook') {
    return (
      <Image
        src="/images/skills/storybook.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'contentful') {
    return (
      <Image
        src="/images/skills/contentful.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'microcms') {
    return (
      <Image
        src="/images/skills/microcms.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'swagger') {
    return (
      <Image
        src="/images/skills/swagger.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  if (id === 'sentry') {
    return (
      <Image
        src="/images/skills/sentry.svg"
        alt={altText}
        width={width}
        height={height}
        objectFit="contain"
      />
    )
  }
  return <></>
})

export default SkillIcon
