import React, { memo, useMemo } from 'react'
import {} from '@/components/molecules/BlogSearchForm/module.style'
import {
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
  useToken,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import useDesignSystem from '@/hooks/useDesignSystem'
import useSp from '@/hooks/useSp'
import { Props } from './type'

export const BlogSearchForm: React.FC<Props> = memo(
  ({ clear, value, onChange, onKeyPress }) => {
    const inputBg = useColorModeValue('app-gray.200', 'app-gray.800')
    const { isDark } = useDesignSystem()
    const [iconLightColor, iconDarkColor]: string[] = useToken(
      // the key within the theme, in this case `theme.colors`
      'colors',
      ['app-gray.500', 'white'],
    )
    const iconColor = useMemo(() => {
      return isDark ? iconDarkColor : iconLightColor
    }, [isDark, iconDarkColor, iconLightColor])
    const inputTextColor = useColorModeValue('app-gray.600', 'white')
    return (
      <InputGroup>
        <Input
          size="sm"
          bgColor={inputBg}
          color={inputTextColor}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          borderRadius="md"
          placeholder="検索"
        />
        <InputLeftElement height="32px">
          <FiSearch color={iconLightColor} size="16px" />
        </InputLeftElement>
        <InputRightElement height="32px">
          <Button
            backgroundColor="transparent"
            height="24px"
            width="24px"
            p={0}
            minW={0}
            onClick={clear}
          >
            <IoIosClose color={iconColor} size="24px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  },
)
