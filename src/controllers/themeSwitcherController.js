export const themeSwitcherController = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }
  const pallete = document.querySelector('.pallete-button');
  const themeCont = document.querySelector('.themes-container');
  const btnThemes = document.querySelectorAll('.btn-theme');
  if (!pallete || !themeCont) return;
  pallete.addEventListener('click', e => {
    themeCont.classList.toggle('open');
  });
  btnThemes.forEach(element =>
    element.addEventListener('click', function (e) {
      const theme = e.currentTarget.dataset.theme;
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      themeCont.classList.remove('open');
    })
  );

  document.addEventListener('keydown', el => {
    if (el.key === 'Escape' && themeCont.classList.contains('open')) {
      themeCont.classList.remove('open');
    }
  });

  document.addEventListener('click', elem => {
    if (
      !elem.target.closest('.theme-switcher') &&
      themeCont.classList.contains('open')
    ) {
      themeCont.classList.remove('open');
    }
  });
};
