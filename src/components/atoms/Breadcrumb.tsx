import {
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { Series, Tag } from '@/types/interface'

interface Props {
  tag: Tag
  series: null | Series
}

const BreadcrumbComponent: React.FC<Props> = ({ tag, series }) => {
  console.log(series)
  const fontColor = useColorModeValue('#25282A', 'white')
  const fontSize = useBreakpointValue({ base: '12px', md: 'small' })
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">
          <SvgIcon name="home" color={fontColor} width="14px" height="14px" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* カテゴリ */}
      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/blog?tag=${tag.id}`}
          style={{ color: fontColor, fontSize: fontSize, lineHeight: '16px' }}
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
            style={{ color: fontColor, fontSize: fontSize, lineHeight: '16px' }}
            _hover={{
              textDecoration: 'none',
            }}
          >
            {series.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  )
}

export default BreadcrumbComponent
