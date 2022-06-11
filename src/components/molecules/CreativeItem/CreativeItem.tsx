import React, { memo } from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Props } from './type'
import { useCreativeItem } from './useCreativeItem'

export const CreativeItem: React.FC<Props> = memo((props) => {
  const { image, title, description } = props
  const {
    isImageOnly,
    isGithub,
    imageSize,
    githubIcon,
    bgColor,
    titleFontSize,
    descriptionFontSize,
    descriptionNoOfLines,
    githubIconSize,
  } = useCreativeItem(props)
  return (
    <Flex bgColor={bgColor} borderRadius="lg" padding={2} d="inline-flex">
      <Box
        width={imageSize}
        height={imageSize}
        borderRadius="lg"
        overflow={'hidden'}
      >
        <Image src={image} alt={title} width={imageSize} height={imageSize} />
      </Box>
      {!isImageOnly && (
        <Flex flexDirection={'column'} ml={2} width={'120px'}>
          <Text fontWeight={'bold'} fontSize={titleFontSize}>
            {title}
          </Text>
          <Text
            noOfLines={descriptionNoOfLines}
            mb={2}
            fontSize={descriptionFontSize}
          >
            {description}
          </Text>
          <Spacer />
          {isGithub && (
            <Flex justifyContent={'flex-end'}>
              <Image
                src={githubIcon}
                alt="github"
                width={githubIconSize}
                height={githubIconSize}
              />
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  )
})
