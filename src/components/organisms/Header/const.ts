import { PageName } from './type'

export const PAGE_LABEL_MAP: Record<PageName, string> = {
  top: 'トップ',
  blog: 'ブログ',
  news: 'ニュース',
}

export const PAGE_PATHNAME_MAP: Record<PageName, string | string[]> = {
  top: ['/', '/slides'],
  blog: ['/blog', '/blog/[id]'],
  news: '/news',
}

export const PAGE_PATH_MAP: Record<PageName, string> = {
  top: '/',
  blog: '/blog',
  news: '/news',
}
