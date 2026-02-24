import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_FIREBASE_DATABASE;

export default async function getTeachers() {
  try {
    const { data } = await axios.get('/.json');

    const arr = Object.entries(data || {});

    return arr.map(([id, teacher]) => ({
      ...teacher,
      id,
      reviews: Array.isArray(teacher.reviews) ? teacher.reviews : [],
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
