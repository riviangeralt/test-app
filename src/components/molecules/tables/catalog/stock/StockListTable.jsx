import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Scrip, Table } from "src/components/atoms";

const StockListTable = (props) => {
  const { data, isLoading, handleStockSelect } = props;
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let prevSelected = [...selected];
    if (checked) {
      prevSelected = [...prevSelected, name];
    } else {
      prevSelected = prevSelected.filter((item) => item !== name);
    }
    setSelected(prevSelected);
    handleStockSelect(
      data?.data?.filter((element) =>
        prevSelected.includes(element.spp_id?.toString())
      )
    );
  };

  return (
    <Table
      isLoading={isLoading}
      noDataAvailable={
        (!isLoading && data?.data?.length === 0) || (!isLoading && !data)
      }
    >
      <TableCaption>
        <Pagination />
      </TableCaption>
      <Thead>
        <Tr border={"none"}>
          <Th borderTopLeftRadius={"4px"}></Th>
          <Th>Stock++</Th>
          <Th>Propensity Score</Th>
          <Th>Stochastic Score</Th>
          <Th>Volatility Opportunity</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.data?.map((stock) => (
          <Tr key={stock.spp_id}>
            <Td>
              <Checkbox
                colorScheme="brand"
                size={"lg"}
                onChange={handleCheckboxChange}
                isDisabled={
                  selected.length === 1 && Number(selected[0]) !== stock.spp_id
                }
                name={stock.spp_id}
              />
            </Td>
            <Td
              cursor={"pointer"}
              onClick={() => navigate(`/catalog/stock/${stock.spp_id}`)}
            >
              <Scrip label={stock.spp_name} mr={2} /> - {stock.ticker}
            </Td>
            <Td>
              {stock.scores.volatitlity_score ? (
                <>
                  {stock.scores.propensity_score}% <ChevronUpIcon />
                </>
              ) : (
                "-"
              )}
            </Td>
            <Td>
              {stock.scores.stochastic_score ? (
                <>
                  {stock.scores.stochastic_score}% <ChevronDownIcon />
                </>
              ) : (
                "-"
              )}
            </Td>
            <Td>
              {stock.scores.volatitlity_score ? (
                <>
                  {stock.scores.volatitlity_score}% <ChevronDownIcon />
                </>
              ) : (
                "-"
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

StockListTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  handleStockSelect: PropTypes.func,
};

export default StockListTable;
