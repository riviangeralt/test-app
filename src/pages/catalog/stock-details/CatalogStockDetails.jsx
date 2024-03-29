import { Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ioWebapiFetchStockppDetails,
  ioWebapiFetchBacktest,
  ioWebapiFetchSimulation,
} from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  AddStockForm,
  BacktestListTable,
  SimulationListTable,
} from "src/components/molecules";
import { StockDetailsSummary } from "src/components/organisms";

const CatalogStockDetails = () => {
  const { stockId: spp_id } = useParams();
  const { query, data, isLoading } = useFetch(ioWebapiFetchStockppDetails);
  const {
    query: backtestQuery,
    data: backtestData,
    isLoading: backtestIsLoading,
  } = useFetch(ioWebapiFetchBacktest);
  const {
    query: simulationQuery,
    data: simulationData,
    isLoading: simulationIsLoading,
  } = useFetch(ioWebapiFetchSimulation);

  const breadcrumbs = [
    {
      label: "Catalog",
    },
    {
      label: "Stock++",
    },
    {
      label: data?.data?.spp_name
    },
  ];

  useEffect(() => {
    query({ spp_id });
    backtestQuery({ spp_id, size: 10 });
    simulationQuery({ spp_id, size: 10 });
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
      <StockDetailsSummary data={data?.data} />
      <AddStockForm isNotForm data={data?.data} />
      <BacktestListTable data={backtestData} isLoading={backtestIsLoading}
        handlePageChange={(page) => backtestQuery({ spp_id, page, size: 10 })}
      />
      <SimulationListTable
        data={simulationData}
        isLoading={simulationIsLoading}
        handlePageChange={(page) => simulationQuery({ spp_id, page, size: 10 })}
      />
    </Stack>
  );
};

export default CatalogStockDetails;
