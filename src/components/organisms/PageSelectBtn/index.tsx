import { memo, useState, useMemo, useEffect } from 'react'
import { useColorModeValue, Text, ButtonProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import d_blog from '@/assets/animations/dark/blog.json'
import d_portfolio from '@/assets/animations/dark/portfolio.json'
import d_roadmap from '@/assets/animations/dark/roadmap.json'
import l_blog from '@/assets/animations/light/blog.json'
import l_portfolio from '@/assets/animations/light/portfolio.json'
import l_roadmap from '@/assets/animations/light/roadmap.json'
import { LottieControl } from '@/components/atoms/Animation'
import { Btn } from '@/components/atoms/Button'
import { PageName } from '@/types/interface'

export interface Props extends ButtonProps {
  /**
   * ページ名
   */
  name: PageName
  /**
   * 現在のパス
   */
  currentPage: string
  /**
   * 関数
   */
  handlePageTransition: () => void
}

export const PageSelectBtn = memo((props: Props) => {
  const route = useRouter()
  const [isReverse, setIsReverse] = useState(true)
  const btnScheme = useColorModeValue('white', 'dark')
  const color = useColorModeValue('dark', 'white')
  const portfolio = useColorModeValue(l_portfolio, d_portfolio)
  const roadmap = useColorModeValue(l_roadmap, d_roadmap)
  const blog = useColorModeValue(l_blog, d_blog)
  useEffect(() => {
    if (!~route?.pathname?.indexOf(props.name)) {
      setIsReverse(true)
    } else {
      setIsReverse(false)
    }
  }, [props.currentPage])
  // アニメーションデータ
  const animationData = useMemo(() => {
    switch (props.name) {
      case 'portfolio':
        return portfolio
      case 'blog':
        return blog
      case 'roadmap':
        return roadmap
      default:
        return null
    }
  }, [props.name])
  // 文字
  const text = useMemo(() => {
    switch (props.name) {
      case 'portfolio':
        return 'ポートフォリオ'
      case 'blog':
        return 'ブログ'
      case 'roadmap':
        return 'ロードマップ'
      default:
        return null
    }
  }, [props.name])
  const handleClick = () => {
    if (!~route?.pathname?.indexOf(props.name)) {
      props.handlePageTransition()
      setIsReverse(!isReverse)
    }
  }
  const _props: any = Object.assign({}, props)
  delete _props.currentPage
  delete _props.name
  delete _props.handlePageTransition
  // ニューモーフィズム かどうか
  const buttonStyle = ~route?.pathname?.indexOf(props.name) ? true : false
  return (
    <Btn
      neumorphic={buttonStyle}
      round={true}
      onClick={handleClick}
      colorScheme={btnScheme}
      color="black"
      _active={{}}
      _focus={{}}
      {..._props}
    >
      <LottieControl
        width="25px"
        height="25px"
        animationData={animationData}
        isReverse={isReverse}
      />
      <Text color={color} fontSize="14px" fontWeight="bold" ml={2}>
        {text}
      </Text>
    </Btn>
  )
})

PageSelectBtn.displayName = 'PageSelectBtn'
