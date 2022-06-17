import { DeepPartial, Colors } from '@chakra-ui/react'
import COLOR_DATA from '@/consts/color.json'

interface Color {
  value: string
  type: 'color'
}

interface themeColor<T> {
  white: T
  black: T
  red: {
    500: T
  }
  'app-gray': {
    50: T
    100: T
    200: T
    300: T
    400: T
    500: T
    600: T
    700: T
    800: T
    900: T
  }
}

export const getThemeColor = () => {
  let obj = {}
  const colorData = COLOR_DATA as themeColor<Color>
  for (const colorName in colorData) {
    const colorList = colorData[colorName as keyof themeColor<Color>]
    if ('value' in colorList) {
      obj[colorName] = colorList.value
    } else {
      for (const colorIndex in colorList) {
        const colorObj = colorList[colorIndex] as Color
        if (!obj[colorName]) {
          obj[colorName] = {}
        }
        obj[colorName][colorIndex] = colorObj.value
      }
    }
  }
  return obj as DeepPartial<Colors>
}
