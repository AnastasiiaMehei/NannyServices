import { useState } from 'react';
import NannyCard from '../../components/NannyCard/NannyCard';
import css from './FavoritesPage.module.css'

export default function FavoritesPage () {
    const [nannies, setNannies] = useState([
        // Your nannies data here
      ]);
      const [favorites, setFavorites] = useState([]);
      const handleToggleFavorite = (nannyId) => {
        setFavorites((prevFavorites) => {
          if (prevFavorites.includes(nannyId)) {
            return prevFavorites.filter(id => id !== nannyId);
          } else {
            return [...prevFavorites, nannyId];
          }
        });
      };
    return (
        <div className={css.nanniesPage}>
        {nannies.map((nanny) => (
          <NannyCard
            key={nanny.id}
            nanny={nanny}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    )
}