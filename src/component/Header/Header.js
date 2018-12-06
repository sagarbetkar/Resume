import React from 'react';
import '../Header/Header.scss';
import profilePic from '../../assets/images/sagar.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="name">Hi, I'm Sagar</div>
            <div className="subtitle">JavaScript Developer</div>
            <p className="intro">Currently a Freelancer.</p>
          </div>
          <div className="col-md-6">
            <img className="profilepic" src={profilePic} alt="Profile Pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
