import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/scss/_normalize.scss';
import Menu from '../src/component/Menu/Menu';
import Header from '../src/component/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
