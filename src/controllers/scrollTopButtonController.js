export const scrollTopBtn = () => {
  const scrollBox = document.querySelector('.scrollTop-box');

  if (scrollBox) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBox.classList.add('active');
      } else {
        scrollBox.classList.remove('active');
      }
    });

    scrollBox.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
};
