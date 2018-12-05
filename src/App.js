import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/scss/_normalize.scss';
import Menu from '../src/component/Menu/Menu';

class App extends React.Component {
    render() {
        return (
            <Menu/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));