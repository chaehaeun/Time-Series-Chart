import { Button, Chart, Header, LoadingSpinner } from '@/components';
import { DISPLAY_MODE_BUTTONS } from '@/constant';
import { fetchingChartData } from '@/context';
import { DisplayMode } from '@/types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const { chartData, LocationList, isLoading } = fetchingChartData();
  const [active, setActive] = useState<string | undefined>(undefined);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('all');

  const handleButtonClick = (id: string | undefined) => {
    setActive(id);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="mx-auto w-[1280px] my-5">
          <ul className="flex gap-2">
            {DISPLAY_MODE_BUTTONS.map((button) => (
              <li key={uuidv4()}>
                <Button
                  isActive={displayMode === button.mode}
                  onClick={() => {
                    setDisplayMode(button.mode as DisplayMode);
                  }}
                >
                  {button.label}
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex gap-2 py-2">
            <li key={'entire'}>
              <Button
                isActive={active === undefined}
                onClick={() => {
                  setActive(undefined);
                }}
              >
                전체
              </Button>
            </li>
            {LocationList.map((id) => (
              <li key={uuidv4()}>
                <Button isActive={active === id ? true : false} onClick={() => handleButtonClick(id)}>
                  {id}
                </Button>
              </li>
            ))}
          </ul>
          {chartData.length !== 0 && <Chart displayMode={displayMode} active={active} setActive={setActive} />}
        </main>
      )}
    </>
  );
}

export default App;
