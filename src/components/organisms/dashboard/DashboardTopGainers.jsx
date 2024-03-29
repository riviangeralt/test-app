import { HStack, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { Scrip } from "src/components/atoms";

const DashboardTopGainers = () => {
  return (
    <Stack
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      gap={3}
      maxH={"222px"}
      h="222px"
      className="scrollbar-override"
      overflow={"auto"}
    >
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Heading as="h3" size={"xs"}>
          Top Gainers
        </Heading>
        <Select size={"xs"} width={"auto"}>
          <option value={"0"}>Month</option>
        </Select>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Scrip label="TSLA315" /> <Text>$134.4</Text>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Scrip label="TSLA315" /> <Text>$134.4</Text>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Scrip label="TSLA315" /> <Text>$134.4</Text>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Scrip label="TSLA315" /> <Text>$134.4</Text>
      </HStack>
    </Stack>
  );
};

export default DashboardTopGainers;
