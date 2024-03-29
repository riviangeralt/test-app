import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Pagination } from "src/components/atoms";
import { PortfolioListChart } from "src/components/molecules";

const PortfolioListTable = () => {

  const randomData = Array(30).fill(0).map((month) => ({
    name: month,
    data: Math.round(Math.random() * 1000),
  }));
  return (
    <TableContainer className="scrollbar-override">
      <Table variant="simple">
        <TableCaption margin={0} textAlign={"right"} p={2}>
          <Pagination />
        </TableCaption>
        <Thead>
          <Tr border={"none"}>
            <Th borderTopLeftRadius={"4px"}></Th>
            <Th>Account</Th>
            <Th>Portfolio Name</Th>
            <Th></Th>
            <Th>1D</Th>
            <Th>1W</Th>
            <Th>MTD</Th>
            <Th>YTD</Th>
            <Th borderTopRightRadius={"4px"} isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Checkbox colorScheme="brand" size="lg" />
            </Td>
            <Td>Robin Hood</Td>
            <Td>Robin Hood Trading</Td>
            <Td p={0}>
              <Box width={"68px"} height={'32px'} minW='100%'>
                <PortfolioListChart data={randomData}/>
              </Box>
            </Td>
            <Td>
              65% <ChevronUpIcon />
            </Td>
            <Td>
              22% <ChevronDownIcon />
            </Td>
            <Td>
              48% <ChevronUpIcon />
            </Td>
            <Td>
              54% <ChevronUpIcon />
            </Td>
            <Td>
              <ChevronDownIcon fontSize={"1.25rem"} cursor="pointer" />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioListTable;
