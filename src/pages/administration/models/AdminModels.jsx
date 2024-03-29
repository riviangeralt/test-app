import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ioAdminFetchAllModels } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  AdminModelFilterForm,
  AdminModelsListTable,
} from "src/components/molecules";

const AdminModels = () => {
  const { data, isLoading, query } = useFetch(ioAdminFetchAllModels);

  const breadcrumbs = [
    {
      label: "Administration",
    },
    {
      label: "Models",
    },
  ];

  useEffect(() => {
    query({page:1, size:10});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <AdminModelFilterForm refreshData={query} />
      <AdminModelsListTable
        data={data}
        isLoading={isLoading}
        refreshData={query}
      />
    </Stack>
  );
};

export default AdminModels;
