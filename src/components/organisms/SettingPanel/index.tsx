import {
  useColorModeValue,
  Box,
  Flex,
  Switch,
  Spacer,
  Text,
  useBoolean,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorMode,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Btn } from '@/components/atoms/Button'
import { Panel } from '@/components/atoms/Panel'
import { Theme } from '@/types/interface'
import {
  getFontSizeFromPercentage,
  setFontSize,
  getFontSize,
  calculateFontSizePercentage,
} from '@/utils/fontSize'

export const SettingPanel = () => {
  const panelSectionBg = useColorModeValue('#F5F5F5', '#484848')
  const fontColor = useColorModeValue('black', 'white')
  const [animation, setAnimation] = useBoolean()
  const { colorMode, toggleColorMode } = useColorMode()
  // アイコン
  const sunIcon = useColorModeValue(
    <FiSun color="#FF6847" size="12px" />,
    <FiSun color="#BCBCBC" size="12px" />,
  )
  const moonIcon = useColorModeValue(
    <FiMoon color="#BCBCBC" size="12px" />,
    <FiMoon color="#FFE600" size="12px" />,
  )
  const handleChange = () => {
    setAnimation.toggle()
  }
  // 文字サイズの変更
  const handleChangeFontSize = (e) => {
    // 文字サイズの取得
    const fontSize = getFontSizeFromPercentage(e)
    // 保存
    setFontSize(fontSize)
  }
  // 初期値のパーセントの取得
  const getDefaultValue = () => {
    const fontSize = getFontSize()
    return calculateFontSizePercentage(fontSize)
  }
  // カラーモード変更
  const handleColorMode = (type: Theme) => {
    if (colorMode !== type) {
      toggleColorMode()
    }
  }
  return (
    <Panel width="90vw" maxWidth="300px">
      <Box
        bg={panelSectionBg}
        w="100%"
        borderRadius="1.3rem"
        px="4"
        py="3"
        mb="2"
      >
        {/* テーマ */}
        <Text
          fontWeight="bold"
          colorScheme={fontColor}
          d="block"
          fontSize="0.8rem"
          mb="10px"
        >
          テーマ
        </Text>
        <Flex>
          {/* ライトモード */}
          <Flex alignItems="center" w="50%">
            <Btn
              neumorphic
              round
              onClick={() => handleColorMode('light')}
              p="0"
              width="24px"
              height="24px"
              minWidth="24px"
              _active={{}}
              _focus={{}}
            >
              {sunIcon}
            </Btn>
            <Text
              ml={2}
              fontWeight="bold"
              colorScheme={fontColor}
              fontSize="0.8rem"
            >
              ライト
            </Text>
          </Flex>
          <Spacer />
          {/* ダークモード */}
          <Flex alignItems="center" w="50%">
            <Btn
              neumorphic
              round
              onClick={() => handleColorMode('dark')}
              p="0"
              width="24px"
              height="24px"
              minWidth="24px"
              _active={{}}
              _focus={{}}
            >
              {moonIcon}
            </Btn>
            <Text
              ml={2}
              fontWeight="bold"
              colorScheme={fontColor}
              fontSize="0.8rem"
            >
              ダーク
            </Text>
          </Flex>
        </Flex>
      </Box>
      {/* <Box bg={panelSectionBg} w="100%" borderRadius="1.3rem" px="4" py="3" mb="2"> */}
      {/* アニメーション */}
      {/* <Text fontWeight="bold" colorScheme={fontColor} d="block" fontSize="0.8rem" mb="10px">アニメーション</Text>
                  <Flex>
                  <Switch size="md"　colorScheme="blue" defaultChecked={true} onChange={handleChange} />
                  <Text ml={2} fontWeight="bold" colorScheme={fontColor} fontSize="0.8rem">{animation ? 'あり' : 'なし'}</Text>
                  </Flex>
            </Box> */}
      <Box bg={panelSectionBg} w="100%" borderRadius="1.3rem" px="4" py="3">
        {/* 文字サイズ */}
        <Text
          fontWeight="bold"
          colorScheme={fontColor}
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
            colorScheme={fontColor}
            fontSize="10px"
          >
            あ
          </Text>
          <Box w="75%" h="20px" ml="-24px" d="flex">
            <Slider
              aria-label="slider-ex-4"
              defaultValue={getDefaultValue()}
              onChangeEnd={handleChangeFontSize}
            >
              <SliderTrack
                bg="#E5E5E5"
                height="20px"
                borderRadius="10px"
                width="calc(100% + 20px) !important"
              >
                <Box
                  w="calc(100% - 20px)"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                >
                  <SliderFilledTrack
                    bg="#3EB9FF"
                    borderRadius="10px"
                    className="slide-filled"
                  />
                </Box>
              </SliderTrack>
              <SliderThumb
                boxSize={4}
                _focus={{}}
                mx="10px"
                width="16px"
                height="16px"
              />
            </Slider>
          </Box>
          <Text
            ml={2}
            fontWeight="bold"
            colorScheme={fontColor}
            fontSize="20px"
          >
            あ
          </Text>
        </Flex>
      </Box>
    </Panel>
  )
}

SettingPanel.displayName = 'SettingPanel'
