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
import { AddUserForm } from "src/components/molecules";

const AddUserModal = (props) => {
  const { isOpen, onClose, data } = props;

  const isEdit = !!data;

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isEdit ? "Edit User" : "Add User"}
        </ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody className="scrollbar-override">
          <AddUserForm onClose={onClose} data={data} isEdit={isEdit} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default AddUserModal;
