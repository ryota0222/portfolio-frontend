import { useEffect } from 'react'
import ScrollHint from 'scroll-hint'
import HomeTemplate from '@/components/templates/Home'
import { HeadComponent } from '@/utils/head'

export default function Home() {
  useEffect(() => {
    new ScrollHint('.js-scrollable', {
      suggestiveShadow: true,
      i18n: {
        scrollable: 'スクロールできます',
      },
    })
  }, [])
  return (
    <>
      <HeadComponent />
      <HomeTemplate />
    </>
  )
}
