import { useMemo } from 'react'
import { useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import GithubDarkImage from '@/assets/icons/github-dark.svg'
import GithubLightImage from '@/assets/icons/github-light.svg'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'
import { Props } from './type'

export const useCreativeItem = ({ title, description, github }: Props) => {
  const { isDark } = useDesignSystem()
  const [isSp] = useSp()
  const bgColor = useColorModeValue('white', 'app-gray.900')
  // 画像だけかどうか
  const isImageOnly = useMemo(() => {
    return !Boolean(title) || !Boolean(description)
  }, [title, description])
  // githubあるかどうか
  const isGithub = useMemo(() => Boolean(github), [github])
  // 画像のサイズ
  const imageSize = useBreakpointValue({
    base: 'calc(100vw / 3.1)',
    lg: 'calc(100vw / 14.1)',
    md: 'calc(100vw / 8.1)',
    sm: 'calc(100vw / 4.1)',
    xs: 'calc(100vw / 3.1)',
  })
  // githubのアイコン
  const githubIcon = useMemo(() => {
    return isDark ? GithubDarkImage : GithubLightImage
  }, [isDark])
  // githubのアイコンサイズ
  const githubIconSize = useMemo(() => {
    return isSp ? '16px' : '24px'
  }, [isSp])
  // タイトルのフォントサイズ
  const titleFontSize = useMemo(() => {
    return isSp ? 'xs' : 'sm'
  }, [isSp])
  // 説明文のフォントサイズ
  const descriptionFontSize = useMemo(() => {
    return isSp ? 'xs' : 'xs'
  }, [isSp])
  // 説明文の省略する行
  const descriptionNoOfLines = useMemo(() => {
    return isSp ? 2 : 3
  }, [isSp])

  return {
    isImageOnly,
    isGithub,
    imageSize,
    githubIcon,
    bgColor,
    titleFontSize,
    descriptionFontSize,
    descriptionNoOfLines,
    githubIconSize,
  }
}
