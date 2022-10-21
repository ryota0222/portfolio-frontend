import { Slide, Application, LineStamp, Carrier } from '@/types/top'

export const SLIDE_LIST: Slide[] = [
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcSvUahcxaXv6ljPa0GnRVK%2FWCM%3Fpage-id%3D304%253A106%26node-id%3D304%253A126%26viewport%3D791%252C166%252C0.16%26scaling%3Dscale-down%26starting-point-node-id%3D304%253A126%26hotspot-hints%3D0',
    title: 'デザインエンジニアってなんやねん??',
    date: '2022-06-25',
    slug: 'what-is-engineer',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcSvUahcxaXv6ljPa0GnRVK%2FWCM%3Fpage-id%3D38%253A2%26node-id%3D38%253A3%26viewport%3D465%252C559%252C0.09%26scaling%3Dcontain%26starting-point-node-id%3D38%253A3',
    title: '良いデザインって??',
    date: '2022-06-04',
    slug: 'what-is-good-design',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D202%253A1608%26node-id%3D202%253A1609%26viewport%3D838%252C456%252C0.11%26scaling%3Dcontain%26starting-point-node-id%3D202%253A1609',
    title: 'タイムキーパーについて考えてみた',
    date: '2022-05-21',
    slug: 'thought-about-the-timekeeper',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A2%26node-id%3D201%253A3%26viewport%3D713%252C632%252C0.13%26scaling%3Dcontain%26starting-point-node-id%3D201%253A3',
    title: 'UXエンジニアって？？',
    date: '2022-04-23',
    slug: 'what-is-ux-engineer',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm8W5QHbOgu1CxhiYTTS69s%2F%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E8%25B3%2587%25E6%2596%2599%3Fpage-id%3D0%253A1%26node-id%3D2%253A3%26viewport%3D550%252C511%252C0.07%26scaling%3Dcontain%26starting-point-node-id%3D2%253A3',
    title: 'UI StackとReact.js',
    date: '2022-03-26',
    slug: 'ui-stack-and-reactjs',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A393%26node-id%3D201%253A394%26viewport%3D1508%252C1822%252C0.33%26scaling%3Dcontain%26starting-point-node-id%3D201%253A394',
    title: 'フロントエンジニアがデザイナーになって気づいたこと',
    date: '2022-03-19',
    slug: 'what-frontend-engineer-realized-when-i-became-designer',
  },
  {
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A1102%26node-id%3D201%253A1103%26viewport%3D2473%252C74%252C0.26%26scaling%3Dscale-down%26starting-point-node-id%3D201%253A1103',
    title: 'Figmaがエンジニアに最適だと思う話',
    date: '2022-11-27',
    slug: 'story-about-how-figma-is-perfect-for-engineers',
  },
]

export const APPLICATION_LIST: Application[] = [
  {
    image: '/images/w-tetris.png',
    title: 'W Tetris',
    description: 'テトリスをWebの技術で作成しています。PWAにも対応済みです。',
    github: 'https://github.com/RyoTa0222/w-tetris',
  },
  {
    image: '/images/presentation-timer.png',
    title: 'Presentation Watch',
    description:
      '勉強会で使用するために作成したタイムキーパーアプリです。WebSocketを用いて双方向通信を実現し複数台の端末で管理可能です。',
    github: 'https://github.com/RyoTa0222/presentation-timer',
  },
]

export const LINE_STAMP_LIST: LineStamp[] = [
  {
    image: '/images/sticky/penpen-2.png',
    link: 'https://line.me/S/sticker/19096682',
  },
  {
    image: '/images/sticky/penpen-1.png',
    link: 'https://line.me/S/sticker/18833443',
  },
  {
    image: '/images/sticky/greeny-chick-enginner.png',
    link: 'https://line.me/S/sticker/19096682',
  },
  {
    image: '/images/sticky/otokonoko-pun.png',
    link: 'https://line.me/S/sticker/16627181',
  },
  {
    image: '/images/sticky/otokonoko-3.png',
    link: 'https://line.me/S/sticker/16584411',
  },
  {
    image: '/images/sticky/otokonoko-2.png',
    link: 'https://line.me/S/sticker/16101783',
  },
  {
    image: '/images/sticky/otokonoko-1.png',
    link: 'https://line.me/S/sticker/15744468',
  },
  {
    image: '/images/sticky/cubicun.png',
    link: 'https://line.me/S/sticker/3859035',
  },
  {
    image: '/images/sticky/yota.png',
    link: 'https://line.me/S/sticker/3546558',
  },
  {
    image: '/images/sticky/gebe.png',
    link: 'https://line.me/S/sticker/1301367',
  },
  {
    image: '/images/sticky/frogman.png',
    link: 'https://line.me/S/sticker/1301351',
  },
]

export const CARRIER_LIST: Carrier[] = [
  {
    date: '2020.03',
    detail: '神戸大学  工学部  機械工学科卒業',
  },
  {
    date: '2020.04',
    detail: '株式会社 神戸デジタル・ラボ入社',
  },
  {
    date: '2021.01',
    detail: '現在まで、つながる勉強会の運営',
  },
  {
    date: '2022.03',
    detail: '副業でデザインの業務委託を開始（2022.05まで）',
  },
  {
    date: '2022.06',
    detail: '現在まで、Web Creators Meetupの運営',
  },
]

export const SKILL_LIST = {
  Frontend: [
    {
      id: 'react-js',
      label: 'React.js',
    },
    {
      id: 'vue-js',
      label: 'Vue.js',
    },
    {
      id: 'next-js',
      label: 'Next.js',
    },
    {
      id: 'nuxt-js',
      label: 'Nuxt.js',
    },
    {
      id: 'typescript',
      label: 'TypeScript',
    },
    {
      id: 'sass',
      label: 'Sass',
    },
    {
      id: 'styled-components',
      label: 'Styled Components',
    },
    {
      id: 'redux-toolkit',
      label: 'Redux Toolkit',
    },
    {
      id: 'swr',
      label: 'SWR',
    },
  ],
  Backend: [
    {
      id: 'node-js',
      label: 'Node.js',
    },
    {
      id: 'express',
      label: 'Express',
    },
    {
      id: 'flask',
      label: 'Flask',
    },
  ],
  Design: [
    {
      id: 'adobe-xd',
      label: 'Adobe XD',
    },
    {
      id: 'figma',
      label: 'Figma',
    },
  ],
  Others: [
    {
      id: 'git',
      label: 'Git',
    },
    {
      id: 'mysql',
      label: 'MySQL',
    },
    {
      id: 'firebase',
      label: 'Firebase',
    },
    {
      id: 'netlify',
      label: 'Netlify',
    },
    {
      id: 'vercel',
      label: 'Vercel',
    },
    {
      id: 'storybook',
      label: 'Storybook',
    },
    {
      id: 'contentful',
      label: 'Contentful',
    },
    {
      id: 'microcms',
      label: 'MicroCMS',
    },
    {
      id: 'swagger',
      label: 'Swagger',
    },
    {
      id: 'sentry',
      label: 'Sentry',
    },
  ],
} as const
