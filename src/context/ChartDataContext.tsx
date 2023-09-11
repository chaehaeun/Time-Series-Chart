import { getData } from '@/api';
import { ChartDataType } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

interface ChartDataContextType {
  chartData: ChartDataType[];
  LocationList: string[];
}

const ChartDataContext = createContext<ChartDataContextType>({
  chartData: [],
  LocationList: [],
});

export const ChartDataProvider = ({ children }: any) => {
  const [chartData, setChartData] = useState<ChartDataType[]>([]);
  useEffect(() => {
    const fetchChartData = async () => {
      const res: ChartDataType = await getData();

      console.log(res);
      const arrData = Object.entries(res).map(([time, item]) => ({
        time: new Date(time).toLocaleTimeString(),
        ...item,
      }));

      setChartData(arrData);
    };
    fetchChartData();
  }, []);

  const LocationList = Array.from(new Set(chartData.map((item) => item.id)));

  return <ChartDataContext.Provider value={{ chartData, LocationList }}>{children}</ChartDataContext.Provider>;
};

export const fetchingChartData = () => useContext(ChartDataContext);
