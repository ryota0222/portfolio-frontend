import React, { memo, useMemo } from 'react'
import { Box, Text, useToken } from '@chakra-ui/react'
import useDesignSystem from '@/hooks/useDesignSystem'
import { ICON_DEFAULT_COLOR, ICON_WIDTH, ICON_HEIGHT } from './const'
import { Props, IconProps } from './type'

export const BlogContentsCounter: React.FC<Props> = memo(({ file, folder }) => {
  const { TEXT_COLOR, isDark } = useDesignSystem()
  const [lightColor, darkColor]: string[] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    ['app-gray.900', 'app-gray.50'],
  )
  // アクティブなテーマのカラー
  const activeColor = useMemo(
    () => (isDark ? darkColor : lightColor),
    [isDark, lightColor, darkColor],
  )
  return (
    <Box d="inline-flex">
      {/* フォルダのカウンター */}
      {Boolean(folder) && (
        <Box mr={2} d="inline-flex" alignItems="center">
          <FolderIcon color={activeColor} width={'16px'} height={'16px'} />
          <Text color={TEXT_COLOR} ml={1}>
            {folder}
          </Text>
        </Box>
      )}
      {/* ファイルのカウンター */}
      {Boolean(file) && (
        <Box d="inline-flex" alignItems="center">
          <FileIcon color={activeColor} width={'16px'} height={'16px'} />
          <Text color={TEXT_COLOR} ml={1}>
            {file}
          </Text>
        </Box>
      )}
    </Box>
  )
})

const FileIcon: React.FC<IconProps> = memo(({ color, width, height }) => {
  const iconColor = useMemo(() => {
    return color || ICON_DEFAULT_COLOR
  }, [color])
  const iconWidth = useMemo(() => {
    return width || ICON_WIDTH
  }, [width])
  const iconHeight = useMemo(() => {
    return height || ICON_HEIGHT
  }, [height])
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.41671 0.916504H2.75004C2.50693 0.916504 2.27377 1.01308 2.10186 1.18499C1.92995 1.3569 1.83337 1.59006 1.83337 1.83317V9.16651C1.83337 9.40962 1.92995 9.64278 2.10186 9.81469C2.27377 9.98659 2.50693 10.0832 2.75004 10.0832H8.25004C8.49316 10.0832 8.72631 9.98659 8.89822 9.81469C9.07013 9.64278 9.16671 9.40962 9.16671 9.16651V3.6665L6.41671 0.916504Z"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41663 0.916504V3.6665H9.16663"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33329 5.9585H3.66663"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33329 7.7915H3.66663"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.58329 4.125H4.12496H3.66663"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

const FolderIcon: React.FC<IconProps> = memo(({ color, width, height }) => {
  const iconColor = useMemo(() => {
    return color || ICON_DEFAULT_COLOR
  }, [color])
  const iconWidth = useMemo(() => {
    return width || ICON_WIDTH
  }, [width])
  const iconHeight = useMemo(() => {
    return height || ICON_HEIGHT
  }, [height])
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0834 8.70833C10.0834 8.95145 9.98684 9.18461 9.81493 9.35651C9.64302 9.52842 9.40986 9.625 9.16675 9.625H1.83341C1.5903 9.625 1.35714 9.52842 1.18523 9.35651C1.01333 9.18461 0.916748 8.95145 0.916748 8.70833V2.29167C0.916748 2.04855 1.01333 1.81539 1.18523 1.64349C1.35714 1.47158 1.5903 1.375 1.83341 1.375H4.12508L5.04175 2.75H9.16675C9.40986 2.75 9.64302 2.84658 9.81493 3.01849C9.98684 3.19039 10.0834 3.42355 10.0834 3.66667V8.70833Z"
        stroke={iconColor}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
