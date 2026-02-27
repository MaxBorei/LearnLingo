import getTeachers from '@/lib/teachersApi.js';
import { TeacherCard } from '@/components/TeacherCard/teacherCard.js';
import { Filter } from '../../components/Filter/filter.js';
import { setTeachers, getTeachersStore } from '../../store/teachersStore.js';
import { initCustomSelect } from '../../controllers/initCustomSelect.js';

export const Teachers = () => `
  <div class="Teachers">
    <div class="container">
      <div class="Teacher__filter__box"></div>
      <div class="Teachers__counter_box">
        <ul class="Teachers__list"></ul>
        <button class="btn__load__more btn" name="load_more_button" type="button">Load more</button>
      </div>
    </div>
  </div>
`;

const renderFilter = () => {
  const listFilter = document.querySelector('.Teacher__filter__box');
  if (!listFilter) return;
  listFilter.innerHTML = Filter();
};

const mapKeys = {
  Languages: 'languages',
  Level: 'levels',
  Price: 'price_per_hour',
};

export async function initTeachers() {
  const list = document.querySelector('.Teachers__list');
  const btn = document.querySelector('.btn__load__more');

  renderFilter();

  if (!btn || !list) return;
  initCustomSelect();

  const teachers = await getTeachers();
  setTeachers(teachers);

  const allTeachers = getTeachersStore();

  const form = document.querySelector('.filter__list');
  let filterState = {};
  let filteredTeachers = allTeachers;
  let counter = 4;

  const updateButton = () => {
    if (counter >= filteredTeachers.length)
      btn.classList.add('visually-hidden');
    else btn.classList.remove('visually-hidden');
  };

  const applyFilters = () => {
    filteredTeachers = allTeachers.filter(teacher =>
      Object.entries(filterState).every(([key, value]) => {
        const teacherKey = mapKeys[key];
        const teacherValue = teacher[teacherKey];

        if (Array.isArray(teacherValue)) return teacherValue.includes(value);
        if (typeof teacherValue === 'number')
          return teacherValue === Number(value);
        if (teacherValue && typeof teacherValue === 'object')
          return Object.values(teacherValue).includes(value);

        return teacherValue === value;
      })
    );
  };

  if (form) {
    form.addEventListener('change', e => {
      if (!e.target.classList.contains('filter__list__select')) return;

      const key = e.target.name;
      const value = e.target.value;
      filterState[key] = value;

      applyFilters();
      counter = 4;
      renderTeachers(counter, filteredTeachers, list);
      updateButton();
    });
  }

  btn.addEventListener('click', () => {
    counter += 4;
    renderTeachers(counter, filteredTeachers, list);
    updateButton();
  });

  renderTeachers(counter, filteredTeachers, list);
  updateButton();
}

function renderTeachers(counter, filteredTeachers, list) {
  const arrSlice = filteredTeachers.slice(0, counter);
  list.innerHTML = arrSlice.map(TeacherCard).join('');
}
