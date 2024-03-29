import { Box } from "@chakra-ui/react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PropTypes from "prop-types";

const BacktestingChart = (props) => {
  const { data } = props;
  return (
    <Box
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      h="400px"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            left: -5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="share" stroke="#ef0a0a" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

BacktestingChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BacktestingChart;
