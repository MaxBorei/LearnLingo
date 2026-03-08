export const themeSwitcher = () => {
  return `
<div class="theme-switcher">
<button type='button' class="pallete-button">
<svg class="pallete-svg">
  <use href="/sprite.svg#icon-palette"></use>
</svg>
</button>
<div class="themes-container">
    <button class="btn-theme" type='button' data-theme="yellow"></button>
    <button class="btn-theme" type='button' data-theme="green"></button>
    <button class="btn-theme" type='button' data-theme="blue"></button>
    <button class="btn-theme" type='button' data-theme="peachRose"></button>
    <button class="btn-theme" type='button' data-theme="softPeach"></button>
</div>
</div>
    `;
};
