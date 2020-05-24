import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageComponent from './Pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appModel: props
    };
  }
  render() {

    return <PageComponent {...this.state.appModel} />;
  }
}

window.App = App;
window.React = React;
window.ReactDOM = ReactDOM;
export default App;
