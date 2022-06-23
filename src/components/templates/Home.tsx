import { useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { BgText } from '@/components/atoms/BgText'
import Carrier from '@/components/features/top/Carrier'
import FirstView from '@/components/features/top/FirstView'
import useSp from '@/hooks/useSp'
import { PageWrapper } from '@/styles/global.css'

const Creatives = dynamic(() => import('@/components/features/top/Creative'))
const Skills = dynamic(() => import('@/components/features/top/Skills'))
const Links = dynamic(() => import('@/components/features/top/Links'))

const HomeTemplate: React.FC = () => {
  const [isSp] = useSp()
  const bgPositionBottom = useMemo(() => {
    return isSp ? 100 : 160
  }, [isSp])
  return (
    <PageWrapper>
      {/* 背景 */}
      <Box
        aria-hidden
        position="fixed"
        right={'-140px'}
        bottom={bgPositionBottom}
        zIndex={-99999}
      >
        <BgText size={'lg'} />
      </Box>
      {/* ファーストビュー */}
      <FirstView />
      {/* キャリア */}
      <Carrier />
      {/* 製作物 */}
      <Creatives />
      {/* 技術 */}
      <Skills />
      {/* 外部リンク一覧 */}
      <Links />
    </PageWrapper>
  )
}

export default HomeTemplate
