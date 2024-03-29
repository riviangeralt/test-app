import { TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { EditIcon } from "src/assets";
import { Pagination, Table, Tag } from "src/components/atoms";
import { AddUserModal } from "src/components/molecules";

const AdminUsersListTable = (props) => {
  const { data, isLoading, refreshData } = props;
  const [selectedUser, setSelectedUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleEditUser = (values) => {
    setSelectedUser(values);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedUser({});
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
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>User Type</Th>
            <Th>Org</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.items?.map((user) => (
            <Tr key={user.user_id}>
              <Td>{user.user_id}</Td>
              <Td>{user.first_name}</Td>
              <Td>{user.last_name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>
                <Tag
                  label={user.user_type}
                  bg="orange.100"
                  color="orange.500"
                />
              </Td>
              <Td>{user.organization}</Td>
              <Td isNumeric>
                <EditIcon
                  cursor="pointer"
                  onClick={() => handleEditUser(user)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Suspense fallback="">
        {isModalOpen && (
          <AddUserModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            data={selectedUser}
          />
        )}
      </Suspense>
    </>
  );
};

AdminUsersListTable.propTypes = {
  data: PropTypes.object,
  refreshData: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default AdminUsersListTable;
