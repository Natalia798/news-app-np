import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewsCategory from './pages/NewsCategory';
import NewsDetails from './pages/NewsDetails';
import { useReducer } from 'react';
import { FavoritesContext } from './store/Favorites/context';
import { initialState, favoritesReducer } from './store/Favorites/reducer';
import useLocalStorage from './utils/hooks/useLocalStorage';

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
  const [initialLocalStorageValue] = useLocalStorage('favorites', initialState);
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialLocalStorageValue
  );
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <div className="App">
      <FavoritesContext.Provider value={favoritesContextValue}>
        <RouterProvider router={router} />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
