import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Pagination } from "src/components/atoms";

const TransactionTable = () => {
  return (
    <Stack>
      <Text fontSize={"20px"} color={"#000000DE"} fontWeight={600}>
        Transaction & Orders
      </Text>
      <TableContainer>
        <Table variant="simple">
        <TableCaption margin={0} textAlign={'right'} p={2}>
          <Pagination />
        </TableCaption>
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
            <Tr>
              <Td>01/June/23</Td>
              <Td fontWeight={"bold"}>AAPL</Td>
              <Td>Buy</Td>
              <Td>10</Td>
              <Td isNumeric>$23.22</Td>
              <Td isNumeric>$4300.45</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TransactionTable;
