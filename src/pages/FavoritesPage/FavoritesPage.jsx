import { useState, useEffect } from 'react';
import { useAuth } from "../../services/AuthContext";
import { ref, get } from 'firebase/database'; // Додаємо імпорт ref
import { db } from '../../services/firebase'; // Додаємо імпорт db
import { getFavorites } from "../../services/favoritesService";
import NannyCard from '../../components/NannyCard/NannyCard';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import css from './FavoritesPage.module.css';

export default function FavoritesPage() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          setLoading(true);
          // Отримуємо список ID обраних нянь
          const favoritesData = await getFavorites(user.uid);
          
          // Отримуємо дані про нянь з основної бази даних
          const nannyRef = ref(db, 'nannies');
          const snapshot = await get(nannyRef);
          const nanniesData = snapshot.val() || {};
          
          // Фільтруємо тільки обрані няні
          const favoriteNannies = Object.keys(favoritesData)
            .map(id => ({
              ...nanniesData[id],
              id // Додаємо id до об'єкту няні
            }))
            .filter(Boolean); // Видаляємо null/undefined значення
          
          setFavorites(favoriteNannies);
        } catch (error) {
          console.error("Error fetching favorites:", error);
          toast.error("Error loading favorites");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchFavorites();
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.favoritesPage}>
      <h2>My Favorite Nannies</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any nannies to favorites yet.</p>
      ) : (
        <div className={css.nanniesGrid}>
          {favorites.map((nanny) => (
            <NannyCard
              key={nanny.id}
              nanny={nanny}
            />
          ))}
        </div>
      )}
    </div>
  );
}