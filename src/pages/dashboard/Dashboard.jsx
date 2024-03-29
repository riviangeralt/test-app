import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { DashboardTabs } from "src/components/molecules";
import {
  DashboardAccountPerformance,
  DashboardActivePassive,
  DashboardAttribution,
  DashboardHoldingActivity,
  DashboardPortfolioSuggestions,
  DashboardPortfolioSummary,
  DashboardReturns,
  DashboardSummary,
  DashboardTopGainers,
} from "src/components/organisms";

const Dashboard = () => {
  return (
    <Stack gap={6}>
      <DashboardSummary />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 2,
          }}
        >
          <DashboardPortfolioSummary />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 2,
          }}
        >
          <DashboardAccountPerformance />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardActivePassive />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardHoldingActivity />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardPortfolioSuggestions />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardTopGainers />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardAttribution />
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <DashboardReturns />
        </GridItem>
      </Grid>
      <DashboardTabs />
    </Stack>
  );
};

export default Dashboard;
