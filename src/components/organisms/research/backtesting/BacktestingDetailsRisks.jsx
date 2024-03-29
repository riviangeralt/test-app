import { Box, Heading, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const BacktestingDetailsRisks = (props) => {
  const { data } = props;

  return (
    <Stack gap={0}>
      {data.map((item, index) => {
        const isLastItem = index === data.length - 1;
        const isFirstItem = index === 0;
        return (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid rgba(171, 171, 171, 0.24)"
            borderBottom={!isLastItem && "none"}
            p={6}
            borderTopLeftRadius={isFirstItem ? 8 : 0}
            borderTopRightRadius={isFirstItem ? 8 : 0}
            borderBottomRightRadius={isLastItem ? 8 : 0}
            borderBottomLeftRadius={isLastItem ? 8 : 0}
          >
            <Heading as="h3" fontSize="20px" fontWeight={600}>
              Risk {index + 1}
            </Heading>
            <Box width={"200px"} height={"32px"}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    left: -60,
                    top: 30,
                  }}
                >
                  <CartesianGrid stroke="#FFF" />
                  <XAxis dataKey="name" tick={false} axisLine={false} />
                  <YAxis tick={false} axisLine={false} />
                  <Line
                    type="basis"
                    dataKey="uv"
                    stroke="#EF0A0A"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

BacktestingDetailsRisks.propTypes = {
  data: PropTypes.array,
};

export default BacktestingDetailsRisks;
