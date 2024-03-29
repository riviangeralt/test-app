import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, Stack } from "@chakra-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
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
const DashboardPortfolioSuggestions = () => {
  return (
    <Stack
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      gap={3}
      maxH={"222px"}
      h="222px"
    >
      <HStack justifyContent={"space-between"}>
        <Button
          variant="link"
          leftIcon={<ChevronLeftIcon />}
          textDecoration={"none"}
          fontSize={"12px"}
          p={0}
          color={"gray.600"}
          _hover={{
            textDecoration: "none",
          }}
        >
          AAPL515
        </Button>
        <Heading as="h3" size={"xs"}>
          Portfolio Suggestions
        </Heading>
        <Button
          variant="link"
          rightIcon={<ChevronRightIcon />}
          textDecoration={"none"}
          fontSize={"12px"}
          p={0}
          color={"red.600"}
          _hover={{
            textDecoration: "none",
          }}
        >
          TSLA315
        </Button>
      </HStack>
      <Box w="100%" maxW="100%" h={"100%"}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -22 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(239, 10, 10, 0.08)"
                  stopOpacity={0.5}
                />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name"  tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}/>
            <YAxis  tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}/>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#EF0A0A"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
};

export default DashboardPortfolioSuggestions;
