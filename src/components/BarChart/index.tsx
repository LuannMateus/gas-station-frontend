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
import * as Styled from './styles';

export const BarChart = () => {
  const data = [
    {
      name: 'Gasolina',
      tank: 30000,
    },
    {
      name: 'Diesel',
      tank: 2000,
    },
  ];

  return (
    <Styled.Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tank" fill="#f2b108" />
        </Chart>
      </ResponsiveContainer>
    </Styled.Wrapper>
  );
};
