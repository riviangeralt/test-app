import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  BacktestingDetailsActivityTable,
  BacktestingDetailsGraphChart,
  BacktestingDetailsTransactionTable,
} from "src/components/molecules";
import {
  BacktestingDetailsRisks
} from "src/components/organisms";

const BacktestingDetailsTabs = (props) => {
  const { data } = props;
  const randomData = Array(10)
    .fill(0)
    .map(() => ({
      name: (Math.random() + 1).toString(36).substring(7),
      uv: Math.round(Math.random() * 1000),
      pv: Math.round(Math.random() * 1000),
      share: Math.round(Math.random() * 1000),
    }));
  return (
    <Tabs colorScheme="brand" isFitted>
      <TabList
        width={{
          sm: "100%",
          lg: "fit-content",
        }}
      >
        <Tab>Graph</Tab>
        <Tab>Transaction</Tab>
        <Tab>Activity</Tab>
      </TabList>
      <TabPanels py={4}>
        <TabPanel p={0} display="flex"  flexDirection='column' gap={4}>
          <BacktestingDetailsGraphChart data={data?.graphData} />
          <BacktestingDetailsRisks data={randomData}/>
        </TabPanel>
        <TabPanel p={0}>
          <BacktestingDetailsTransactionTable data={data?.transactionData} />
        </TabPanel>
        <TabPanel p={0}>
          {/* <BacktestingDetailsActivityFlow /> */}
          <BacktestingDetailsActivityTable data={data?.transactionData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

BacktestingDetailsTabs.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BacktestingDetailsTabs;
