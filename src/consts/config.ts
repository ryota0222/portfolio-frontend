import { CounterType, RoadmapType, SvgIconName } from '@/types/interface'
import { PageName, ShopType } from '@/types/interface'

export const SVG_ICON_NAME_LIST: SvgIconName[] = [
  'circle-check',
  'schedule',
  'develop',
  'merge',
  'shirt',
  'balloon',
  'phone',
]

export const COUNTER_TYPE: CounterType[] = ['good', 'bad']

export const ROADMAP_TYPE: RoadmapType[] = ['schedule', 'develop', 'merge']

export const PAGE_NAME: PageName[] = ['portfolio', 'blog', 'roadmap']

export const SHOP_TYPE: ShopType[] = ['stamp', 'product', 'wallpaper']

// meta
export const TITLE = 'RyoTa.'
export const DESCRIPTION =
  'RyoTa.のポートフォリオサイトです。2020年よりフロントエンジニアとしてUI/UXの発信をしています。Adobe XDやFigmaを用いたデザインモックの作成や、ツールを用いた素材やアニメーションの作成もしています。'
export const KEYWORD = 'エンジニアポートフォリオ,ブログ,IT'
export const IMAGE = `${process.env.SITE_URL}/images/mv.png`
export const URL = 'RyoTa.'
