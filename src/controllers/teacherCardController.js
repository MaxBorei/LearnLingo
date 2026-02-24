document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.Teachers__list');

  list.addEventListener('click', event => {
    const btn = event.target.closest('.Teacher_read_more_btn');
    if (!btn) return;

    const card = btn.closest('.Teachers__item');

    const dropdown = card.querySelector('.Teacher_rewies_dropdown');
    const trialBtn = card.querySelector('.Teacher_btn_submit_form');

    btn.classList.add('hidden');
    dropdown.classList.remove('hidden');
    trialBtn.classList.remove('hidden');
  });
});
