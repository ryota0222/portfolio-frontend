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

export interface Slide {
  link: string
  title: string
  date: string
}

export interface Application {
  image: string
  title: string
  description: string
  github: string
}

export interface LineStamp {
  image: string
  link: string
}

export interface Carrier {
  date: string
  detail: string
}
