import React from 'react';
import '../Footer/Footer.scss';
import '../../assets/vendor/fontawesome-free/css/all.css';
import '../../assets/vendor/font-awesome-4.7.0/scss/font-awesome.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid footer">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <i className="fa fa-copyright" aria-hidden="true" />
                  2018 | Created by Sagar Betkar
                </p>
              </div>
              <div className="col-md-6">
                <div className="social-medias">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/sagarbetkar/">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/sagarbetkar">
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/sagarbetkar/">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/sagarbetkar">
                        <i className="fa fa-twitter-square" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/sagar.betkar">
                        <i className="fa fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@sagarbetkar1994">
                        <i className="fa fa-medium" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
