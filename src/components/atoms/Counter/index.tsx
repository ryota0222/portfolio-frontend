import { memo, useMemo } from 'react'
import { Text, Center, Box, useColorModeValue } from '@chakra-ui/react'
import { SvgIcon } from '@/components/atoms/SvgIcon'

export interface Props {
  /**
   * カウント数
   */
  number?: number
  /**
   * フォルダのカウント数
   */
  folder?: number
  /**
   * ファイルのカウント数
   */
  file?: number
}

export const Counter = memo(({ number = 0, folder = 0, file = 0 }: Props) => {
  const countBg = useColorModeValue('#dedede', '#5A5A5A')
  const textColor = useColorModeValue('#1A202C', 'white')
  const displayFolderNumber = useMemo(() => {
    if (folder > 99) return '99+'
    return folder
  }, [folder])
  const displayFileNumber = useMemo(() => {
    if (file > 99) return '99+'
    return file
  }, [file])
  const displayNumber = useMemo(() => {
    if (number > 99) return '99+'
    return number
  }, [number])
  if (number <= 0 && folder <= 0 && file <= 0) {
    // データが何もなければ非表示
    return <></>
  } else {
    return (
      <Center
        as="span"
        h="22px"
        borderRadius="6px"
        backgroundColor={countBg}
        px={2}
        py={1}
      >
        {/* フォルダのカウント数 */}
        {folder > 0 && (
          <Center mr={2}>
            <SvgIcon name="folder" color={textColor} mr={1} />
            <Text
              fontFamily="monospace"
              fontSize="xs"
              colorScheme={textColor}
              fontWeight="bold"
            >
              {displayFolderNumber}
            </Text>
          </Center>
        )}
        {/* ファイルのカウント数 */}
        {file > 0 && (
          <>
            <SvgIcon name="file" color={textColor} />
            <Text
              fontFamily="monospace"
              fontSize="xs"
              colorScheme={textColor}
              fontWeight="bold"
            >
              {displayFileNumber}
            </Text>
          </>
        )}
        {/* 上記以外のカウント数 */}
        {number > 0 && (
          <>
            <Text
              fontFamily="monospace"
              fontSize="xs"
              colorScheme={textColor}
              fontWeight="bold"
            >
              {displayNumber}
            </Text>
          </>
        )}
      </Center>
    )
  }
})

export default Counter
