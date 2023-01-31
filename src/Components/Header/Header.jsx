const Header = () => {
  return (
    <>
      <header class="header">
        <div class="container">
          <nav class="nav">
            <a class="nav__link_logo" href="index.html">
              <p class="nav__link_logo_content">DWEl &reg;</p>
            </a>
            <ul class="nav__list">
              <li class="nav__item">
                <a class="nav__link" href="#PROJECTS">
                  Projects
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">
                  Info
                </a>
                <i class="fa-solid fa-bars-staggered"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="new__navbar_container">
        <div class="nav__new_navbar">
          <div class="container">
            <ul class="nav__new_navbar_list">
              <li class="nav__new_navbar_item">
                <a class="nav__new_navbar_link" href="#PROJECTS">
                  Projects
                </a>
              </li>
              <li class="nav__new_navbar_item">
                <a class="nav__new_navbar_link" href="#">
                  Info
                </a>
              </li>
            </ul>
            <i class="fa fa-times"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header