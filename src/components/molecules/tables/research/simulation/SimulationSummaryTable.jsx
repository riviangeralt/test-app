import { ChevronDownIcon, ChevronUpIcon, DownloadIcon } from "@chakra-ui/icons";
import {
    HStack,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import ViewIcon from "src/assets/icons/ViewIcon";
import { Tag } from "src/components/atoms";
const SimulationSummaryTable = () => {
  return (
    <Stack gap={4}>
      <Text fontSize={"20px"} color={"#000000DE"} fontWeight={600}>
        Summary
      </Text>

      <TableContainer className="scrollbar-override">
        <Table variant="simple">
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
              <Th borderTopRightRadius={"4px"} isNumeric>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={"bold"} bg='gray.500'>
                AAPL
              </Td>
              <Td>
                65% <ChevronUpIcon/>
              </Td>
              <Td>25% <ChevronDownIcon/></Td>
              <Td>20% <ChevronUpIcon/></Td>
              <Td>1.24</Td>
              <Td>
                <Tag label="Completed" color='green.500' bg='green.100'/>
              </Td>
              <Td>
                <HStack gap={6}>
                    <ViewIcon cursor="pointer"/>
                    <DownloadIcon cursor="pointer"/>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SimulationSummaryTable;
