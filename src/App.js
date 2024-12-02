import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page404 from './pages/Page404';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Category from './pages/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/category/:categoryId',
    element: <Category />,
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
