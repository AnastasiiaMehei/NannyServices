

import { Suspense, lazy } from 'react';
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Loader from '../Loader/Loader'; import NotFound from '../../pages/NotFound/NotFound';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../../pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useTheme } from '../ThemeButton/ThemeContext'; 


import '../App/App.css'

function App() {
  const { theme } = useTheme(); // Отримуємо поточну тему з контексту

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  const isAuthenticated = true;
  
  return (
    <>
    <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />}>
          </Route>
          <Route
            path="/favorites"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </>
  )
}

export default App
