export interface ChartDataType {
  id: string;
  time: string;
  value_area: number;
  value_bar: number;
}

export interface ChartDataContextType {
  chartData: ChartDataType[];
  LocationList: string[];
  isLoading: boolean;
}
