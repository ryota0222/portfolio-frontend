import { Document } from '@contentful/rich-text-types'

// button
export type ButtonVariant = 'solid' | 'outline'
export type ButtonScheme = 'primary' | 'secondary' | 'danger' | 'info'
export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '2xs' | 'xs'

// svg icon
export type SvgIconName =
  | 'circle-check'
  | 'schedule'
  | 'develop'
  | 'merge'
  | 'shirt'
  | 'balloon'
  | 'phone'
  | 'link'
  | 'create'
  | 'update'
  | 'home'
  | 'twitter'
  | 'facebook'
  | 'tag-gradient'
  | 'archive-gradient'
  | 'archive-solid'
  | 'map-gradient'
  | 'map-solid'
  | 'person-gradient'
  | 'person-solid'
  | 'flag-gradient'
  | 'flag-solid'

// counter
export type CounterType = 'good' | 'bad'

// roadmap
export type RoadmapType = 'schedule' | 'develop' | 'merge'

// blog
export interface BlogIndexItem {
  label: string
  index: number
  type: BlogTitle
}

export interface Author {
  name: string
  description: string
  image: string
  id: string
}

export interface Lgtm {
  good: number
  bad: number
}

export interface Tag {
  label: string
  color: string
  tag_id: string
  id: string
}

export interface Field {
  metadata: Record<string, unknown>
  sys: Record<string, unknown>
  fields: Record<string, unknown>
}

export interface Blog {
  title: string
  image: string
  created_at: string
  updated_at: string
  content: Document
  entry: Record<string, Field>[]
  asset: Record<string, Field>[]
  author: Author
  lgtm: Lgtm
  index: BlogIndexItem[]
  tag: Tag
}

export type BlogTitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type PageName = 'portfolio' | 'blog' | 'roadmap'

export type ShopType = 'stamp' | 'product' | 'wallpaper'

export type OgType = 'website' | 'blog' | 'article'

export type Theme = 'light' | 'dark'

export interface BlogSetting {
  monthly_archives?: Record<
    string,
    {
      count: number
    }
  >[]
  tag_archives?: Record<
    string,
    {
      count: number
      percent: number
    }
  >[]
  tags?: {
    color: string
    id: string
    label: string
    tag_id: string
  }[]
}

export interface BlogContents {
  contents: {
    created_at: string
    updated_at: string | null
    id: string
    image: string
    tag: {
      color: string
      id: string
      label: string
      tag_id: string
    }
    title: string
  }[]
  page: {
    current: number
    total_count: number
  }
}
