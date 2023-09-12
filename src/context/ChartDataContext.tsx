import { getData } from '@/api';
import { ChartDataContextType, ChartDataType } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

interface ChartDataProviderProps {
  children: React.ReactNode;
}

const ChartDataContext = createContext<ChartDataContextType>({
  chartData: [],
  LocationList: [],
  isLoading: false,
});

export const ChartDataProvider = ({ children }: ChartDataProviderProps) => {
  const [chartData, setChartData] = useState<ChartDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoading(true);
        const res: ChartDataType = await getData();

        const arrData = Object.entries(res).map(([time, item]) => ({
          time: new Date(time).toLocaleTimeString(),
          ...item,
        }));

        setChartData(arrData);
      } catch {
        console.error('데이터 요청 실패');
      } finally {
        setIsLoading(false);
      }
    };
    fetchChartData();
  }, []);

  const LocationList = Array.from(new Set(chartData.map((item) => item.id)));

  return (
    <ChartDataContext.Provider value={{ chartData, LocationList, isLoading }}>{children}</ChartDataContext.Provider>
  );
};

export const fetchingChartData = () => useContext(ChartDataContext);
