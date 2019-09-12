import React from 'react';
import '../Menu/Menu.scss';
import profilePic from '../../assets/images/sagar.jpg';
import logo from '../../assets/images/logo.png';

class Menu extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">
              <img src={logo} alt="Logo" className="logo" />
            </span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="Sagar Betkar" />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
