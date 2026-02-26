export const modalTrial = t => {
  const { avatar_url, name, surname } = t;

  return `
<div class="overlay visually-hidden">
  <div class="trial_modal">
    <div class="modal trial visually-hidden"
         data-modal-name="trial"
         role="dialog"
         aria-modal="true"
         aria-labelledby="trial-title">

      <button class="modal__close" type="button" aria-label="Close modal">
        <svg class="modal__close-svg" aria-hidden="true">
          <use href="/sprite.svg#icon-close"></use>
        </svg>
      </button>

      <div class="modal__content_box">
        <h2 id="trial-title" class="modal__title">Book trial lesson</h2>
        <p class="modal__subtitle">
          Our experienced tutor will assess your current language level, discuss your learning goals,
          and tailor the lesson to your specific needs.
        </p>

        <div class="trial-title-box">
          <div class="Teacher_rewies_item_avatar">
            <img loading="lazy"
                 src="${avatar_url}"
                 alt="${name} ${surname} avatar"
                 class="teacher_modal_trial_avatar">
          </div>

          <div class="Teacher_rewies_item_name_box">
            <p class="Teacher_rewies_item_subtitle">Your teacher</p>
            <h2 class="Teacher_rewies_item_name">${name} ${surname}</h2>
          </div>
        </div>
      </div>

      <form id="trial-form" class="modal__form trial">
        <div class="modal_trial_form_radio_box">
          <h3 class="modal_trial_form_radio_title">What is your main reason for learning English?</h3>

          <div class="trial_radio_btn_box">
              <label class="trial-radio-label">
                <input class="trial-radio-input" type="radio" name="item" value="Career and business" />
                <span class="radio-custom" aria-hidden="true"></span>
                <span class="trial-radio-text">Career and business</span>
              </label>
              <label class="trial-radio-label">
                <input class="trial-radio-input" type="radio" name="item" value="Lesson for kids" />
                <span class="radio-custom" aria-hidden="true"></span>
                <span class="trial-radio-text">Lesson for kids</span>
              </label>
              <label class="trial-radio-label">
                <input class="trial-radio-input" type="radio" name="item" value="Living abroad" />
                <span class="radio-custom" aria-hidden="true"></span>
                <span class="trial-radio-text">Living abroad</span>
              </label>
              <label class="trial-radio-label">
                <input class="trial-radio-input" type="radio" name="item" value="Exams and coursework" />
                <span class="radio-custom" aria-hidden="true"></span>
                <span class="trial-radio-text">Exams and coursework</span>
              </label>
              <label class="trial-radio-label">
                <input class="trial-radio-input" type="radio" name="item" value="Culture, travel or hobby" />
                <span class="radio-custom" aria-hidden="true"></span>
                <span class="trial-radio-text">Culture, travel or hobby</span>
              </label>
          </div>
        </div>

        <div class="trial_modal_input_box">
          <label for="register-name" class="modal__label visually-hidden">Name</label>
          <input type="text" id="register-name" name="name" class="modal__input" required placeholder="Full Name" />

          <label for="trial-email" class="modal__label visually-hidden">Email</label>
          <input type="email" id="trial-email" name="email" class="modal__input" required placeholder="Email" />

          <label for="phone" class="modal__label visually-hidden">Phone</label>
          <input type="text" id="phone" name="phone" class="modal__input" required placeholder="Phone number" />
        </div>

        <button type="submit" id="trial_submit" class="modal__submit trial">Book</button>
      </form>

    </div>
  </div>
</div>
`;
};
