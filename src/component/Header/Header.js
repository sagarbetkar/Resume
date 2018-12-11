import React from 'react';
import '../Header/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">
              Sagar
              <span className="text-primary">Betkar</span>
            </h1>
            <div className="subheading mb-5">
              304, 64/A Lallubhai Compound · Tata Nagar rd, Mankhurd, Mumbai 400043 · (+91) 9702396398 ·
              <a href="mailto:sagarbetkar1994@gmail.com">sagarbetkar1994@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.
              Iterative approaches to corporate strategy foster collaborative thinking to further the overall value
              proposition.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sagarbetkar/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/sagarbetkar">
                <i className="fa fa-github" />
              </a>
              <a href="https://twitter.com/sagarbetkar">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/sagar.betkar">
                <i className="fa fa-facebook-f" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}

export default Header;
