import { Box, Heading, Stack } from "@chakra-ui/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashboardReturns = () => {
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
        Returns
      </Heading>
      <Box w="100%" maxW="100%" h={"100%"}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              left: -22,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Bar
              dataKey="pv"
              fill="#DA6F0D"
              barSize={3}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#DEB110"
              barSize={3}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

export default DashboardReturns;
