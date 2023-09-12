import { Button, Chart, Header } from '@/components';
import { fetchingChartData } from '@/context';
import { useState } from 'react';

function App() {
  const { chartData } = fetchingChartData();
  const [active, setActive] = useState<string | null>(null);

  const handleButtonClick = (id: string | null) => {
    setActive(id);
  };

  return (
    <>
      <Header />
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
          {Array.from(new Set(chartData.map((item) => item.id))).map((id, idx) => (
            <li key={idx}>
              <Button isActive={active === id ? true : false} onClick={() => handleButtonClick(id)}>
                {id}
              </Button>
            </li>
          ))}
        </ul>
        {chartData.length !== 0 && <Chart active={active} setActive={setActive} />}
      </main>
    </>
  );
}

export default App;
