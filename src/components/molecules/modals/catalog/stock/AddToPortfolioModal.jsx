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
import { AddToPortfolioForm } from "src/components/molecules";

const AddToPortfolioModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add to Portfolio</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <AddToPortfolioForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddToPortfolioModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddToPortfolioModal;
