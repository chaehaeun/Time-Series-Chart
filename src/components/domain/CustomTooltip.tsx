interface CustomTooltipProps {
  active: boolean;
  payload: any;
  label: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 text-xs -translate-y-1/2 bg-white rounded-sm bg-opacity-80">
        <span className="block">{label}</span>
        <span className="block pb-1 border-b border-black">{payload[0].payload.id}</span>
        <p className="flex items-center pt-1">
          <span className="block bg-[#9b99d8] w-3 h-3 mr-1" />
          {`${payload[0].dataKey} : ${payload[0].value}`}
        </p>
        <p className="flex items-center pt-1">
          <span className="block bg-[#84c9d8] w-3 h-3 mr-1" />
          {`${payload[1].dataKey} : ${payload[1].value}`}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
