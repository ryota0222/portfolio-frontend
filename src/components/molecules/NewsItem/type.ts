import { NewsItem } from '@/apis/api'

export interface Props {
  content: NewsItem
  isTop: boolean
  isBottom: boolean
  date: string
}
