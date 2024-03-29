import { Search2Icon } from "@chakra-ui/icons";
import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Input } from "src/components/atoms";
import { AccountsListTable } from "../../";

const DashboardTabs = () => {
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
          // overflow={'auto'}
          flexWrap={"wrap"}
        >
          <Tab>Accounts</Tab>
          <Tab isDisabled>Portfolios</Tab>
          <Tab isDisabled>Holdings</Tab>
          <Tab isDisabled>Recommendations</Tab>
          <Tab isDisabled>Activity</Tab>
          <Tab isDisabled>Transactions</Tab>
        </TabList>

        <Input width="auto" placeholder="Search" rightIcon={<Search2Icon />} />
      </HStack>
      <TabPanels py={4}>
        <TabPanel p={0}>
          <AccountsListTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DashboardTabs;
