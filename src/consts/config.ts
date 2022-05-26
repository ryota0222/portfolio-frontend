import { PageName, ShopType } from '@/types/interface'

export * from '@/consts/meta'
export * from '@/consts/style'
export * from '@/consts/blog'
export * from '@/consts/roadmap'
export * from '@/consts/news'

export const THROTTLE_TIME = 1000
export const THROTTLE_OPTION = { trailing: false }

export const PAGE_NAME: PageName[] = ['portfolio', 'blog', 'roadmap']

export const SHOP_TYPE: ShopType[] = ['stamp', 'product', 'wallpaper']

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
