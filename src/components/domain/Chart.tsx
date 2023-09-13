import { CustomTooltip } from '@/components';
import { fetchingChartData } from '@/context';
import { DisplayMode } from '@/types';
import { getDotFillColor } from '@/utils';
import type { Dispatch } from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import { v4 as uuidv4 } from 'uuid';

interface ChartProps {
  active: string | undefined;
  setActive: Dispatch<string | undefined>;
  displayMode: DisplayMode;
}

const Chart = ({ active, setActive, displayMode }: ChartProps) => {
  const { chartData: data } = fetchingChartData();

  const handleBarClick = (event: CategoricalChartState) => {
    const id = event?.activePayload?.[0]?.payload?.id;
    setActive(id);
  };

  return (
    <div className="p-5 pt-10 bg-white rounded-xl">
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          onClick={handleBarClick}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" />
          <YAxis
            yAxisId="area"
            domain={[0, (max: number) => Math.max(max * 2, 200)]}
            label={{
              value: 'value_area',
              angle: -90,
              position: 'insideLeft',
              offset: 1,
            }}
          />

          <YAxis
            yAxisId="bar"
            orientation="right"
            label={{
              value: 'value_bar',
              angle: 90,
              position: 'insideRight',
              offset: -10,
            }}
          />

          <Tooltip content={<CustomTooltip active={false} payload={[]} label={''} displayMode={displayMode} />} />
          <Legend />
          {displayMode !== 'area' && (
            <Bar yAxisId="bar" dataKey="value_bar" barSize={20}>
              {data.map((entry, index) => {
                const fill = entry.id === active ? '#413ea0' : '#9b99d8';
                return <Cell key={`cell-${index}`} fill={fill} className="cursor-pointer " />;
              })}
            </Bar>
          )}
          {displayMode !== 'bar' && (
            <Area
              yAxisId="area"
              type="monotone"
              dataKey="value_area"
              fill="#84c9d8"
              stroke="#8884d8"
              dot={(props) => {
                const { payload, cx, cy } = props;
                const fillColor = getDotFillColor(payload, active, displayMode);
                return <circle key={uuidv4()} cx={cx} cy={cy} r={5} fill={fillColor} />;
              }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
