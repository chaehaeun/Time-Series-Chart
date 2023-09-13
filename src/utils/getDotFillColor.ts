import { DisplayMode } from '@/types';

const getDotFillColor = (props: any, active: string | null, displayMode: DisplayMode): string => {
  if (props.payload.id === active && displayMode === 'area') {
    return '#413ea0';
  } else if (displayMode === 'all') {
    return 'transparent';
  }
  return '#84c9d8';
};

export default getDotFillColor;
