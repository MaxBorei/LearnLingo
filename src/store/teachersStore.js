let teachers = [];

export const setTeachers = newTeachers => {
  teachers = newTeachers;
};

export const getTeachersStore = () => teachers;

console.log(getTeachersStore());
