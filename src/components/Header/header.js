export const Header = (user = null) => {
  return `<div class="Header">
    <div class="container">
        <div class="header__inner">
            <div class="header__content_box">
                <a class="logo" href="/" data-link>
                    <div class="logo__icon">
                        <svg class="logo__icon-svg-blue" aria-hidden="true">
                            <use href="/sprite.svg#icon-Vector_blue"></use>
                        </svg>
                        <svg class="logo__icon-svg" aria-hidden="true">
                            <use href="/sprite.svg#icon-ukraine"></use>
                        </svg>
                    </div>
                    <div class="logo__text">LearnLingo</div>
                </a>
                <div class="nav__box">
                    ${renderNav()}
                </div>
            </div>
            <div class="header__auth">
                ${user ? renderAuth(user) : renderUnauth()}
            </div>
            <div class="burger-button-box">
                <button class="burger-button-btn">
                    <svg class="burger-button-svg">
                        <use href='/sprite.svg#icon-menu'>
                        </use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="mobile-menu">
        <h2 class='mobile-menu-title'>Pages:</h2>
        <div class="mobile-menu-nav-box">${renderNav()}</div>
        <h2 class='mobile-menu-title'>Auth:</h2>
        <div class="mobile-menu-auth-box">${user ? renderAuth(user) : renderUnauth()}</div>
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
    <button class="header__auth-button header__auth__button__primary" data-modal="register">
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
        <button class="header__auth__btn__logout" type="button" data-action="logout">
            Logout
        </button>
    </div>`;
};

const renderNav = () => {
  return `
    <nav class="nav">
        <a href="/" class="nav__link" data-link>Home<svg class="mobile-menu-svg"><use href='/sprite.svg#icon-cheveron-right'></use></svg></a>
    
          <a href="/teachers" class="nav__link teachers" data-link>Teachers
              <span class="onPage_Teachers" aria-hidden="true"></span>
              <svg class="mobile-menu-svg"><use href='/sprite.svg#icon-cheveron-right'></use></svg></a>
              
        
          <a href="/favorites" class="nav__link favorites" data-link>Favorites
              <span class="onPage_Favorites" aria-hidden="true"></span>
          <svg class="mobile-menu-svg"><use href='/sprite.svg#icon-cheveron-right'></use></svg></a>
        
    </nav>`;
};
