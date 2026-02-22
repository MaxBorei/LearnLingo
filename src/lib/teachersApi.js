import axios from 'axios';
import makeIdFromName from '../utilites/makeIdFromName.js';

axios.defaults.baseURL = import.meta.env.VITE_FIREBASE_DATABASE;

export default async function getTeachers() {
  try {
    const { data } = await axios.get('/.json');
    const arr = Object.values(data || []);

    return arr.map(p => ({
      ...p,
      id: makeIdFromName(p.name),
      reviews: Array.isArray(p.reviews) ? p.reviews : [],
    }));
  } catch (error) {
    console.error(error);
    return;
  }
}
