import { Box, HStack, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const DashboardActivePassive = () => {
  const data = [
    { name: "Active", students: 400, color: "#DA6F0D" },
    { name: "Passive", students: 700, color: "#DEB110" },
    { name: "Naked", students: 1200, color: "#EF0A0A" },
  ];
  return (
    <Stack
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      gap={3}
    >
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Heading as="h3" size={"xs"}>
          Active vs Passive
        </Heading>
        <Select size={"xs"} width={"auto"}>
          <option value={"0"}>By Holdings</option>
        </Select>
      </HStack>
      <HStack>
        <Box w="40%" maxW="40%" h={150}>
          <ResponsiveContainer>
            <PieChart width={"90%"} height={100}>
              <Pie
                data={data}
                dataKey="students"
                outerRadius={60}
                innerRadius={50}
                blendStroke
              >
                {data.map((entry, index) => (
                  <Cell
                    style={{ outline: "none" }}
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Stack w='60%'>
          {data.map((item, index) => {
            return (
              <HStack key={index} justifyContent={"space-between"}>
                <HStack gap={1}>
                  <Box width={4} height={4} bg={item.color} borderRadius={4} />
                  <Text color={"gray.600"} fontSize={14}>
                    {item.name}
                  </Text>
                </HStack>
                <Text color="gray.700" fontWeight={600} fontSize={14}>
                  25%
                </Text>
              </HStack>
            );
          })}
        </Stack>
      </HStack>
    </Stack>
  );
};

export default DashboardActivePassive;
