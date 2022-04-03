import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 今の時刻を取得
 *
 * @param {string} [format] フォーマット（あれば）
 * @returns {string} 今の時刻を返す
 */
export const getDate = (format?: string) => {
  if (format) {
    return dayjs().format(format)
  }
  return dayjs().toISOString()
}

/**
 * 今の時刻を取得
 *
 * @param {string} [date] date型のデータ
 * @param {string} [format] フォーマット
 * @returns {string} 整形した状態で日付の文字列を返す
 */
export const formatDate = (date: string, format: string) => {
  // フォーマットが引数にあれば整形して返す
  if (format) {
    return dayjs(date).format(format)
  }
  // ない場合はそのまま返す
  return date
}

export default dayjs
