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
import { AddHoldingForm } from "src/components/molecules";

const AddPortfolioModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Holding</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <AddHoldingForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddPortfolioModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddPortfolioModal;
