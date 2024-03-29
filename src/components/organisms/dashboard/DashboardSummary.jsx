import { Grid, GridItem, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { CardV2 } from "src/components/atoms";

const DashboardSummary = () => {
  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={4}>
      <GridItem
        colSpan={{
          lg: 3,
          sm: 8,
        }}
      >
        <Heading fontSize={"20px"} color="gray.700" mb={2}>
          Welcome Back!
        </Heading>
        <Text fontSize={"14px"}>
          Your portfolio growth has 5% for the last month
        </Text>
      </GridItem>
      <GridItem
        colStart={{
          lg: 6,
          sm: 1,
        }}
        colEnd={9}
      >
        <HStack gap={4} justifyContent={"center"} flexWrap={"wrap"}>
          <Stack gap={2} alignItems={"center"}>
            <Heading fontSize={"20px"} color="gray.700" fontWeight={"medium"}>
              5.85%
            </Heading>
            <Text fontSize={"14px"}>Today&apos;s Performance</Text>
          </Stack>
          <Stack gap={2} alignItems={"center"}>
            <Heading fontSize={"20px"} color="gray.700" fontWeight={"medium"}>
              6.75%
            </Heading>
            <Text fontSize={"14px"}>MTD Returns</Text>
          </Stack>
          <Stack gap={2} alignItems={"center"}>
            <Heading fontSize={"20px"} color="gray.700" fontWeight={"medium"}>
              -3.75%
            </Heading>
            <Text fontSize={"14px"}>YTD Returns</Text>
          </Stack>
        </HStack>
      </GridItem>
      <GridItem
        colSpan={{
          lg: 2,
          sm: 8,
        }}
      >
        <CardV2
          label="Capital"
          value="$3000"
          description="Deployed Capital"
          returns="-3.75"
        />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 2,
          sm: 8,
        }}
      >
        <CardV2
          label="Leverage"
          value="$2500"
          description="Leverage%"
          returns="-3.75"
        />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 2,
          sm: 8,
        }}
      >
        <CardV2
          label="Returns"
          value="$500"
          description="Returns%"
          returns="-3.75"
        />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 2,
          sm: 8,
        }}
      >
        <CardV2 label="Holdings" value="15" description="Active" returns="20" />
      </GridItem>
    </Grid>
  );
};

export default DashboardSummary;
