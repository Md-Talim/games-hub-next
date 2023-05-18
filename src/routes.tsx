import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Layout';
import Home from './pages/Home';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
