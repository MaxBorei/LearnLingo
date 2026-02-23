import getTeachers from '@/lib/teachersApi.js';
import { TeacherCard } from '@/components/TeacherCard/teacherCard.js';
import { Filter } from '../../components/Filter/filter.js';

export const Teachers = () => `
  <div class="Teachers">
    <div class="container">
      <div class="Teacher__filter__box"></div>
      <div class="Teachers__counter_box">
        <ul class="Teachers__list"></ul>
        <button class="btn__load__more" name="load_more_button" type="button">Load more</button>
      </div>
    </div>
  </div>
`;

export async function initTeachers() {
  const list = document.querySelector('.Teachers__list');
  const btn = document.querySelector('.btn__load__more');

  renderFilter();

  if (!btn) return;
  if (!list) return;

  const teachers = await getTeachers();
  let counter = 4;
  btn.addEventListener('click', e => {
    counter += 4;
    if (counter >= teachers.length) {
      btn.classList.add('visually-hidden');
    }
    renderTeachers(counter, teachers, list);
  });

  renderTeachers(counter, teachers, list);
}

function renderTeachers(counter, teachers, list) {
  const arrSlice = teachers.slice(0, counter);

  list.innerHTML = arrSlice.map(TeacherCard).join('');
}

const renderFilter = () => {
  const listFilter = document.querySelector('.Teacher__filter__box');
  if (!listFilter) return;
  const filter = Filter();
  listFilter.innerHTML = filter;
};
