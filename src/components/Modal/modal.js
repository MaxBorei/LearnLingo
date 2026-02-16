document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-modal]");
  if (!trigger) return;

  const modalName = trigger.dataset.modal;
  const modal = document.querySelector(`[data-modal-name="${modalName}"]`);

  if (!modal) return;

  openModal(modal);
});

function openModal(modal) {
  modal.classList.add("is-open");
}
