import { memo } from 'react'
import { Text, Circle, HStack } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Props } from './type'
import { usePageNation } from './usePageNation'

export const PageNation: React.FC<Props> = memo((props) => {
  const {
    fontSize,
    circleSize,
    prevIconColor,
    nextIconColor,
    displayList,
    currentTextColor,
    currentBgColor,
    handlePrev,
    handleNext,
    handleSelect,
  } = usePageNation(props)
  if (Number(props.total) <= 1) {
    return <></>
  } else {
    return (
      <HStack spacing="24px">
        {/* 前へ */}
        <Circle cursor="pointer" onClick={handlePrev}>
          <IoIosArrowBack color={prevIconColor} />
        </Circle>
        {displayList.map((item, key) => {
          if (typeof item === 'number') {
            return (
              <Circle
                key={key}
                bg={currentBgColor(item)}
                width={circleSize}
                height={circleSize}
                cursor="pointer"
                borderRadius={circleSize}
                onClick={() => handleSelect(item)}
              >
                <Text
                  color={currentTextColor(item)}
                  fontWeight="bold"
                  fontSize={fontSize}
                >
                  {item}
                </Text>
              </Circle>
            )
          } else {
            return (
              <Text
                color={currentTextColor(item)}
                fontWeight="bold"
                key={`txt-${key}`}
                fontSize={fontSize}
                px={1}
              >
                {item}
              </Text>
            )
          }
        })}
        {/* 次へ */}
        <Circle cursor="pointer" onClick={handleNext}>
          <IoIosArrowForward color={nextIconColor} />
        </Circle>
      </HStack>
    )
  }
})
