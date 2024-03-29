import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ioWebapiFetchAllAccounts } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  AccountsFilterForm,
  AccountsListTable,
} from "src/components/molecules";

const Accounts = () => {
  const { query, data, isLoading } = useFetch(ioWebapiFetchAllAccounts);
  const breadcrumbs = [
    {
      label: "Settings",
    },
    {
      label: "Accounts",
    },
  ];

  useEffect(() => {
    query({ page: 1, size: 10 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <AccountsFilterForm refreshData={query} />
      <AccountsListTable
        data={data}
        isLoading={isLoading}
        refreshData={query}
      />
    </Stack>
  );
};

export default Accounts;
