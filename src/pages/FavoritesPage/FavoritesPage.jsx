// FavoritesPage.jsx
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import NannyCard from "../../components/NannyCard/NannyCard";
import css from "./FavoritesPage.module.css";
import Header from "../../components/Header/Header";

export default function FavoritesPage() {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Перетворюємо об'єкт у масив
        const allNannies = Object.values(data);
        const favoriteNannies = allNannies.filter(nanny => favorites.includes(nanny.id));
        setNannies(favoriteNannies);
      } else {
        setNannies([]);
      }
      setLoading(false);
    });
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
