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
import { AddAccountForm } from "src/components/molecules";

const AddAccountModal = (props) => {
  const { isOpen, onClose, data } = props;

  const isEdit = !!data;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant="brand"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEdit ? "Edit Account" : "Add Account"}</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody className="scrollbar-override">
          <AddAccountForm onClose={onClose} data={data} isEdit={isEdit} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddAccountModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default AddAccountModal;
