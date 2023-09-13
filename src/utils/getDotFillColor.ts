import { ChartDataType, DisplayMode } from '@/types';

const getDotFillColor = (payload: ChartDataType, active: string | undefined, displayMode: DisplayMode): string => {
  const { id } = payload;
  if (id === active && displayMode === 'area') {
    return '#413ea0';
  } else if (displayMode === 'all') {
    return 'transparent';
  }
  return '#84c9d8';
};

export default getDotFillColor;
