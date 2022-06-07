import React, { memo, useMemo } from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'
import GithubDarkImage from '@/assets/icons/github-dark.svg'
import GithubLightImage from '@/assets/icons/github-light.svg'
import LineImage from '@/assets/icons/line.png'
import QiitaImage from '@/assets/icons/qiita.png'
import SlideShareImage from '@/assets/icons/slide-share.png'
import TsunagaruDarkImage from '@/assets/icons/tsunagaru-dark.png'
import TsunagaruLightImage from '@/assets/icons/tsunagaru-light.png'
import TwitterDarkImage from '@/assets/icons/twitter-dark.svg'
import TwitterLightImage from '@/assets/icons/twitter-light.svg'
import WcmDarkImage from '@/assets/icons/wcm-dark.png'
import WcmLightImage from '@/assets/icons/wcm-light.png'
import ZennImage from '@/assets/icons/zenn.svg'
import useDesignSystem from '@/hooks/useDesignSystem'
import { SERVICE_LINK_MAP, SERVICE_NAME_MAP } from './const'
import { Props } from './type'

export const ExternalServiceLink: React.FC<Props> = memo(({ type }) => {
  const { isDark, TEXT_COLOR } = useDesignSystem()
  // アイコンデータ
  const icon = useMemo(() => {
    switch (type) {
      case 'qiita':
        return QiitaImage
      case 'twitter':
        return isDark ? TwitterDarkImage : TwitterLightImage
      case 'zenn':
        return ZennImage
      case 'github':
        return isDark ? GithubDarkImage : GithubLightImage
      case 'tsunagaru':
        return isDark ? TsunagaruDarkImage : TsunagaruLightImage
      case 'line-creators-market':
        return LineImage
      case 'slide-share':
        return SlideShareImage
      case 'wcm':
        return isDark ? WcmDarkImage : WcmLightImage
      default:
        return null
    }
  }, [type, isDark])
  // サービス名
  const serviceName = useMemo(() => {
    return SERVICE_NAME_MAP[type] || ''
  }, [type])
  // サービスリンク
  const serviceLink = useMemo(() => {
    return SERVICE_LINK_MAP[type] || ''
  }, [type])
  return (
    <Link href={serviceLink} isExternal>
      <Flex d="inline-flex">
        <Image src={icon} alt={serviceName} width="24px" height="24px" />
        <Box
          d="inline-block"
          textDecoration={'underline'}
          ml={2}
          color={TEXT_COLOR}
        >
          {serviceName}
        </Box>
      </Flex>
    </Link>
  )
})
