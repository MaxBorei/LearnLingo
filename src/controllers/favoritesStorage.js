export const getFavoritesMap = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites === null) {
    return {};
  } else {
    return JSON.parse(favorites);
  }
};

export const setFavoritesMap = map => {
  localStorage.setItem('favorites', JSON.stringify(map));
};

export const toggleFavorite = (uid, teacherId) => {
  const map = getFavoritesMap();
  if (!map[uid]) {
    map[uid] = [];
  }
  if (map[uid].includes(teacherId)) {
    map[uid] = map[uid].filter(element => element != teacherId);
  } else {
    map[uid].push(teacherId);
  }
  setFavoritesMap(map);
  return map[uid];
};
