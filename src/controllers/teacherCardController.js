import { auth } from '@/lib/firebase.js';
import Toastify from 'toastify-js';
import { getFavoritesMap, toggleFavorite } from './favoritesStorage.js';

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

export const syncHearts = user => {
  if (!user) {
    document
      .querySelectorAll('.Teachers__about__btn')
      .forEach(element => element.classList.remove('is-active'));
    return;
  }
  const favorites = getFavoritesMap();

  const cards = document.querySelectorAll('.Teachers__item');
  const uid = user.uid;
  cards.forEach(card => {
    const teacherId = card.dataset.id;
    const btnHeart = card.querySelector('.Teachers__about__btn');
    if (!btnHeart) return;
    if (favorites[uid]?.includes(teacherId)) {
      btnHeart.classList.add('is-active');
    } else {
      btnHeart.classList.remove('is-active');
    }
  });
};

document.addEventListener('click', event => {
  const btnHeart = event.target.closest('.Teachers__about__btn');
  if (!btnHeart) return;
  const cardHeart = btnHeart.closest('.Teachers__item');
  if (!cardHeart) return;

  const user = auth.currentUser;
  if (!user) {
    Toastify({
      text: 'Please register or log in to add to favorites.',
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      className: 'custom-toast',
    }).showToast();
    return;
  }
  const userFavorites = toggleFavorite(user.uid, cardHeart.dataset.id);
  syncHearts(user);
});
