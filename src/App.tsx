import { Button, Chart, Header } from '@/components';
import { fetchingChartData } from '@/context';

function App() {
  const { chartData } = fetchingChartData();
  return (
    <>
      <Header />
      <main className="mx-auto w-[1280px] my-5">
        <ul className="flex gap-2 py-2">
          <li key={'entire'}>
            <Button onClick={() => {}}>전체</Button>
          </li>
          {Array.from(new Set(chartData.map((item) => item.id))).map((id, idx) => (
            <li key={idx}>
              <Button onClick={() => {}}>{id}</Button>
            </li>
          ))}
        </ul>
        {chartData.length !== 0 && <Chart />}
      </main>
    </>
  );
}

export default App;
