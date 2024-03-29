import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Table } from "src/components/atoms";

const HoldingActivityTable = () => {
  return (
    <Table>
      <Thead>
        <Tr border={"none"}>
          <Th borderTopLeftRadius={"4px"} p={3}>
            Date
          </Th>
          <Th p={3}>Holding</Th>
          <Th borderTopRightRadius={"4px"} p={3}>
            Description
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td p={3}>7/1/23</Td>
          <Td p={3}>TSLA315</Td>
          <Td p={3}>New Holding</Td>
        </Tr>
        <Tr>
          <Td p={3}>7/1/23</Td>
          <Td p={3}>TSLA315</Td>
          <Td p={3}>New Holding</Td>
        </Tr>
        <Tr>
          <Td p={3}>7/1/23</Td>
          <Td p={3}>TSLA315</Td>
          <Td p={3}>New Holding</Td>
        </Tr>
        <Tr>
          <Td p={3}>7/1/23</Td>
          <Td p={3}>TSLA315</Td>
          <Td p={3}>New Holding</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default HoldingActivityTable;
