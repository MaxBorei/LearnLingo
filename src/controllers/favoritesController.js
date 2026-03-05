import { auth } from '../lib/firebase.js';
import { getTeachersStore } from '../store/teachersStore.js';
import { getFavoritesMap } from './favoritesStorage.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

onAuthStateChanged(auth, user => {
  console.log('favorites user:', user?.uid ?? null);
  console.log('teachers count:', getTeachersStore().length);
  console.log('favorites map:', getFavoritesMap());
});

// const favorites = getFavoritesMap();
// const favoriteIds = favorites[uid] || [];
// console.log(favoriteIds);
