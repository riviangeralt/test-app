import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ioWebapiFetchAllStockpp } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { StockFilterForm, StockListTable } from "src/components/molecules";

const Stock = () => {
  const [selectedStock, setSelectedStock] = useState([]);
  const { query, isLoading, data } = useFetch(ioWebapiFetchAllStockpp);

  const breadcrumbs = [
    {
      label: "Catalog",
    },
    {
      label: "Stock++",
    },
  ];

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
  }

  useEffect(() => {
    query({page:1, size:10});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <StockFilterForm data={selectedStock}/>
      <StockListTable data={data} isLoading={isLoading} handleStockSelect={handleStockSelect} />
    </Stack>
  );
};

export default Stock;
