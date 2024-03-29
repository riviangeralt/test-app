import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Card } from "src/components/atoms";
import { CashDeployed } from "src/components/organisms";

const PortfolioDetailsSummary = () => {
  return (
    <Grid
      templateColumns={{
        lg: "repeat(6, 1fr)",
        sm: "repeat(2, 1fr)",
      }}
      templateRows={"repeat(2, 1fr)"}
      gap={4}
      h={{
        sm: "auto",
        lg: "200px",
      }}
    >
      <GridItem h="100%" colSpan={2} rowSpan={2}>
        <Box
          p={4}
          border="1px solid rgba(171, 171, 171, 0.24)"
          borderRadius={4}
          height={"100%"}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          gap={6}
        >
          <Text color='gray.700'>Software / Saas Platform</Text>
          <Text color='gray.700'>Start Date 01-June-2023</Text>
          <Text color='gray.700'>Cash $30000</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <CashDeployed />
      </GridItem>
      <GridItem>
        <Card label="Returns" value="2%" bg="green.100" color="green.500" />
      </GridItem>
      <GridItem>
        <Card label="Number of Holdings" value="15" />
      </GridItem>
      <GridItem>
        <Card label="Active Holdings" value="10" />
      </GridItem>
      <GridItem>
        <Card label="Leverage" value="25%" />
      </GridItem>
    </Grid>
  );
};

export default PortfolioDetailsSummary;
