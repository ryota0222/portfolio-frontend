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

export type BlogTitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type PageName = 'portfolio' | 'blog' | 'roadmap'

export type ShopType = 'stamp' | 'product' | 'wallpaper'
