import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { auth } from '@/lib/firebase.js';

export const authGuard = (onAuthed, onNotAuthed) => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe();

    if (user) {
      onAuthed(user);
    } else {
      onNotAuthed();
    }
  });
};
