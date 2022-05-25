import {
  ChakraProvider,
  extendTheme,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { StoryContext } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { IoMoonOutline } from 'react-icons/io5'
import { FiSun } from 'react-icons/fi'
import { withPerformance } from 'storybook-addon-performance'
import { mode } from '@chakra-ui/theme-tools'
import * as nextImage from 'next/image'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { getThemeColor } from '../src/utils/themeColor'

const addParameters = require('@storybook/react').addParameters

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const _props = Object.assign({}, props)
    const style = {}
    if (props.objectFit) {
      style['objectFit'] = props.objectFit
    }
    if (props.width) {
      style['width'] = props.width
    }
    if (props.height) {
      style['height'] = props.height
    }
    _props.style = { style }
    return <img style={style} {...props} />
  },
})

addDecorator(withPerformance)
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})

//ダークモードとライトモードの切替
const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(IoMoonOutline, FiSun)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const themeColor = getThemeColor()
  const dir = direction.toLowerCase()
  const styles = {
    global: (props) => ({
      body: {
        bg: mode(
          themeColor['app-gray'][50],
          themeColor['app-gray'][700],
        )(props),
      },
    }),
  }
  const colors = themeColor
  return (
    <ChakraProvider
      theme={extendTheme({
        direction: dir,
        styles,
        colors,
      })}
    >
      <Box dir={dir} id="story-wrapper">
        <ColorModeToggleBar />
        <StoryFn />
      </Box>
    </ChakraProvider>
  )
}

export const decorators = [withChakra, withPerformance]
