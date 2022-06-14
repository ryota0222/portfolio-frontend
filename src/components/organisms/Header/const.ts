import { PageName } from './type'

export const PAGE_LABEL_MAP: Record<PageName, string> = {
  top: 'トップ',
  blog: 'ブログ',
  news: 'ニュース',
}

export const PAGE_PATH_MAP: Record<PageName, string> = {
  top: '/',
  blog: '/blogs',
  news: '/news',
}
