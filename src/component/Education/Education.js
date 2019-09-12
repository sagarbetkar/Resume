import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">University of Mumbai</h3>
                <div className="subheading mb-3">Bachelor of Engineering</div>
                <div>Computer Science</div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Passed May 2017</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}

export default Education;
