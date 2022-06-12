import { memo } from 'react'
import {
  useColorModeValue,
  Box,
  Flex,
  Spacer,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import useDesignSystem from '@/hooks/useDesignSystem'
import { NeumorphicButtonProps } from './type'
import { useMenu } from './useMenu'

export const Menu = () => {
  const {
    textColor,
    panelBgColor,
    sectionBgColor,
    handleChangeFontSize,
    getDefaultValue,
    handleColorMode,
  } = useMenu()
  // アイコン
  const sunIcon = useColorModeValue(
    <FiSun color="#FF6847" size="12px" />,
    <FiSun color="#BCBCBC" size="12px" />,
  )
  const moonIcon = useColorModeValue(
    <FiMoon color="#BCBCBC" size="12px" />,
    <FiMoon color="#FFE600" size="12px" />,
  )

  return (
    <VStack
      width="90vw"
      maxWidth="300px"
      bgColor={panelBgColor}
      borderColor="app-gray.400"
      borderWidth={1}
      borderRadius="3xl"
      padding={4}
      spacing={4}
    >
      <Box
        w="100%"
        borderRadius="1.3rem"
        padding="16px"
        bgColor={sectionBgColor}
      >
        {/* テーマ */}
        <Text
          fontWeight="bold"
          colorScheme={textColor}
          d="block"
          fontSize="0.8rem"
          mb="10px"
        >
          テーマ
        </Text>
        <Flex>
          {/* ライトモード */}
          <Flex
            alignItems="center"
            w="50%"
            onClick={() => handleColorMode('light')}
            cursor="pointer"
          >
            <NeumorphicButton onClick={() => {}}>{sunIcon}</NeumorphicButton>
            <Text
              ml={2}
              fontWeight="bold"
              colorScheme={textColor}
              fontSize="0.8rem"
            >
              ライト
            </Text>
          </Flex>
          <Spacer />
          {/* ダークモード */}
          <Flex
            alignItems="center"
            w="50%"
            onClick={() => handleColorMode('dark')}
            cursor="pointer"
          >
            <NeumorphicButton onClick={() => {}}>{moonIcon}</NeumorphicButton>
            <Text
              ml={2}
              fontWeight="bold"
              colorScheme={textColor}
              fontSize="0.8rem"
            >
              ダーク
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        w="100%"
        borderRadius="1.3rem"
        padding="16px"
        bgColor={sectionBgColor}
      >
        {/* 文字サイズ */}
        <Text
          fontWeight="bold"
          colorScheme={textColor}
          d="block"
          fontSize="0.8rem"
          mb="10px"
        >
          文字サイズ
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Text
            mr={4}
            fontWeight="bold"
            colorScheme={textColor}
            fontSize="10px"
          >
            小
          </Text>
          <Box w="70%" h="20px" ml="-24px" d="flex">
            <Slider
              aria-label="文字サイズを変更"
              defaultValue={getDefaultValue()}
              onChangeEnd={handleChangeFontSize}
            >
              <SliderTrack
                bg="app-gray.300"
                height="20px"
                borderRadius="10px"
                width="calc(100% + 20px) !important"
                borderColor="app-gray.100"
                borderWidth={1}
              >
                <Box
                  w="calc(100% - 20px)"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                >
                  <SliderFilledTrack
                    bg="app-gray.900"
                    borderRadius="10px"
                    className="slide-filled"
                    boxSizing="content-box"
                    paddingRight={'18px'}
                  />
                </Box>
              </SliderTrack>
              <SliderThumb
                boxSize={4}
                _focus={{}}
                mx="10px"
                width="16px"
                height="16px"
                boxSizing="content-box"
                borderWidth="1px"
                borderColor="app-gray.900"
                boxShadow="none"
              />
            </Slider>
          </Box>
          <Text
            ml={2}
            fontWeight="bold"
            colorScheme={textColor}
            fontSize="20px"
          >
            大
          </Text>
        </Flex>
      </Box>
    </VStack>
  )
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = memo(
  ({ children, onClick }) => {
    const { neumorphicShadow } = useMenu()
    const { BG_COLOR } = useDesignSystem()
    return (
      <Flex
        d="inline-flex"
        boxShadow={neumorphicShadow}
        bgColor={BG_COLOR}
        borderRadius="full"
        justifyContent={'center'}
        alignItems={'center'}
        onClick={onClick}
        p="0"
        width="24px"
        height="24px"
      >
        {children}
      </Flex>
    )
  },
)
