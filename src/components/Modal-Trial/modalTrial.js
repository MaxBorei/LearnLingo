export const modalTrial = t => {
  const { id, avatar_url, name, surname } = t;
  return `
  <div class="overlay visually-hidden">
    <div class="modal visually-hidden" data-modal-name="trial" role="dialog" aria-modal="true" aria-labelledby="trial-title">
       <div class="modal__content_box">
         <h2 id="trial-title" class="modal__title" >Book trial lesson</h2>
         <p class="modal__subtitle">Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
        <div class="trial-title-box">
                <div class="Teacher_rewies_item_avatar">
                <img src="${t.avatar_url}" alt="${t.name + ' ' + t.surname} avatar" class="teacher_modal_trial_avatar">
                </div>
                <div class="Teacher_rewies_item_name_box">
                    <p class="Teacher_rewies_item_subtitle">Your teacher</p>
                    <h5 class="Teacher_rewies_item_name">${t.name + ' ' + t.surname}</h5>
                </div>
        </div>
       </div>
       <form id="trial-form" class="modal__form">
           <label for="trial-email" class="modal__label visually-hidden">Email</label>
           <input type="email" id="trial-email" name="email" class="modal__input" required placeholder="Email">
           <div class="password-field field">
             <label for="trial-password" class="modal__label visually-hidden">Password</label>
             <input type="password" id="trial-password" name="password" class="modal__input" required placeholder="Password">
             <button type="button" class="password-toggle">
            <svg class="icon-eye">
              <use href="/sprite.svg#icon-eye-off"></use>
            </svg>
          </button>
           </div>
           <button type="submit" data-form-name="trial-form" class="modal__submit">Log In</button>
       </form>
        <button class="modal__close" aria-label="Close modal">
          <svg class="modal__close-svg" aria-hidden="true">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
     </div>
  </div>
  `;
};
