export interface Props {
  /**
   * 合計のページ数
   */
  total: number
  /**
   * 現在のページ
   */
  currentPage: number
  /**
   * １つページを増やす処理
   */
  increment: () => void
  /**
   * １つページを戻す処理
   */
  decrement: () => void
  /**
   * 指定のページを設定する処理
   */
  set: (page: number) => void
}
