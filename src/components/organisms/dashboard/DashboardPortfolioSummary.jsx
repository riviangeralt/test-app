import { Box, Heading, Stack } from "@chakra-ui/react";
import { PortfolioSummaryTable } from "src/components/molecules";

const DashboardPortfolioSummary = () => {
  const ranges = [
    {
      label: "38%",
      value: 38,
      bg: "red.500",
    },
    {
      label: "26%",
      value: 26,
      bg: "yellow.500",
    },
    {
      label: "20%",
      value: 20,
      bg: "green.500",
    },
    {
      label: "16%",
      value: 16,
      bg: "blue.500",
    },
  ];
  return (
    <Stack p={4} border="1px solid rgba(171, 171, 171, 0.24)" borderRadius={4} gap={3}>
      <Heading as="h3" size={"xs"}>
        Portfolio Summary
      </Heading>
      <Box
        w="100%"
        h="6"
        borderRadius={"2xl"}
        position="relative"
        display={"flex"}
        overflow={"hidden"}
      >
        {ranges.map((range) => {
          return (
            <Box
              key={range.value}
              bg={range.bg}
              w={`${range.value}%`}
              h="100%"
              display={"flex"}
              justifyContent={"center"}
              color={"white"}
              fontWeight={600}
              userSelect={"none"}
            >
              {range.label}
            </Box>
          );
        })}
      </Box>
      <PortfolioSummaryTable />
    </Stack>
  );
};

export default DashboardPortfolioSummary;
