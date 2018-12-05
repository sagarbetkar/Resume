import React from 'react';
import '../Menu/Menu.scss';
import '../../assets/scss/bootstrap-grid.scss';
import logo from '../../assets/images/logo.png';
import resume from '../../assets/images/Resume.pdf';

class Menu extends React.Component {
  render() {
    return (
      <div className="container nav">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <a className="logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="links">
              <a href={resume} target="_blank">
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
