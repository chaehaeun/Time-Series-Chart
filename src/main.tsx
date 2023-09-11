import { ChartDataProvider } from '@/context';
import '@/index.css';
import router from '@/router';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChartDataProvider>
    <RouterProvider router={router} />
  </ChartDataProvider>,
);
