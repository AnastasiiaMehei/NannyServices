// FavoritesPage.jsx
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import NannyCard from "../../components/NannyCard/NannyCard";
import PropTypes from 'prop-types';
import css from "./FavoritesPage.module.css";
import { v4 as uuidv4 } from 'uuid';
import Header from "../../components/Header/Header";

export default function FavoritesPage() {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('Favorites from localStorage:', favorites);

    const dbRef = ref(db, 'nannies');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const nanniesArray = Object.entries(data).map(([id, nanny]) => ({
          ...nanny,
          id: id || uuidv4(), // Генеруємо ID, якщо він відсутній
        }));
        const favoriteNannies = nanniesArray.filter(nanny => favorites.includes(nanny.id));
        setNannies(favoriteNannies);
      } else {
        setNannies([]); // Встановлюємо порожній масив, якщо даних немає
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={css.wrapper}>
        <div className={css.header}><Header /></div>
        <h2 className={css.title}>Your Favorites</h2>
      <div className={css.nanniesGrid}>
        {nannies && nannies.length > 0 ? (
          nannies.map((nanny) => (
            <NannyCard 
              key={nanny.id} 
              nanny={nanny}
            />
          ))
        ) : (
          <p>No favorite nannies yet.</p>
        )}
      </div>
    </div>
  );
}

FavoritesPage.propTypes = {
  nannies: PropTypes.arrayOf(PropTypes.object),
};