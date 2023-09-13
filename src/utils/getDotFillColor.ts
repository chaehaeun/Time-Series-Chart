import { ChartDataType, DisplayMode } from '@/types';

const getDotFillColor = (payload: ChartDataType, active: string | null, displayMode: DisplayMode): string => {
  const { id } = payload;
  console.log(payload);
  if (id === active && displayMode === 'area') {
  } else if (displayMode === 'all') {
    return 'transparent';
  }
  return '#84c9d8';
};

export default getDotFillColor;
