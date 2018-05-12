import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HelloWorld from './HelloWorld.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path="/" component={HelloWorld} />
        </Switch>
      </div>
    );
  }
}

export default App;
