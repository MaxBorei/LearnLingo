document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-modal]");
  if (!trigger) return;

  const modalName = trigger.dataset.modal;
  const modal = document.querySelector(`[data-modal-name="${modalName}"]`);

  if (!modal) return;

  openModal(modal);
});

function openModal(modal) {
  modal.classList.remove("visually-hidden");
  const overlay = modal.closest(".overlay");
  overlay.classList.remove("visually-hidden");
}

document.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".modal__close");
  if (!closeBtn) return;
  const modal = closeBtn.closest(".modal");
  closeModal(modal);
});

function closeModal(modal) {
  modal.classList.add("visually-hidden");
  const overlay = modal.closest(".overlay");
  overlay.classList.add("visually-hidden");
}

export const Modal = () => {
  return `
  <div class="overlay visually-hidden">
    <div class="modal visually-hidden" data-modal-name="register" role="dialog" aria-modal="true" aria-labelledby="modal-title">
       <div class="modal__content_box">
         <h2 class="modal__title">Registration</h2>
         <p class="modal__subtitle">Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
       </div>
       <form id="registration-form" class="modal__form">
           <label for="name" class="modal__label visually-hidden" aria-label="Name">Name</label>
           <input type="text" id="name" name="name" class="modal__input" required placeholder="Name">
           <label for="email" class="modal__label visually-hidden" aria-label="Email">Email</label>
           <input type="email" id="email" name="email" class="modal__input" required placeholder="Email">
           <label for="password" class="modal__label visually-hidden" aria-label="Password">Password</label>
           <input type="password" id="password" name="password" class="modal__input" required placeholder="Password">
       </form>
        <button type="submit" form="registration-form" class="modal__submit">Sign Up</button>
        <button class="modal__close" aria-label="Close modal">
          <svg class="modal__close-svg" aria-hidden="true">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
     </div>
  </div>
  `;
};
