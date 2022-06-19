import { SKILL_LIST } from '@/consts/top'

export type SkillCategory = keyof typeof SKILL_LIST

export type SkillId =
  | typeof SKILL_LIST['Frontend'][number]['id']
  | typeof SKILL_LIST['Backend'][number]['id']
  | typeof SKILL_LIST['Design'][number]['id']
  | typeof SKILL_LIST['Others'][number]['id']

export type SkillLabel =
  | typeof SKILL_LIST['Frontend'][number]['label']
  | typeof SKILL_LIST['Backend'][number]['label']
  | typeof SKILL_LIST['Design'][number]['label']
  | typeof SKILL_LIST['Others'][number]['label']
