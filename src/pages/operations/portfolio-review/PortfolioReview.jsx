import { Stack } from "@chakra-ui/react";
import { Breadcrumb } from "src/components/atoms";
import { PortfolioReviewTabs } from "src/components/molecules";
import { PortfolioReviewSummary } from "src/components/organisms";

const PortfolioReview = () => {
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
    {
      label: "Holding Review",
    },
  ];

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <PortfolioReviewSummary />
      <PortfolioReviewTabs />
    </Stack>
  );
};

export default PortfolioReview;
