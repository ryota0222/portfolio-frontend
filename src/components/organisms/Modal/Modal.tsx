import { memo } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Props } from './type'

export const ModalComponent: React.FC<Props> = memo(
  ({ contents, header, footer, isOpen, onClose }) => {
    const size = useBreakpointValue({ base: 'full', sm: 'md' })
    const bg = useColorModeValue('white', 'app-gray.700')
    const overlay = useColorModeValue('#66666632', '#FFFFFF32')
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg={overlay} backdropFilter="blur(16px)" />
        <ModalContent bg={bg} boxShadow="none">
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{contents}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    )
  },
)
