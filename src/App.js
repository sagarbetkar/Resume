import React from 'react';
import Menu from '../src/component/Menu/Menu';
import Header from '../src/component/Header/Header';
import Footer from './component/Footer/Footer';
import Experience from './component/Experience/Experience';
import Education from './component/Education/Education';
import Skill from './component/Skill/Skill';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Experience />
        <Education />
        <Skill />
        <Footer />
      </div>
    );
  }
}

export default App;
