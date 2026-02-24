document.addEventListener('click', event => {
  const btn = event.target.closest('.Teacher_read_more_btn');
  if (!btn || btn.classList.contains('hidden')) return;

  const card = btn.closest('.Teachers__item');
  if (!card) return;

  const dropdown = card.querySelector('.Teacher_rewies_dropdown');
  const trialBtn = card.querySelector('.Teacher_btn_submit_form');

  btn.classList.add('hidden');
  dropdown?.classList.remove('hidden');
  trialBtn?.classList.remove('hidden');
});
