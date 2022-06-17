import { memo } from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { SvgIcon } from '@/components/atoms/SvgIcon'

interface Props {
  title: string
  id: string
}

export const InlineEmbeddedEntry: React.FC<Props> = memo(({ title, id }) => {
  const bg = useColorModeValue('#f6f6f6', '#313131')
  const color = useColorModeValue('#313131', '#f6f6f6')
  const border = useColorModeValue('#ddd', '#666')
  return (
    <Link href={`/blog/${id}`} passHref>
      <Flex
        borderRadius={8}
        borderColor={border}
        borderWidth="1px"
        backgroundColor={bg}
        display="inline-flex"
        px={2}
        alignItems="center"
        height="28px"
        cursor="pointer"
      >
        <SvgIcon name="link" color={color} width="18px" height="18px" />
        <Text fontWeight="bold" fontSize="0.6rem" ml={2}>
          {title}
        </Text>
      </Flex>
    </Link>
  )
})
