import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Javascript Developer</h3>
                <div className="subheading mb-3">ConnectPlus</div>
                <p>
                  In ConnectPlus, was on the team that develops RESTful API System using an agile methodology for them.
                  Used technologies Node.js, MongoDB. Managed source code via Git and development through continues
                  integration tool using GitLab.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">October 2018 - November 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Javascript Developer</h3>
                <div className="subheading mb-3">Startup Mumbai</div>
                <p>
                  In Startup Mumbai, was on the team that develops RESTful API System using an agile system. Used
                  technologies Node.js, React. Managed source code via Git and development through continues integration
                  tool using GitLab.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2018 - September 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Software Developer</h3>
                <div className="subheading mb-3">3Y Ventures LLP (tag8)</div>
                <p>
                  In tag8, was on the team that develops Order Portal a B2B portal used the Slim framework, PHP,
                  JavaScript and Angular JS. Develop HDFC Feedback form used Node.js, Angular JS. Develop HDFC Admin
                  panel used Node.js and Angular JS.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2018 - August 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">FrontEnd Developer</h3>
                <div className="subheading mb-3">Stalkerscode Private Limited</div>
                <p>
                  In Stalkerscode, was on the team that develops frontend. Used technologies Bootstrap, JavaScript and
                  CSS.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">May 2017 - December 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}

export default Experience;
