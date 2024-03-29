import { Stack } from "@chakra-ui/react";
import { Breadcrumb } from "src/components/atoms";
import {
  PortfolioFilterForm,
  PortfolioListTable,
} from "src/components/molecules";
const Portfolios = () => {
  const breadcrumbs = [
    {
      label: "Operations",
    },
    {
      label: "Portfolios",
    },
  ];

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <PortfolioFilterForm />
      <PortfolioListTable />
    </Stack>
  );
};

export default Portfolios;
