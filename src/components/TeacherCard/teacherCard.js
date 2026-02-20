export function TeacherCard(t) {
  const {
    id,
    avatar_url,
    name,
    surname,
    about,
    initial_consultation,
    experience,
    rating,
    price_per_hour,
    license,
    specialization,
    reviews = [],
  } = t;

  return `
    <li class="Teachers__item">
      <div class="teachers__img__box">
          <span class="onlineDot" aria-hidden="true"></span>
          <img src="${t.avatar_url ?? '—'}" alt="avatar" class="teachers__img">
        </div>
      <a href="/teachers/${t.id}" class="Teachers__link" data-link>
        <h3 class="Teachers__name">${[t.name, t.surname].filter(Boolean).join(' ')}</h3>
      </a>
    </li>
  `;
}
