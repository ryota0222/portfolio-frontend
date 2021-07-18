import { useState } from 'react'
import Lottie from 'react-lottie'
import defaultAnimationData from '../../../assets/animations/light/portfolio.json'

export interface Props {
  /**
   * 幅
   */
  width: string
  /**
   * 高さ
   */
  height: string
  /**
   * trueならループ
   */
  loop?: boolean
  /**
   * trueなら逆再生
   */
  isReverse?: boolean
  /**
   * アニメーションデータ
   */
  animationData?: unknown
}

export const LottieControl = ({
  width,
  height,
  animationData,
  loop,
  isReverse,
}: Props) => {
  const [isStopped, setIsStopped] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  // option
  const defaultOptions = {
    loop: loop ?? false,
    autoplay: true,
    animationData: animationData ?? defaultAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Lottie
      options={defaultOptions}
      width={'80px'}
      height={'80px'}
      isStopped={isStopped}
      isPaused={isPaused}
      direction={isReverse ? -1 : 1}
      ariaLabel="animation"
    />
  )
}
