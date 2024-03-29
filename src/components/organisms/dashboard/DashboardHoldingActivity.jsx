import { Box, Heading, Stack } from "@chakra-ui/react";
import { HoldingActivityTable } from "src/components/molecules";

const DashboardHoldingActivity = () => {
  return (
    <Stack
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      gap={3}
      maxH={"222px"}
      h="222px"
      className="scrollbar-override"
    >
      <Heading as="h3" size={"xs"}>
        Holding Activity
      </Heading>
      <Box maxH={"calc(222px - 16.8px - 0.75rem)"} overflow={"auto"} h='calc(222px - 16.8px - 0.75rem)'>
        <HoldingActivityTable />
      </Box>
    </Stack>
  );
};

export default DashboardHoldingActivity;
