export const modalRegister = () => `
  <div class="overlay visually-hidden">
     <div class="modal visually-hidden" data-modal-name="register" role="dialog" aria-modal="true" aria-labelledby="register-title">
         <div class="modal__content_box">
             <h2 id="register-title" class="modal__title">Registration</h2>
             <p class="modal__subtitle">
                 Thank you for your interest in our platform! In order to register, we
                 need some information. Please provide us with the following information
             </p>
         </div>

         <form id="registration-form" class="modal__form">
             <label for="register-name" class="modal__label visually-hidden">Name</label>
             <input type="text" id="register-name" name="name" class="modal__input" required placeholder="Name" />

             <label for="register-email" class="modal__label visually-hidden">Email</label>
             <input type="email" id="register-email" name="email" class="modal__input" required placeholder="Email" />
             <div class="password-field field">
                 <label for="register-password" class="modal__label visually-hidden">Password</label>
                 <input type="password" id="register-password" name="password" class="modal__input" required placeholder="Password" />
                 <button aria-label="password visibility toggle" type="button" class="password-toggle">
                     <svg class="icon-eye">
                         <use href="/sprite.svg#icon-eye-off"></use>
                     </svg>
                 </button>
             </div>
             <button type="submit" class="modal__submit" data-form-name="registration-form">Sign Up</button>
         </form>

         <button class="modal__close" aria-label="Close modal">
             <svg class="modal__close-svg" aria-hidden="true">
                 <use href="/sprite.svg#icon-close"></use>
             </svg>
         </button>
     </div>
 </div>
`;
