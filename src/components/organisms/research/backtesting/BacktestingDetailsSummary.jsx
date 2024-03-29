import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Card, Scrip } from "src/components/atoms";
import PropTypes from "prop-types";

const BacktestingDetailsSummary = (props) => {
  const { data } = props;
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={2}
        colSpan={{
          lg: 2,
          sm: 4,
        }}
      >
        <Stack
          p={4}
          border="1px solid rgba(171, 171, 171, 0.24)"
          borderRadius={8}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={4}
          h="100%"
        >
          <Scrip label={data.stockpp || "-"} />
          <Text color={"gray.600"}>
            Start Date{" "}
            <Text as="span" color="gray.700" fontWeight={600}>
              {data.start_date}
            </Text>
          </Text>
          <Text color={"gray.600"}>
            End Date{" "}
            <Text as="span" color="gray.700" fontWeight={600}>
              {data.end_date}
            </Text>
          </Text>
          <Text color={"gray.600"}>
            Backtest ID{" "}
            <Text as="span" color="gray.700" fontWeight={600}>
              {data.bid}
            </Text>
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        colSpan={{
          lg: 1,
          sm: 2,
        }}
      >
        <Card
          label="Drawdawn %"
          value={data?.performance?.max_drawdown?.toFixed(2) || 0}
        />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 1,
          sm: 2,
        }}
      >
        <Card
          label="Profit %"
          value={data?.performance?.returns?.toFixed(2) || 0}
          bg="brand.300"
          color="brand.500"
        />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 1,
          sm: 2,
        }}
      >
        <Card label="Trades" value={data?.performance?.no_of_trades || 0} />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 1,
          sm: 2,
        }}
      >
        <Card
          label="Sharpe Ratio"
          value={data?.performance?.sharp_ratio?.toFixed(2) || 0}
        />
      </GridItem>
    </Grid>
  );
};

BacktestingDetailsSummary.propTypes = {
  data: PropTypes.object,
};

export default BacktestingDetailsSummary;
