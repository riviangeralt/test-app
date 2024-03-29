import PropTypes from "prop-types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const PortfolioListChart = (props) => {
  const { data } = props;

  return (
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
          dataKey="data"
          stroke="#EF0A0A"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

PortfolioListChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PortfolioListChart;
