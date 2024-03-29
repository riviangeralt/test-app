import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Stack,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Pagination, Table } from "src/components/atoms";

const BacktestListTable = (props) => {
  const { data, isLoading, handlePageChange } = props;

  const onPageChange = (page) => {
    handlePageChange(page);
  };

  return (
    <Stack>
      <Text fontSize={"20px"} color={"gray.700"} fontWeight={600}>
        Backtest List
      </Text>

      <Table
        isLoading={isLoading}
        noDataAvailable={
          (!isLoading && data?.data?.items?.length === 0) ||
          (!isLoading && !data)
        }
      >
        <TableCaption>
          <Pagination
            activePage={data?.data?.page}
            handleChange={onPageChange}
            noOfPages={data?.data?.pages}
            total={data?.data?.total}
          />
        </TableCaption>
        <Thead>
          <Tr border={"none"}>
            <Th borderTopLeftRadius={"4px"}>Start Date</Th>
            <Th>End Date</Th>
            <Th>Stock Performance</Th>
            <Th>Stock++ Performance</Th>
            <Th>Sharpe ratio</Th>
            <Th>Max Drawdawn</Th>
            <Th borderTopRightRadius={"4px"}>No. of Trades</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.items?.map((backtest, index) => {
            return (
              <Tr key={index}>
                <Td>{backtest?.start_date}</Td>
                <Td>{backtest?.end_date}</Td>
                <Td>
                  6% <ChevronUpIcon />{" "}
                </Td>
                <Td>
                  12% <ChevronDownIcon />
                </Td>
                <Td>30</Td>
                <Td>-130</Td>
                <Td>-10</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Stack>
  );
};

BacktestListTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  handlePageChange: PropTypes.func,
};

export default BacktestListTable;
