import { TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { EditIcon } from "src/assets";
import { Pagination, Table } from "src/components/atoms";
import { AddStockModal } from "src/components/molecules";

const AdminStockListTable = (props) => {
  const { data, isLoading, refreshData } = props;
  const [selectedStock, setSelectedStock] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleEditStock = (values) => {
    setSelectedStock(values);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedStock({});
    setIsModalOpen(false);
    refreshData({page, size: 10});
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
            <Th>Models</Th>
            <Th>Ticker</Th>
            <Th>Version</Th>
            <Th>Status</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.items?.map((stock) => (
            <Tr key={stock.spp_id}>
              <Td>{stock.spp_id || "-"}</Td>
              <Td>{stock.id_model || "-"}</Td>
              <Td>{stock.ticker || "-"}</Td>
              <Td>{stock.version || "-"}</Td>
              <Td>{stock.status || "-"}</Td>
              <Td isNumeric>
                <EditIcon
                  cursor="pointer"
                  onClick={() => handleEditStock(stock)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Suspense fallback="">
        {isModalOpen && (
          <AddStockModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            data={selectedStock}
          />
        )}
      </Suspense>
    </>
  );
};
AdminStockListTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  refreshData: PropTypes.func,
};
export default AdminStockListTable;
