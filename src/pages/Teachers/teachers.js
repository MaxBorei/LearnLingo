import getTeachers from '@/lib/teachersApi.js';
import { TeacherCard } from '@/components/TeacherCard/teacherCard.js';

export const Teachers = () => `
  <div class="Teachers">
    <div class="container">
      <ul class="Teachers__list"></ul>
    </div>
  </div>
`;

export async function initTeachers() {
  const list = document.querySelector('.Teachers__list');
  if (!list) return;

  const teachers = await getTeachers();
  list.innerHTML = teachers.map(TeacherCard).join('');
}
