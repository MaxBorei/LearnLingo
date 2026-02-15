export const Header = () => {
  return `<div class="Header">
    <div class="container">
        <div class="header__content_box">
            <div class="logo">
                <div class="logo__icon">
                    <svg class="logo__icon-svg-blue" aria-hidden="true">
                        <use href="/sprite.svg#icon-Vector_blue"></use>
                    </svg>
                    <svg class="logo__icon-svg" aria-hidden="true">
                        <use href="/sprite.svg#icon-ukraine"></use>
                    </svg>
                </div>
                <div class="logo__text">LearnLingo</div>
            </div>
            <div class="nav__box">
                <nav class="nav">
                    <a href="#" class="nav__link">Home</a>
                    <a href="#" class="nav__link">Teachers</a>
                </nav>
            </div>
        </div>
    </div>
</div>`;
};
