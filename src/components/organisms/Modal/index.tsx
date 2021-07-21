import { ReactNode, memo } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseModalProps,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

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

export const ModalComponent = memo(
  ({ contents, header, footer, isOpen, onClose }: Props) => {
    const size = useBreakpointValue({ base: 'full', sm: 'md' })
    const bg = useColorModeValue('white', 'black')
    const overlay = useColorModeValue('#82828232', '#FFFFFF32')
    console.log(header)
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg={overlay} backdropFilter="blur(16px)" />
        <ModalContent bg={bg}>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{contents}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    )
  },
)

ModalComponent.displayName = 'ModalComponent'
