import { UseModalProps } from '@chakra-ui/react'

export interface Props {
  /**
   * 中身
   */
  contents: string | JSX.Element
  /**
   * ヘッダー
   */
  header?: string | JSX.Element
  /**
   * フッター
   */
  footer?: string | JSX.Element
  /**
   * モーダルの開閉フラグ
   */
  isOpen: boolean
  /**
   * 閉じるアクション
   */
  onClose: UseModalProps['onClose']
}
