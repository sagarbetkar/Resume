import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check" />
                Mobile-First, Responsive Design
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Cross Functional Teams
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div className="my-auto">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a Javascript developer, I enjoy most of my time watching anime, listening music and
              solving rubik's cube.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an
              aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in
              the web development world.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Skill;
