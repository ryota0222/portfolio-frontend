import {
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { Tag } from '@/types/interface'

interface Props {
  tag: Tag
}

const BreadcrumbComponent: React.FC<Props> = ({ tag }) => {
  const fontColor = useColorModeValue('#25282A', 'white')
  const fontSize = useBreakpointValue({ base: '12px', md: 'sm' })
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">
          <SvgIcon name="home" color={fontColor} width="16px" height="14px" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/blog?category=${tag.tag_id}`}
          style={{ color: fontColor, fontSize: fontSize, lineHeight: '16px' }}
          _hover={{
            textDecoration: 'none',
          }}
        >
          {tag.label}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default BreadcrumbComponent
