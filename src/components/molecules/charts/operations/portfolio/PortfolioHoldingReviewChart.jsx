import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PortfolioHoldingReviewChart = (props) => {
  const { data } = props;
  return (
    <Box
      p={4}
      border="1px solid rgba(171, 171, 171, 0.24)"
      borderRadius={4}
      h="400px"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -15 }}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="data"
            stroke="#EF0A0A"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

PortfolioHoldingReviewChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PortfolioHoldingReviewChart;
