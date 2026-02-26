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
    <div class="Teachers__item" data-id='${t.id}'">
        <div class="teachers__img__box" >
            <span class="onlineDot" aria-hidden="true"></span>
            <img loading="lazy" src="${t.avatar_url ?? '—'}" alt="avatar of teacher ${(t.name, t.surname)}.filter(Boolean).join(' ')" class="teachers__img">
        </div>
        <div class="Teacher_All_box">
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
                            <p class="Teachers__about__item_text">Price / 1 hour: <span class="per_hour">${t.price_per_hour}$</span></p>
                        </li>
                        <li class="Teachers__about__item">
                        </li>
                        </ul>
                        <button aria-label="toggle favorite" class="Teachers__about__svg heart">
                        <svg class="Teachers__about__svg heart">
                            <use href="/sprite.svg#icon-heart"></use>
                        </svg>
                        </button>
                </div>
            </div>
            <div class="Teacher_list_btn_box">
                <ul class="Teacher__characteristics_list">
                <li class="Teacher__characteristics_item"><p class="Teacher__characteristics_text">Speaks: <span class="Teacher__characteristics_text_span underline">
                ${languages.join(', ')}
                </span></p></li>
                <li class="Teacher__characteristics_item"><p class="Teacher__characteristics_text">Lesson Info: <span class="Teacher__characteristics_text_span">
                ${t.lesson_info}
                </span></p></li>
                <li class="Teacher__characteristics_item"><p class="Teacher__characteristics_text">Conditions: <span class="Teacher__characteristics_text_span">
                ${conditions.join(' ')}
                </span></p></li>
                </ul>
                <div class="Teacher_rewies_dropdown hidden">
                    <p class="Teacher_rewies_dropdown_text">${t.experience}</p>
                    <ul class="Teacher_rewies_list">
                    ${reviews
                      .map(
                        item => `<li class="Teacher_rewies_item">
                        <div class="Teacher_rewies_box">
                            <div class="Teacher_rewies_item_avatar">${item.reviewer_name[0]}</div>
                            <div class="Teacher_rewies_item_name_rating_box">
                            <h5 class="Teacher_rewies_item_name">${item.reviewer_name}</h5>
                            <div class="Teacher_rewies_item_rating_box">
                                <svg class="Teachers__about__svg">
                                    <use href="/sprite.svg#icon-Star"></use>
                                </svg>
                                <p class="Teacher_rewies_item_rating_text">${item.reviewer_rating.toFixed(1)}</p>
                            </div>
                        </div>
                        </div>
                        <p class="Teacher_rewies_item_comment">${item.comment}</p>
                        </li>`
                      )
                      .join('')}
                    </ul>
                </div>            
                <div class="Teacher_read_more_box">
                <button class="Teacher_read_more_btn" type="button" name="button_read_more">Read more            
                </button>
                </div>
            </div>                  
            <ul class="Teacher_pills__list">
            ${levels.map(item => `<li class="Teacher_pills_item">#${item}</li>`).join('')}
            </ul>            
            <button data-modal="trial" class="Teacher_btn_submit_form btn hidden" type="submit" name="button_submit_form">Book trial lesson</button>
        </div>
    </div>
</li>
  `;
}
