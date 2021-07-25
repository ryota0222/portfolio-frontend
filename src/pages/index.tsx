import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { HeadComponent } from '@/utils/header'

export default function Home() {
  const [isReverse, setIsReverse] = useState(false)
  return (
    <>
      <HeadComponent />
      <div></div>
    </>
  )
}
