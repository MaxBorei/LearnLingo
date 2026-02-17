document.addEventListener("click", (e) => {
  const openTrigger = e.target.closest("[data-modal]");
  if (openTrigger) {
    const modalName = openTrigger.dataset.modal;
    const modal = document.querySelector(`[data-modal-name="${modalName}"]`);
    if (!modal) return;
    openModal(modal);
    return;
  }

  const closeBtn = e.target.closest(".modal__close");
  if (closeBtn) {
    const modalClose = closeBtn.closest(".modal");
    if (!modalClose) return;
    closeModal(modalClose);
  }

  const overlayClose = e.target.classList.contains("overlay");
  if (overlayClose) {
    const modalClose = e.target.querySelector(".modal");
    if (!modalClose) return;
    closeModal(modalClose);
  }

  const submitBtnClose = e.target.closest(".modal__submit");
  if (submitBtnClose) {
    const modalClose = submitBtn.closest(".modal");
    if (!modalClose) return;
    closeModal(modalClose);
    return;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const openModal = document.querySelector(".modal:not(.visually-hidden)");
  if (!openModal) return;
  closeModal(openModal);
});

function openModal(modal) {
  modal.classList.remove("visually-hidden");
  const overlay = modal.closest(".overlay");
  if (overlay) overlay.classList.remove("visually-hidden");
}

function closeModal(modalClose) {
  modalClose.classList.add("visually-hidden");
  const overlay = modalClose.closest(".overlay");
  overlay.classList.add("visually-hidden");
}
