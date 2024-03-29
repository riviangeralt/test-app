import { Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ioWebapiFetchAllBacktestDetails } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { BacktestingDetailsTabs } from "src/components/molecules";
import { BacktestingDetailsSummary } from "src/components/organisms";
import { isSuccessStatus } from "src/utils";

const BacktestingDetails = () => {
  const { bId: bid } = useParams();
  const [summaryData, setSummaryData] = useState({});
  const [tabsData, setTabsData] = useState({});
  const breadcrumbs = [
    {
      label: "Research",
    },
    {
      label: "Backtesting",
    },
    {
      label: "Backtesting Details",
    },
  ];
  const { query, isLoading } = useFetch(ioWebapiFetchAllBacktestDetails);

  const fetchBacktestDetails = async () => {
    try {
      const queryRes = await query({ bid });
      if (isSuccessStatus(queryRes)) {
        const { results, start_date, end_date, bid } = queryRes.data;
        const parsedResults = JSON.parse(results);
        setSummaryData({
          start_date,
          end_date,
          bid,
          stockpp: parsedResults?.stockpp,
          performance: parsedResults?.performance,
        });
        setTabsData({
          graphData: parsedResults?.position_values.map(ele=>({
            ...ele,
            value: Number(parseFloat(ele.value).toFixed(2)),
          })),
          transactionData: parsedResults?.transactions,
        })
      }
    } catch (error) {
      console.error("Error in fetchBacktestDetails", error);
    }
  };

  useEffect(() => {
    fetchBacktestDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Stack h="100%" w="100%" alignItems={"center"} justifyContent={"center"}>
        <Spinner color="brand.500" size="xl" />
      </Stack>
    );
  }

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <BacktestingDetailsSummary data={summaryData} />
      <BacktestingDetailsTabs data={tabsData} />
    </Stack>
  );
};

export default BacktestingDetails;
