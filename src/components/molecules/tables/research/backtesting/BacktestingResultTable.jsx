import { ChevronDownIcon, ChevronUpIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  HStack,
  Skeleton,
  Stack,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import ViewIcon from "src/assets/icons/ViewIcon";
import { Table, Tag } from "src/components/atoms";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BacktestingResultTable = (props) => {
  const { data } = props;

  const navigate = useNavigate();
  const handleBacktestNavigate = (id) =>
    navigate(`/research/backtest-details/${id}`);

  return (
    <Stack gap={4}>
      <Text fontSize={"20px"} color={"#000000DE"} fontWeight={600}>
        Backtest Results
      </Text>

      <Table noDataAvailable={data.length === 0}>
        {/* <TableCaption margin={0} textAlign={"right"} p={2}>
            <Pagination />
          </TableCaption> */}
        <Thead>
          <Tr border={"none"}>
            <Th borderTopLeftRadius={"4px"}></Th>
            <Th>Return</Th>
            <Th>Drawdown</Th>
            <Th>Trades</Th>
            <Th>Sharpe Ratio</Th>
            <Th>Status</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((backtest) => {
            return (
              <Tr key={backtest.backtest_id}>
                {backtest.loading ? (
                  <Td colSpan={5}>
                    <Skeleton height="20px" />
                  </Td>
                ) : (
                  <>
                    <Td fontWeight={"bold"} bg="gray.500">
                      {backtest?.results?.stockpp}
                    </Td>
                    <Td>
                      {backtest?.results?.performance?.returns}%{" "}
                      <ChevronUpIcon />
                    </Td>
                    <Td>
                      {backtest?.results?.performance?.max_drawdown}%{" "}
                      <ChevronDownIcon />
                    </Td>
                    <Td>
                      {backtest?.results?.performance?.no_of_trades}%{" "}
                      <ChevronUpIcon />
                    </Td>
                    <Td>{backtest?.results?.performance?.sharp_ratio}</Td>
                  </>
                )}
                <Td>
                  <Tag
                    label={backtest.loading ? "Running" : "Completed"}
                    color={backtest.loading ? "orange.500" : "green.500"}
                    bg={backtest.loading ? "orange.100" : "green.100"}
                  />
                </Td>
                {!backtest.loading && (
                  <Td>
                    <HStack gap={6}>
                      <ViewIcon
                        cursor="pointer"
                        onClick={() =>
                          handleBacktestNavigate(backtest.backtest_id || backtest.bid)
                        }
                      />
                      <DownloadIcon cursor="pointer" />
                    </HStack>
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Stack>
  );
};

BacktestingResultTable.propTypes = {
  data: PropTypes.array,
};

export default BacktestingResultTable;
