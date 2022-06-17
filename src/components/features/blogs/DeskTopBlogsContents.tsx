import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { BlogSearchForm } from '@/components/molecules/BlogSearchForm'

interface Props {
  search: string
  handleSearchChange: (event: any) => void
  clearSearch: (e: any) => void
  handleKeyPress: (e: any) => void
}

const DeskTopBlogsContents: React.FC<Props> = ({
  children,
  search,
  handleSearchChange,
  clearSearch,
  handleKeyPress,
}) => {
  const contentsFlex = useBreakpointValue({ base: 'space-between', md: 'auto' })
  return (
    <>
      {/* 検索フォーム */}
      <Flex
        m="auto"
        mt={4}
        mb={10}
        justifyContent={contentsFlex}
        position="relative"
        flex={1}
      >
        <BlogSearchForm
          value={search}
          clear={clearSearch}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
      </Flex>
      {children}
    </>
  )
}

export default DeskTopBlogsContents
