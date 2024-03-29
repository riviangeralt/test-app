import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  BacktestingDetailsActivityTable,
  HoldingListTable,
  PortfolioDetailsChart,
  PortfolioDetailsParamsChart,
} from "src/components/molecules";

const PortfolioDetailsTabs = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const randomData = months.map((month) => ({
    name: month,
    data: Math.round(Math.random() * 1000),
  }));

  return (
    <Tabs colorScheme="brand" isFitted>
      <HStack
        justifyContent="space-between"
        flexWrap={"wrap"}
        flexDirection={{
          sm: "column-reverse",
          lg: "row",
        }}
        alignItems={{
          sm: "flex-end",
          lg: "flex-start",
        }}
      >
        <TabList
          width={{
            sm: "100%",
            lg: "fit-content",
          }}
        >
          <Tab>Portfolio</Tab>
          <Tab>Params</Tab>
          <Tab>Holdings</Tab>
          <Tab>Activity</Tab>
        </TabList>

        <HStack gap={4}>
          <Button variant={"secondary"}>Modify Cash</Button>
          <Button variant={"secondary"}>Modify Leverage</Button>
        </HStack>
      </HStack>

      <TabPanels py={4}>
        <TabPanel p={0}>
          <Box
            h="400px"
            border="1px solid rgba(171, 171, 171, 0.24)"
            borderRadius={4}
            p={4}
          >
            <PortfolioDetailsChart data={randomData} />
          </Box>
        </TabPanel>
        <TabPanel p={0}>
          <Box
            h="400px"
            border="1px solid rgba(171, 171, 171, 0.24)"
            borderRadius={4}
            p={4}
          >
            <PortfolioDetailsParamsChart data={randomData} />
          </Box>
        </TabPanel>
        <TabPanel p={0}>
          <HoldingListTable />
        </TabPanel>
        <TabPanel p={0}>
          <BacktestingDetailsActivityTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PortfolioDetailsTabs;
