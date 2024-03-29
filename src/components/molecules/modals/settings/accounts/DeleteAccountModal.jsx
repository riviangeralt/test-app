import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ioWebapiDeleteAccountDelete } from "src/api-client";
import { CloseIcon } from "src/assets";
import { useFetch } from "src/components/hooks";
import { isSuccessStatus } from "src/utils";

const DeleteAccountModal = (props) => {
  const { isOpen, onClose, data } = props;
  const { query } = useFetch(ioWebapiDeleteAccountDelete, true);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const deleteAccount = async () => {
    try {
      setIsLoading(true);
      const queryRes = await query({ acc_id: data?.acc_id });
      if (isSuccessStatus(queryRes)) {
        onClose();
        toast({
          description: queryRes?.data?.message || "Account deleted",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error in deleteAccount", error);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant="brand"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Account</ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <Text>
            Are you sure you want to delete this account -{" "}
            {data?.acc_id || '-'}?
          </Text>
          <HStack justifyContent={"flex-end"} mt={4}>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              isLoading={isLoading}
              onClick={deleteAccount}
            >
              Delete
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

DeleteAccountModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default DeleteAccountModal;
