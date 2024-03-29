import { HStack, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "src/assets";
import { Pagination, Table, Tag } from "src/components/atoms";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { AddAccountModal, DeleteAccountModal } from "src/components/molecules";

const AccountsListTable = (props) => {
  const { data, isLoading, refreshData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({});
  const [page, setPage] = useState(1);

  const handleModalOpen = (values) => {
    setIsModalOpen(true);
    setSelectedAccount(values);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    refreshData({ page: 1, size: 10 });
    setSelectedAccount({});
  };

  const handleDeleteModalOpen = (values) => {
    setIsDeleteModalOpen(true);
    setSelectedAccount(values);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    refreshData({ page, size: 10 });
    setSelectedAccount({});
  };

  const handlePagination = (page) => {
    refreshData({ page, size: 10 });
    setPage(page);
  }

  return (
    <>
      <Table
        isLoading={isLoading}
        noDataAvailable={
          (!isLoading && data?.data?.items?.length === 0) || (!isLoading && !data)
        }
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
            <Th borderTopLeftRadius={"4px"}>Account Number</Th>
            <Th>Broker</Th>
            <Th>Broker API</Th>
            <Th>Broker Key</Th>
            <Th>Account Type</Th>
            <Th>Cash Deposit</Th>
            <Th>Leverage</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.items?.map((item) => {
            return (
              <Tr key={item?.acc_id}>
                <Td>{item?.acc_id}</Td>
                <Td>{item?.broker_name}</Td>
                <Td>{item?.broker_api_key}</Td>
                <Td>{item?.broker_api_secret}</Td>
                <Td>
                  <Tag label="Live" color="green.500" bg="green.100" />
                </Td>
                <Td>$2000</Td>
                <Td>5%</Td>
                <Td>
                  <HStack gap={2}>
                    <EditIcon
                      width={5}
                      height={5}
                      cursor="pointer"
                      onClick={() => handleModalOpen(item)}
                    />
                    <DeleteIcon
                      width={5}
                      height={5}
                      cursor="pointer"
                      onClick={() => handleDeleteModalOpen(item)}
                    />
                  </HStack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Suspense fallback="">
        {isModalOpen && (
          <AddAccountModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            data={selectedAccount}
          />
        )}
      </Suspense>
      <Suspense fallback="">
        {isDeleteModalOpen && (
          <DeleteAccountModal
            isOpen={isDeleteModalOpen}
            onClose={handleDeleteModalClose}
            data={selectedAccount}
          />
        )}
      </Suspense>
    </>
  );
};

AccountsListTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  refreshData: PropTypes.func,
};

export default AccountsListTable;
