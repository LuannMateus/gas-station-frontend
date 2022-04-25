import {
  Bar,
  BarChart as Chart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Tank } from '../../models/Tank';
import { formatFloat } from '../../utils/formatFloat';
import * as Styled from './styles';

export type BarChartProps = {
  data: Tank[];
};

export const BarChart = ({ data }: BarChartProps) => {
  const chartData = data.map((tank) => ({
    name: tank.type,
    tanque: formatFloat(tank.currentFuel),
  }));

  return (
    <Styled.Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tanque" fill="#f2b108" />
        </Chart>
      </ResponsiveContainer>
    </Styled.Wrapper>
  );
};
