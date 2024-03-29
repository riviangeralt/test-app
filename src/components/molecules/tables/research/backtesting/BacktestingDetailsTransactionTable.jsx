import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Table } from "src/components/atoms";
import { dateFormatter, numberWithCommas } from "src/utils";

const BacktestingDetailsTransactionTable = (props) => {
  const { data } = props;

  return (
    <Table noDataAvailable={data && data?.length === 0 || !data}>
      {/* <TableCaption margin={0} textAlign={"right"} p={2}>
        <Pagination />
      </TableCaption> */}
      <Thead>
        <Tr border={"none"}>
          <Th borderTopLeftRadius={"4px"}>Date</Th>
          <Th></Th>
          <Th>Buy/Sell</Th>
          <Th>Qty</Th>
          <Th isNumeric>Average Price</Th>
          <Th borderTopRightRadius={"4px"} isNumeric>
            Total
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((ele, idx) => (
          <Tr key={idx}>
            <Td>{dateFormatter(ele.datetime)}</Td>
            <Td fontWeight={600} color={"gray.700"}>
              {ele.ticker}
            </Td>
            <Td textTransform={"capitalize"}>{ele.direction}</Td>
            <Td>{ele.quantity || 0}</Td>
            <Td isNumeric>{numberWithCommas(ele.avg_price) || 0}</Td>
            <Td isNumeric>{numberWithCommas(ele.avg_price) || 0}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

BacktestingDetailsTransactionTable.propTypes = {
  data: PropTypes.array,
};

export default BacktestingDetailsTransactionTable;
