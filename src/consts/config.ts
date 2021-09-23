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
  'link',
  'create',
  'update',
  'home',
  'twitter',
  'facebook',
]

export const ROOT_FONT_SIZE = 16

export const COUNTER_TYPE: CounterType[] = ['good', 'bad']

export const ROADMAP_TYPE: RoadmapType[] = ['schedule', 'develop', 'merge']

export const PAGE_NAME: PageName[] = ['portfolio', 'blog', 'roadmap']

export const SHOP_TYPE: ShopType[] = ['stamp', 'product', 'wallpaper']

export const BLOG_NUMBER_PER_PAGE = 9

export const BLOG_IMAGE_MAX_WIDTH = 600

export const GRADIENT =
  '-webkit-linear-gradient(38.45deg, #9E00FF -1.95%, rgba(255, 102, 212, 0.984375) 16.64%, rgba(233, 172, 255, 0) 49.6%), -webkit-linear-gradient(249.25deg, rgba(0, 255, 224, 0.79) -23.07%, rgba(162, 255, 89, 0.79) 13.65%, rgba(255, 214, 0, 0.11) 46.38%), -webkit-linear-gradient(158.28deg, #FF0000 -8.44%, #FF9A2B 44.44%, #FAFF00 96.23%);'

export const INTRODUCTION = {
  name: 'RyoTa.',
  description: `神戸大学卒業後、2020年4月よりフロントエンドエンジニアとしてSI企業に新卒入社。Webアプリケーションや、ネイティブアプリの開発をメインで行う一方で、デザインの分野にも興味があり、Webデザインやグラフィックデザイン、アニメーションなどにも取り組んでいます。Adobe XDやFigmaを用いたデザインモックの作成や、ツールを用いた素材やアニメーションの作成もしています。 2021年1月より[「つながる勉強会」](https://tsunagaru-kobe.connpass.com/)という勉強会の運営に携わっています。`,
  twitter: 'https://twitter.com/RyoTa___0222',
  github: 'https://github.com/RyoTa0222',
  imageData:
    'https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
}

export const SHORT_INTRODUCTION = {
  name: 'RyoTa.',
  description: `神戸大学卒業後、2020年4月よりフロントエンドエンジニアとしてSI企業に新卒入社。Webアプリケーションや、ネイティブアプリの開発を行う一方、Webデザインやグラフィックデザイン、アニメーションなどにも取り組んでいます。 神戸で「つながる勉強会」を2021年1月より行っています。`,
  twitter: 'https://twitter.com/RyoTa___0222',
  github: 'https://github.com/RyoTa0222',
  imageData: `/images/ryota.png`,
}

// meta
export const TITLE = 'RyoTa.'
export const DESCRIPTION =
  'RyoTa.のポートフォリオサイトです。2020年よりフロントエンジニアとしてUI/UXの発信をしています。Adobe XDやFigmaを用いたデザインモックの作成や、ツールを用いた素材やアニメーションの作成もしています。'
export const KEYWORD = 'エンジニアポートフォリオ,ブログ,IT'
export const IMAGE = `${process.env.SITE_URL}/images/mv.png`
export const URL = 'RyoTa.'
