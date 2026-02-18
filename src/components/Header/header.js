export const Header = (user = null) => {
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
                ${user ? renderAuth(user) : renderUnauth()}
                </div>
    </div>
</div>`;
};

const renderUnauth = () => {
  return `
  <div class="header__auth__btn__login">
    <button class="header__auth__btn__login" type="button" data-modal="login">
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
  <button
    class="header__auth-button header__auth__button__primary"
    data-modal="register"
  >
    Registration
  </button>

`;
};

const renderAuth = user => {
  return ` <div class="header__auth_user">
    <div class="header__auth__content__box">
    <div class="header__auth__svg__box">
    <svg class="header__auth__user__svg" aria-hidden="true">
    <use href="/sprite.svg#icon-user"></use>
    </svg>
    </div>
    <span class="header__auth__user__name">
    ${user.displayName || user.email}</span>
    </div>
    <button class="header__auth__btn__logout" type="button" data-action="logout-button">
        Logout
    </button>
</div>`;
};
