// services/firebaseService.js
import { db } from './firebase';
import { ref, get, set, remove } from 'firebase/database';

// Отримання списку обраних нянь
export const getFavorites = async (userId) => {
  try {
    const favoritesRef = ref(db, `users/${userId}/favorites`);
    const snapshot = await get(favoritesRef);
    return snapshot.val() || {};
  } catch (error) {
    console.error('Error getting favorites:', error);
    throw error;
  }
};

// Додавання няні до обраних
export const addToFavorites = async (userId, nannyId) => {
  try {
    const favoriteRef = ref(db, `users/${userId}/favorites/${nannyId}`);
    await set(favoriteRef, true);
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Видалення няні з обраних
export const removeFromFavorites = async (userId, nannyId) => {
  try {
    const favoriteRef = ref(db, `users/${userId}/favorites/${nannyId}`);
    await remove(favoriteRef);
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};