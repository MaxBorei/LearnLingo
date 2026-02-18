export const modalLogin = () => {
  return `
  <div class="overlay visually-hidden">
    <div class="modal visually-hidden" data-modal-name="login" role="dialog" aria-modal="true" aria-labelledby="login-title">
       <div class="modal__content_box">
         <h2 id="login-title" class="modal__title" >Log In</h2>
         <p class="modal__subtitle">Welcome back! Please enter your credentials to access your account and continue your search for a teacher.</p>
       </div>
       <form id="login-form" class="modal__form">
           <label for="login-email" class="modal__label visually-hidden">Email</label>
           <input type="email" id="login-email" name="email" class="modal__input" required placeholder="Email">
           <div class="password-field field">
             <label for="login-password" class="modal__label visually-hidden">Password</label>
             <input type="password" id="login-password" name="password" class="modal__input" required placeholder="Password">
             <button type="button" class="password-toggle">
            <svg class="icon-eye">
              <use href="/sprite.svg#icon-eye-off"></use>
            </svg>
          </button>
           </div>
           <button type="submit" data-form-name="login-form" class="modal__submit">Log In</button>
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
