import { ServiceType } from './type'

export const SERVICE_NAME_MAP: Record<ServiceType, string> = {
  qiita: 'Qiita',
  twitter: 'Twitter',
  zenn: 'Zenn',
  github: 'Github',
  tsunagaru: 'つながる勉強会',
  'line-creators-market': 'LINE Creators Market',
  'slide-share': 'Slide Share',
  wcm: 'Web Creators Meetup in KANSAI',
  instagram: 'Instagram',
  utme: 'UTme!（オリジナルデザインのアイテム販売）',
}

export const SERVICE_LINK_MAP: Record<ServiceType, string> = {
  qiita: 'https://qiita.com/RyoTa_0222',
  twitter: 'https://twitter.com/RyoTa___0222',
  zenn: 'https://zenn.dev/ryota0222',
  github: 'https://github.com/RyoTa0222',
  tsunagaru:
    'https://discreet-cause-4e3.notion.site/510afcfd8862449eb24521b3b7d8fedf',
  'line-creators-market': 'https://store.line.me/stickershop/author/104726',
  'slide-share': 'https://www.slideshare.net/ssuserb657f5',
  wcm: 'https://web-creator-meetup-in-kansai.connpass.com/',
  instagram: 'https://www.instagram.com/ryotanny/',
  utme: 'https://utme.uniqlo.com/jp/front/mkt/show?id=851881&locale=ja',
}
