import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ioAdminFetchAllStockpp } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  AdminStockFilterForm,
  AdminStockListTable,
} from "src/components/molecules";

const AdminStock = () => {
  const { query, isLoading, data } = useFetch(ioAdminFetchAllStockpp);


  const breadcrumbs = [
    {
      label: "Administration",
    },
    {
      label: "Stock++",
    },
  ];

  useEffect(() => {
    query({page:1, size:10});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <AdminStockFilterForm refreshData={query} />
      <AdminStockListTable data={data} isLoading={isLoading} refreshData={query}/>
    </Stack>
  );
};

export default AdminStock;
