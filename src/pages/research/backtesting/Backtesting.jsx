import { Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ioWebapiFetchAllBacktestDetails,
  ioWebapiRunBacktestPost,
} from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  BacktestingChart,
  BacktestingForm,
  BacktestingResultTable,
} from "src/components/molecules";
import { dateFormatter, isSuccessStatus } from "src/utils";

const Backtesting = () => {
  const { stockId } = useParams();
  const toast = useToast();
  const [backtestsData, setBacktestsData] = useState([]);
  const breadcrumbs = [
    {
      label: "Research",
    },
    {
      label: "Backtesting",
    },
  ];

  const { query } = useFetch(ioWebapiRunBacktestPost, true);
  const { query: backtestQuery } = useFetch(ioWebapiFetchAllBacktestDetails);

  const randomData = Array(20)
    .fill(0)
    .map(() => ({
      name: (Math.random() + 1).toString(36).substring(7),
      uv: Math.round(Math.random() * 1000),
      pv: Math.round(Math.random() * 1000),
      share: Math.round(Math.random() * 1000),
    }));

  const handleSubmit = async (values) => {
    try {
      const { start_date, end_date, ticker, ...rest } = values;
      const symbols = Object.entries(rest)
        .filter(([, value]) => value)
        .map(([key]) => ({
          stockpp: key,
          id_stockpp: parseInt(stockId),
        }));
      if (symbols.length === 0) {
        toast({
          description: "Please select at least one stockpp",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }

      const payload = {
        start_date: dateFormatter(start_date),
        end_date: dateFormatter(end_date),
        ticker,
        stockpp_list: symbols,
      };
      const queryRes = await query(payload);
      if (isSuccessStatus(queryRes)) {
        let backtests = queryRes.data?.map((ele) => ({
          ...ele,
          loading: true,
        }));
        setBacktestsData(backtests);
        let i = 0;
        let wait = setInterval(() => {
          if (i >= queryRes.data.length) {
            clearInterval(wait);
            return;
          } else {
            backtestQuery({ bid: backtests[i].backtest_id })
              .then((res) => {
                const backtestIndex = backtests.findIndex(
                  (b) => b.backtest_id === res?.data?.bid
                );
                if (backtestIndex !== -1) {
                  const items = [...backtests];
                  const resData = {
                    ...res?.data,
                    results: JSON.parse(res?.data?.results),
                  };
                  items[backtestIndex] = { ...resData, loading: false };
                  backtests = items;
                  setBacktestsData(items);
                }
              })
              .catch((err) => {
                const backtestIndex = backtests.findIndex(
                  (b) => b.backtest_id === backtests[i - 1].backtest_id
                );
                if (backtestIndex !== -1) {
                  const items = [...backtests];
                  items[backtestIndex] = { err, loading: false };
                  backtests = items;
                  setBacktestsData(items);
                }
              });
            i++;
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Error in handleSubmit", error);
    }
  };

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <BacktestingForm handleSubmit={handleSubmit} />
      <BacktestingChart data={randomData} />
      <BacktestingResultTable data={backtestsData} />
    </Stack>
  );
};

export default Backtesting;
