import React from "react";
import '../styles/jumbo.css';

function NavbarPage() {
  return (
    <nav className="navbar is-black  landingpage" role="navigation" aria-label="main navigation">
  <div className="navbar-brand body">
    {/* <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
    </a>
  */}
    {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="https://bulma.io">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a> */}
  </div>

  <div id="navbarBasicExample">
    <div className="navbar-start nav-center">
      <a className="navbar-item" href="https://bulma.io">
        About Me
      </a>
      <a className="navbar-item" href="#portfolio">
        Portfolio
      </a>
      <a className="navbar-item" href="https://bulma.io">
        Skills
      </a>
      <a className="navbar-item" href="https://bulma.io">
        Contact Me
      </a>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          
        </div>
      </div>
    </div>
</nav>
  );
}
export default NavbarPage;