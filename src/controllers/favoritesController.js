import { TeacherCard } from '../components/TeacherCard/teacherCard.js';
import { teachersStore } from '../store/teachersStore.js';
import { getFavoritesMap } from './favoritesStorage.js';
import { syncHearts } from './teacherCardController.js';

export async function initFavorites(user) {
  const favorites = getFavoritesMap();
  const uid = user.uid;
  const favoriteIds = favorites[uid] || [];
  const teachersBase = await teachersStore();
  const favoriteTeachers = teachersBase.filter(element =>
    favoriteIds.includes(element.id)
  );

  const favoriteList = document.querySelector('.Teachers__list');
  if (!favoriteList) return;
  if (favoriteTeachers.length === 0) {
    favoriteList.innerHTML = `<p class="Favorites_message">You have no favorite teachers yet</p>`;
    return;
  }
  favoriteList.innerHTML = favoriteTeachers.map(TeacherCard).join('');
  syncHearts(user);
}
