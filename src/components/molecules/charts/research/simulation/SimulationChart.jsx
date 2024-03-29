import { Box } from "@chakra-ui/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PropTypes from "prop-types";
import { dateFormatter } from "src/utils";

const SimulationChart = (props) => {
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
          height={400}
          width={'100%'}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={(v) => dateFormatter(v.date)} />
          <YAxis min={0} max={900}/>
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="close" stroke="#2196F3" dot={false} />
          <Line type="monotone" dataKey="open" stroke="#FF5722" dot={false} />
          <Line type="monotone" dataKey="high" stroke="#4CAF50" dot={false} />
          <Line type="monotone" dataKey="low" stroke="#F44336" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

SimulationChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SimulationChart;
