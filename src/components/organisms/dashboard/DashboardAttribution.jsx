import { Box, Heading, Stack } from "@chakra-ui/react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const DashboardAttribution = () => {
  const data = [
    { name: "Active", students: 400, color: "#DA6F0D" },
    { name: "Passive", students: 700, color: "#DEB110" },
  ];
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
      <Heading as="h3" size={"xs"}>
        Attribution
      </Heading>
      <Box w="100%" maxW="100%" h={"100%"}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart width={"100%"} height={"100%"}>
            <text
              x={"50%"}
              y={"65%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              $3645.45
            </text>

            <text
              x={"20%"}
              y={"90%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
             Active
            </text>
            <text
              x={"80%"}
              y={"90%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Passive
            </text>

            <Pie
              data={data}
              dataKey="students"
              outerRadius={110}
              innerRadius={90}
              blendStroke
              startAngle={180}
              endAngle={0}
              cy="80%"
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
    </Stack>
  );
};

export default DashboardAttribution;
