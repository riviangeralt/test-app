import { Stack, useToast } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ioWebapiSimulationMarketdataGeneratePost,
  ioWebapiRunSimulationPost,
} from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  SimulationChart,
  SimulationForm,
  SimulationSummaryTable,
} from "src/components/molecules";
import { dateFormatter, isSuccessStatus } from "src/utils";

const Simulation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [marketData, setMarketData] = useState([]);
  const { query } = useFetch(ioWebapiRunSimulationPost, true);
  const { query: marketDataQuery } = useFetch(
    ioWebapiSimulationMarketdataGeneratePost,
    true
  );
  const { stockId } = useParams();
  const toast = useToast();
  const breadcrumbs = [
    {
      label: "Research",
    },
    {
      label: "Simulation",
    },
  ];

  function convertData(data) {
    const convertedData = [];

    // Extracting the keys from the provided data (e.g., "2023-07-18T00:00:00Z")
    const dateKeys = Object.keys(data.close);

    // Loop through the date keys and create an object for each date
    dateKeys.forEach((dateKey) => {
      const dateObject = {
        close: data.close[dateKey].toFixed(2),
        open: data.open[dateKey].toFixed(2),
        high: data.high[dateKey].toFixed(2),
        low: data.low[dateKey].toFixed(2),
        date: dateKey,
      };
      convertedData.push(dateObject);
    });

    return convertedData;
  }

  const handleSubmit = async (values) => {
    try {
      setIsVisible(false);
      const { start_date, end_date, ticker, ...rest } = values;
      const symbols = Object.entries(rest)
        .filter(([, value]) => value)
        .map(([key]) => ({
          symbol: key,
          id: parseInt(stockId),
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
        const marketDataRes = await marketDataQuery({
          start_date: dateFormatter(start_date),
          end_date: dateFormatter(end_date),
          ticker,
          params: {},
        });

        if (marketDataRes) {
          setMarketData(convertData(marketDataRes.data.simulation_marketdata));
          setIsVisible(true);
        }
      }
    } catch (error) {
      console.error("Error in handleSubmit", error);
    }
  };

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <SimulationForm handleSubmit={handleSubmit} />
      {isVisible && (
        <Suspense fallback={""}>
          <SimulationChart data={marketData} />
          <SimulationSummaryTable />
        </Suspense>
      )}
    </Stack>
  );
};

export default Simulation;
