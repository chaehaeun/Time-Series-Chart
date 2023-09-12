import { Button, Chart, Header } from '@/components';
import { fetchingChartData } from '@/context';
import { useState } from 'react';

function App() {
  const { chartData, LocationList, isLoading } = fetchingChartData();
  const [active, setActive] = useState<string | null>(null);

  const handleButtonClick = (id: string | null) => {
    setActive(id);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="flex items-center justify-center mt-60">
          <svg
            className="w-32 h-32 mr-3 -ml-1 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <main className="mx-auto w-[1280px] my-5">
          <ul className="flex gap-2 py-2">
            <li key={'entire'}>
              <Button
                isActive={active === null ? true : false}
                onClick={() => {
                  setActive(null);
                }}
              >
                전체
              </Button>
            </li>
            {LocationList.map((id, idx) => (
              <li key={idx}>
                <Button isActive={active === id ? true : false} onClick={() => handleButtonClick(id)}>
                  {id}
                </Button>
              </li>
            ))}
          </ul>
          {chartData.length !== 0 && <Chart active={active} setActive={setActive} />}
        </main>
      )}
    </>
  );
}

export default App;
