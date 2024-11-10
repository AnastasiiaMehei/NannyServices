// src/services/favoritesService.js
import { db } from './firebase';
import { ref, get, set, remove } from 'firebase/database';

export const getFavorites = async (userId) => {
  if (!userId) return {};
  
  try {
    const favoritesRef = ref(db, `users/${userId}/favorites`);
    const snapshot = await get(favoritesRef);
    return snapshot.val() || {};
  } catch (error) {
    console.error('Error getting favorites:', error);
    return {};
  }
};

export const addToFavorites = async (userId, nannyId) => {
  if (!userId || !nannyId) return;
  
  try {
    const favoriteRef = ref(db, `users/${userId}/favorites/${nannyId}`);
    await set(favoriteRef, true);
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

export const removeFromFavorites = async (userId, nannyId) => {
  if (!userId || !nannyId) return;
  
  try {
    const favoriteRef = ref(db, `users/${userId}/favorites/${nannyId}`);
    await remove(favoriteRef);
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};