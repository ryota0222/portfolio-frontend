import { Box } from '@chakra-ui/react'
import { BgText } from '@/components/atoms/BgText'
import Carrier from '@/components/features/top/Carrier'
import Creative from '@/components/features/top/Creative'
import FirstView from '@/components/features/top/FirstView'
import Links from '@/components/features/top/Links'
import { PageWrapper } from '@/styles/global.css'

const HomeTemplate: React.FC = () => {
  return (
    <PageWrapper>
      {/* 背景 */}
      <Box
        aria-hidden
        position="fixed"
        right={'-140px'}
        bottom={160}
        zIndex={-99999}
      >
        <BgText size={'lg'} />
      </Box>
      {/* ファーストビュー */}
      <FirstView />
      {/* キャリア */}
      <Carrier />
      {/* 製作物 */}
      <Creative />
      {/* 外部リンク一覧 */}
      <Links />
    </PageWrapper>
  )
}

export default HomeTemplate
