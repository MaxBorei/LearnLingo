export const Header = () => {
  return `<div class="Header">
    <div class="container">
        <div class="header__inner">
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
            <div class="header__auth">
                <div class="header__auth_btn_login">
                    <button class="header__auth_btn_login" type="button" data-modal="login">
                        <span class="header_icons" aria-hidden="true">
                            <svg class="header_icons-svg arrow">
                                <use href="/sprite.svg#icon-arrow"></use>
                            </svg>
                            <svg class="header_icons-svg accent">
                                <use href="/sprite.svg#icon-accent"></use>
                            </svg>
                        </span>
                        <span class="header__auth-button">Log in</span>
                    </button>
                </div>
                <button class="header__auth-button header__auth-button--primary" data-modal="register">Registration</button>
            </div>
        </div>
    </div>
</div>`;
};
