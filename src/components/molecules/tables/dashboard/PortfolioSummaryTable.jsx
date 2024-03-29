import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Table } from "src/components/atoms";

const PortfolioSummaryTable = () => {
  return (
    <Table>
      <Thead>
        <Tr border={"none"}>
          <Th borderTopLeftRadius={"4px"} p={3}>Assets</Th>
          <Th p={3}>Allocated(%)</Th>
          <Th p={3}>Current(%)</Th>
          <Th borderTopRightRadius={"4px"} p={3}>Value($)</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td p={3}>Stock++</Td>
          <Td p={3}>38%</Td>
          <Td p={3}>32%</Td>
          <Td p={3}>$3200</Td>
        </Tr>
        <Tr>
          <Td p={3}>Naked Stock</Td>
          <Td p={3}>36%</Td>
          <Td p={3}>28%</Td>
          <Td p={3}>$1500</Td>
        </Tr>
        <Tr>
          <Td p={3}>Derivates</Td>
          <Td p={3}>20%</Td>
          <Td p={3}>22%</Td>
          <Td p={3}>$500</Td>
        </Tr>
        <Tr>
          <Td p={3}>Cash</Td>
          <Td p={3}>16%</Td>
          <Td p={3}>18%</Td>
          <Td p={3}>$369</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default PortfolioSummaryTable;
