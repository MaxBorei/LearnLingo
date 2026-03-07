document.addEventListener('DOMContentLoaded', event => {
  const btnThemesNodeArr = document.querySelectorAll('.btn-theme');
  const btnThemesArr = [...btnThemesNodeArr];
  btnThemesArr.forEach(element =>
    element.addEventListener('click', function (e) {
      const theme = e.target.dataset.theme;
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
      }
    })
  );
  const pallete = document.querySelector('.pallete-button');
  const themeCont = document.querySelector('.themes-container');
  pallete.addEventListener('click', e => {
    themeCont.classList.toggle('open');
  });
});
