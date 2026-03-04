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

document.addEventListener('click', event => {
  const btnHeart = event.target.closest('.heart');
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
  console.log('before:', getFavoritesMap());
  const userFavorites = toggleFavorite(user.uid, cardHeart.dataset.id);
  console.log('after:', getFavoritesMap());
  console.log('userFavorites:', userFavorites);
  // console.log('uid:', user.uid);
  // console.log('teacherId:', cardHeart.dataset.id);
  // console.log('before:', getFavoritesMap());
  // console.log('after:', toggleFavorite(user.uid, cardHeart.dataset.id));
});
