import getTeachers from '@/lib/teachersApi.js';

let teachers = [];

export const setTeachers = newTeachers => {
  teachers = newTeachers;
};

export const getTeachersStore = () => teachers;

export async function teachersStore() {
  if (getTeachersStore().length === 0) {
    const teachersFromApi = await getTeachers();
    setTeachers(teachersFromApi);
    const allTeachers = getTeachersStore();
    return allTeachers;
  } else {
    return getTeachersStore();
  }
}
