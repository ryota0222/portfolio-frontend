import React, { memo, useMemo } from 'react'
import {} from '@/components/molecules/Breadcrumb/module.style'
import {
  useColorModeValue,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
  useToken,
} from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import useDesignSystem from '@/hooks/useDesignSystem'
import { Props } from './type'

export const Breadcrumb: React.FC<Props> = memo(({ tag, series }) => {
  const { TEXT_COLOR, isDark } = useDesignSystem()
  const [lightColor, darkColor] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.900', 'app-gray.50'],
  )
  const svgColor = useMemo(() => {
    return isDark ? darkColor : lightColor
  }, [isDark, darkColor, lightColor])
  const fontSize = useBreakpointValue({ base: '12px', md: 'small' })
  return (
    <ChakraBreadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">
          <SvgIcon name="home" color={svgColor} width="14px" height="14px" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* カテゴリ */}
      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/blog?tag=${tag.id}`}
          style={{ color: TEXT_COLOR, fontSize: fontSize, lineHeight: '16px' }}
          _hover={{
            textDecoration: 'none',
          }}
        >
          {tag.label}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* シリーズ */}
      {series && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/blog?tag=${tag.id}&series=${series.slug}&title=${series.name}`}
            style={{
              color: TEXT_COLOR,
              fontSize: fontSize,
              lineHeight: '16px',
            }}
            _hover={{
              textDecoration: 'none',
            }}
          >
            {series.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </ChakraBreadcrumb>
  )
})
