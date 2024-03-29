import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CloseIcon } from "src/assets";
import { GenerateRiskSetForm } from "src/components/molecules";

const GenerateRiskSetModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Generate Risk Set</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <GenerateRiskSetForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

GenerateRiskSetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GenerateRiskSetModal;
