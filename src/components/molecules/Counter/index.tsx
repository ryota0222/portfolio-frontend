import { memo, useMemo } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Bad from '@/assets/blogs/bad.svg'
import Good from '@/assets/blogs/good.svg'
import { CounterType, Size } from '@/types/interface'

export interface Props {
  /**
   * カウンターのタイプ
   */
  type: CounterType
  /**
   *数値
   */
  count: number
  /**
   * カウント済みかどうかのフラグ
   */
  active: boolean
}

export const Icon = memo(({ type }: { type: CounterType }) => {
  if (type === 'good') {
    return <Image src={Good} alt="ロゴ" width={'40px'} height={'40px'} />
  } else if (type === 'bad') {
    return <Image src={Bad} alt="ロゴ" width={'40px'} height={'40px'} />
  } else {
    return <></>
  }
})

export const Counter = memo(({ type, count, active }: Props) => {
  // 文字色
  const textColor = useMemo(() => {
    if (type === 'good') {
      return '#50B5FF'
    } else {
      return '#FF7A50'
    }
  }, [type])
  // 活性状態かどうかのスタイル
  const activeStyle = useMemo(() => {
    if (active) {
      return 'grayScale(0)'
    } else {
      return 'grayScale(1)'
    }
  }, [active])
  return (
    <Flex filter={activeStyle} direction="column" alignItems="center">
      <Icon type={type} />
      <Text
        fontFamily="'Josefin Sans'"
        color={textColor}
        fontWeight="bold"
        fontSize="1rem"
      >
        {count > 0 ? count : 0}
      </Text>
    </Flex>
  )
})

Counter.displayName = 'Counter'
Icon.displayName = 'Icon'
