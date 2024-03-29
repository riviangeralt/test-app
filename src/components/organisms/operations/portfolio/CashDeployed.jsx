import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const CashDeployed = () => {
  const data = [
    { name: "Returns", students: 400, color: "#DA6F0D" },
    { name: "Number of Holdings", students: 700, color: "#DEB110" },
  ];
  return (
    <Box
      p={{
        lg:1,
        sm:4
      }}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      height={"100%"}
    >
      <HStack height="100%" width="100%" alignItems="center" gap={1}
      flexDirection={{
        sm:'column',
        lg:'row'
      }}
      >
        <Box
          width={{
            lg: "45%",
            sm: "100%",
          }}
          height="100%"
        >
          <ResponsiveContainer>
            <PieChart width={200} height={200}>
              <text
                x={"50%"}
                y={"50%"}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                Cash Deployed
              </text>
              <Pie
                data={data}
                dataKey="students"
                outerRadius={75}
                innerRadius={60}
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
        <Stack>
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
    </Box>
  );
};

export default CashDeployed;
