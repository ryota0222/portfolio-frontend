import { useMemo } from 'react'
import errorImage1 from '@/assets/commons/error/image_1.png'
import errorImage2 from '@/assets/commons/error/image_2.png'

// ランダムの最小値と最大値
const min = 1
const max = 2

const useErrorImage = (): [StaticImageData] => {
  const random: number = Math.floor(Math.random() * (max + 1 - min)) + min
  const selectedImage = useMemo(() => {
    switch (random) {
      case 1:
      default:
        return errorImage1
      case 2:
        return errorImage2
    }
  }, [random])
  return [selectedImage]
}

export default useErrorImage
