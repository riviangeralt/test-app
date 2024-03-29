import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ioAdminFetchAllUsers } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  AdminUsersFilterForm,
  AdminUsersListTable,
} from "src/components/molecules";

const AdminUsers = () => {
  const { data, isLoading, query } = useFetch(ioAdminFetchAllUsers);

  const breadcrumbs = [
    {
      label: "Administration",
    },
    {
      label: "Users",
    },
  ];

  useEffect(() => {
    query({page: 1, size: 10});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <AdminUsersFilterForm refreshData={query} />
      <AdminUsersListTable data={data} isLoading={isLoading} refreshData={query}/>
    </Stack>
  );
};

export default AdminUsers;
