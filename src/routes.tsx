import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import GameDetail from './pages/GameDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'games/:slug', element: <GameDetail /> },
    ],
  },
]);

export default router;
