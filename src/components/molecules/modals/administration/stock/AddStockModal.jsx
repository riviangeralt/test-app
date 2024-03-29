import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ioAdminFetchAllModels } from "src/api-client";
import { CloseIcon } from "src/assets";
import { useFetch } from "src/components/hooks";
import { AddStockForm } from "src/components/molecules";
import { isSuccessStatus } from "src/utils";

const AddStockModal = (props) => {
  const { isOpen, onClose, data } = props;
  const { query } = useFetch(ioAdminFetchAllModels);
  const [modelList, setModelList] = useState([]);

  const isEdit = !!data;

  const fetchModelsList = async () => {
    try {
      const queryRes = await query({ page: 1, size: 50 });
      if (isSuccessStatus(queryRes)) {
        const { items } = queryRes.data;
        setModelList(
          items.map((item) => ({
            label: item.name,
            value: item.mid,
            version: item.name,
          }))
        );
      }
    } catch (error) {
      console.error("Error in fetchModelsList", error);
    }
  };

  useEffect(() => {
    fetchModelsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal isOpen={modelList.length > 0 && isOpen} onClose={onClose} variant="brand" size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEdit ? "Edit Stock++" : "Add Stock++"} </ModalHeader>
        <ModalCloseButton top={4}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <AddStockForm
            data={data}
            onClose={onClose}
            isEdit={isEdit}
            modelList={modelList}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AddStockModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default AddStockModal;