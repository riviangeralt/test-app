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
import { PersonalInformationForm } from "src/components/molecules";

const PersonalInformationModal = (props) => {
  const { isOpen, onClose, data } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant="brand"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Personal Information</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody className="scrollbar-override">
          <PersonalInformationForm data={data} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

PersonalInformationModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default PersonalInformationModal;
