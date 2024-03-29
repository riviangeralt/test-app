import { TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { EditIcon } from "src/assets";
import { Pagination, Table } from "src/components/atoms";
import { AddModelsModal } from "src/components/molecules";

const AdminModelsListTable = (props) => {
  const { data, isLoading, refreshData } = props;
  const [selectedModel, setSelectedModel] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleEditModel = (values) => {
    setSelectedModel(values);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedModel({});
    setIsModalOpen(false);
    refreshData({ page, size: 10 });
  };

  const handlePagination = (page) => {
    setPage(page);
    refreshData({ page, size: 10 });
  };

  return (
    <>
      <Table
        noDataAvailable={(!isLoading && data?.data?.items?.length === 0) || (!isLoading && !data)}
        isLoading={isLoading}
      >
        {data?.data?.pages > 1 && (
          <TableCaption margin={0} textAlign={"right"} p={2}>
            <Pagination
              noOfPages={data?.data?.pages}
              handleChange={handlePagination}
              activePage={data?.data?.page}
              total={data?.data?.total}
            />
          </TableCaption>
        )}
        <Thead>
          <Tr border={"none"}>
            <Th borderTopLeftRadius={"4px"}>ID</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Ruleset</Th>
            <Th>Version</Th>
            <Th>Description</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.items?.map((model) => (
            <Tr key={model.mid}>
              <Td>{model.mid || "-"}</Td>
              <Td>{model.name || "-"}</Td>
              <Td>{model.type_model || "-"}</Td>
              <Td>{model.ruleset || "-"}</Td>
              <Td>{model.version || "-"}</Td>
              <Td>{model.description || "-"}</Td>
              <Td isNumeric>
                <EditIcon
                  cursor="pointer"
                  onClick={() => handleEditModel(model)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Suspense fallback="">
        {isModalOpen && (
          <AddModelsModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            data={selectedModel}
          />
        )}
      </Suspense>
    </>
  );
};

AdminModelsListTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  refreshData: PropTypes.func.isRequired,
};

export default AdminModelsListTable;
