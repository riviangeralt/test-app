import { Grid, GridItem } from "@chakra-ui/react";
import { StocksChart } from "src/components/organisms";
import { Card } from "src/components/atoms";

const PortfolioReviewSummary = () => {
  return (
    <Grid
      h={{
        sm: "auto",
        lg: "200px",
      }}
      templateRows={{
        sm: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      templateColumns={{
        sm: "repeat(2, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={2}>
        <StocksChart />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="Max Drawdawn" value={"$ 3000"} />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="Transactions" value="15" />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="P&L" value="15" />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="Primary Ticker" value="AAPL" />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="Model" value="315" />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 2,
          lg: 1,
        }}
      >
        <Card label="Algo" value="Passive" bg="green.100" color="green.500" />
      </GridItem>
    </Grid>
  );
};

export default PortfolioReviewSummary;
