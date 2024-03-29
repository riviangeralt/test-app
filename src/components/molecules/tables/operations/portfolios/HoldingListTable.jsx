import {
  Button,
  ButtonGroup,
  HStack,
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
import { Suspense, useState } from "react";
import { Pagination, Scrip } from "src/components/atoms";
import { AddHoldingModal } from "src/components/molecules";

const HoldingListTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Stack gap={4}>
        <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
          <Text fontSize={"20px"} color={"#000000DE"} fontWeight={600}>
            Holdings
          </Text>
          <HStack gap={4} flexWrap={"wrap"}>
            <ButtonGroup isAttached variant={"secondary"}>
              <Button>Stock++ View</Button>
              <Button>Broker View</Button>
            </ButtonGroup>
            <Button variant={"secondary"} onClick={handleModalOpen}>
              Add Holding
            </Button>
          </HStack>
        </HStack>
        <TableContainer className="scrollbar-override">
          <Table variant="simple">
            <TableCaption margin={0} textAlign={"right"} p={2}>
              <Pagination />
            </TableCaption>
            <Thead>
              <Tr border={"none"}>
                <Th borderTopLeftRadius={"4px"}></Th>
                <Th>Name</Th>
                <Th>Allocation %</Th>
                <Th>Capital Allocated</Th>
                <Th>Current Value</Th>
                <Th>P&l</Th>
                <Th borderTopRightRadius={"4px"} isNumeric>
                  P&L %
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td>
                  <Scrip label="TSLA315" />
                </Td>
                <Td>25%</Td>
                <Td>20</Td>
                <Td>$2000</Td>
                <Td>$50</Td>
                <Td>25%</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
      <Suspense fallback="">
        {isModalOpen && (
          <AddHoldingModal isOpen={isModalOpen} onClose={handleModalClose} />
        )}
      </Suspense>
    </>
  );
};

export default HoldingListTable;
