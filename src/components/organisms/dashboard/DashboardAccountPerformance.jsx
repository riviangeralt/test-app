import { Box, HStack, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CustomButtonGroup } from "src/components/atoms";

const DashboardAccountPerformance = () => {
  const [selectedAccount, setSelectedAccount] = useState("0");
  const accountsList = [
    {
      label: "All Accounts",
      value: 0,
    },
    {
      label: "Account 1",
      value: 1,
    },
    {
      label: "Account 2",
      value: 2,
    },
  ];

  const handleChangeAccount = (e) => setSelectedAccount(e.target.value);

  return (
    <Stack
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      gap={3}
      maxH={'319.8px'}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
        <Heading as="h3" size={"xs"}>
          Account Performance
        </Heading>
        <CustomButtonGroup
          data={accountsList}
          isAttached
          size="xs"
          onClick={handleChangeAccount}
          selectedValue={selectedAccount}
        />
      </HStack>
      <Select
        value={selectedAccount}
        size={"xs"}
        w="30%"
        onChange={handleChangeAccount}
        colorScheme="red"
      >
        {accountsList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
      <Box h="40" bg='tomato' />
      <HStack justifyContent="space-between">
        <Stack gap={0}>
          <Text fontSize={"14px"}>Stock++</Text>
          <Text fontWeight={600}>38%</Text>
        </Stack>
        <Stack gap={0}>
          <Text fontSize={"14px"}>Naked Stocks</Text>
          <Text fontWeight={600}>38%</Text>
        </Stack>
        <Stack gap={0}>
          <Text fontSize={"14px"}>Derivatives</Text>
          <Text fontWeight={600}>38%</Text>
        </Stack>
        <Stack gap={0}>
          <Text fontSize={"14px"}>Cash</Text>
          <Text fontWeight={600}>38%</Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default DashboardAccountPerformance;
