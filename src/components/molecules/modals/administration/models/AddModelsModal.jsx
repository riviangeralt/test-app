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
import { AddModelForm } from "src/components/molecules";

const AddModelsModal = (props) => {
  const { isOpen, onClose, data } = props;

  const isEdit = !!data;

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEdit ? "Edit Model" : "Add Model"}</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <AddModelForm data={data} isEdit={isEdit} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddModelsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default AddModelsModal;
