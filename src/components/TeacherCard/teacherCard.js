export function TeacherCard(t) {
  const {
    id,
    avatar_url,
    conditions = [],
    languages = [],
    name,
    surname,
    lessons_done,
    experience,
    rating,
    price_per_hour,
    levels = [],
    lesson_info,
    reviews = [],
  } = t;

  return `
    <li >
    <div class="Teachers__item">
        <div class="teachers__img__box" data-id="${t.id}">
            <span class="onlineDot" aria-hidden="true"></span>
            <img loading="lazy" src="${t.avatar_url ?? '—'}" alt="avatar of teacher ${(t.name, t.surname)}.filter(Boolean).join(' ')" class="teachers__img">
        </div>
        <div class="Teacher__CTA">
            <div class="Teacher__content__box">
                <div class="Teachers__info">
                    <p class="Teachers__subtitle">Languages</p>
                    <h3 class="Teachers__name">${[t.name, t.surname].filter(Boolean).join(' ')}</h3>
                </div>
            </div>
            <div class="Teachers__about__box">
                <ul class="Teacher__about__list">
                    <li class="Teachers__about__item">
                        <svg class="Teachers__about__svg book">
                            <use href="/sprite.svg#icon-book"></use>
                        </svg>
                        <p class="Teachers__about__item_text">Lessons online</p>
                    </li>
                    <li class="Teachers__about__item">
                        <p class="Teachers__about__item_text">Lessons done: ${t.lessons_done}</p>
                    </li>
                    <li class="Teachers__about__item">
                        <svg class="Teachers__about__svg">
                            <use href="/sprite.svg#icon-Star"></use>
                        </svg>
                        <p class="Teachers__about__item_text">Rating: ${t.rating}</p>
                    </li>
                    <li class="Teachers__about__item">
                        <p class="Teachers__about__item_text">Price / 1 hour: <span class="per_hour">30$</span></p>
                    </li>
                    <li class="Teachers__about__item">
                    </li>
                    </ul>
                    <button class="Teachers__about__svg">
                    <svg class="Teachers__about__svg heart">
                        <use href="/sprite.svg#icon-heart"></use>
                    </svg>
                    </button>
            </div>
        </div>
    </div>
</li>
  `;
}
