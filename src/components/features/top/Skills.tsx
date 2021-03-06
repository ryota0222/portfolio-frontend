import { memo, useMemo } from 'react'
import { Box, VStack, Text, HStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SubSectionTitle } from '@/components/atoms/SubSectionTitle'
import { SKILL_LIST } from '@/consts/top'
import useSp from '@/hooks/useSp'
import { SkillCategory, SkillLabel, SkillId } from '@/types/top'
import SkillIcon from './SkillIcon'

const ScrollRevealContainer = dynamic(
  import('@/components/features/top/ScrollRevealContainer'),
  { ssr: false },
)

const categories = Object.keys(SKILL_LIST) as SkillCategory[]

const Skills = memo(() => {
  const [isSp] = useSp()
  const size = useMemo(() => (isSp ? 'sm' : 'lg'), [isSp])
  return (
    <ScrollRevealContainer maxW="1000px" px={4} mb={32}>
      <SectionTitle size={size}>Skills</SectionTitle>
      <VStack spacing={12} alignItems="flex-start" mt={16}>
        {categories.map((category) => {
          const skillList = SKILL_LIST[category] as unknown as {
            id: SkillId
            label: SkillLabel
          }[]
          return (
            <Box key={category}>
              <SubSectionTitle size={size}>{category}</SubSectionTitle>
              <HStack
                wrap="wrap"
                justifyContent="flex-start"
                spacing={4}
                mt={6}
              >
                {skillList.map((skill) => (
                  <VStack key={skill.id} spacing={1} mb="16px !important">
                    <SkillIcon id={skill.id} width="40px" height="40px" />
                    <Text fontSize="8px">{skill.label}</Text>
                  </VStack>
                ))}
              </HStack>
            </Box>
          )
        })}
      </VStack>
    </ScrollRevealContainer>
  )
})

export default Skills
