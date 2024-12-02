import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewsCategory from './pages/NewsCategory';
import NewsDetails from './pages/NewsDetails';

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
    element: <NewsCategory />,
  },
  {
    path: '/news/:newsId',
    element: <NewsDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
