import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Scrip, Table, Tag } from "src/components/atoms";

const BacktestingDetailsActivityTable = (props) => {
  const { data } = props;

  return (
    <Table noDataAvailable={(data && data?.length === 0) || !data}>
      {/* <TableCaption margin={0} textAlign={"right"} p={2}>
          <Pagination />
        </TableCaption> */}
      <Thead>
        <Tr border={"none"}>
          <Th borderTopLeftRadius={"4px"}>Date</Th>
          <Th>Holding</Th>
          <Th>Type</Th>
          <Th>Decision</Th>
          <Th>Action</Th>
          <Th borderTopRightRadius={"4px"}>
            Status
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* {data?.map((ele, idx) => ( */}
        <Tr>
          <Td>20-01-2023</Td>
          <Td>
            <Scrip label="AAPL315" />
          </Td>
          <Td>Mode Change</Td>
          <Td>From: Strategic Increase To Tactical Increase</Td>
          <Td>Automatic by Model 315 v1.0</Td>
          <Td>
            <Tag label="Complete" color="green.500" bg="green.100" />
          </Td>
        </Tr>
        {/* ))} */}
      </Tbody>
    </Table>
  );
};

BacktestingDetailsActivityTable.propTypes = {
  data: PropTypes.array,
};

export default BacktestingDetailsActivityTable;
