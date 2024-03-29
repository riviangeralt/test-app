import {
    Box,
    Button,
    HStack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import {
    BacktestingDetailsActivityTable, PortfolioHoldingReviewChart, TransactionTable
} from "src/components/molecules";

const PortfolioReviewTabs = () => {

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
          <Tab>Overview</Tab>
          <Tab>Transactions</Tab>
          <Tab>Activity</Tab>
        </TabList>

        <HStack
          justifyContent={"flex-end"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <HStack flexWrap={"wrap"}>
            <Button variant="secondary">Activate</Button>
            <Button variant="secondary">Liquidate</Button>
            <Button variant="secondary">Change Mode</Button>
            <Button variant="solid">Make Passive</Button>
          </HStack>
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
             <PortfolioHoldingReviewChart data={randomData}/>
          </Box>
        </TabPanel>
        <TabPanel p={0}>
        <TransactionTable />
        </TabPanel>
        <TabPanel p={0}>
          <BacktestingDetailsActivityTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PortfolioReviewTabs;
