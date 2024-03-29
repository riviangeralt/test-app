import { Stack } from "@chakra-ui/react";
import { Breadcrumb } from "src/components/atoms";
import {
  PortfolioDetailsTabs
} from "src/components/molecules";
import { PortfolioDetailsSummary } from "src/components/organisms";

const PortfolioDetails = () => {
  const breadcrumbs = [
    {
      label: "Operations",
    },
    {
      label: "Portfolios",
    },
    {
      label: "Portfolio Name",
    },
  ];
  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <PortfolioDetailsSummary />
      <PortfolioDetailsTabs />
    </Stack>
  );
};

export default PortfolioDetails;
