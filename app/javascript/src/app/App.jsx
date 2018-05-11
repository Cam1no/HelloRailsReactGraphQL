import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';

export const HelloWorld = () => {
  return (
    <Alert bsStyle="danger" onDismiss={() => null}>
      <h4>Oh snap! You got an error!</h4>
      <p>
        Change this and that and try again. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Cras mattis consectetur purus sit amet fermentum.
      </p>
      <p>
        <Button bsStyle="danger">Take this action</Button>
        <span> or </span>
        <Button onClick={() => null}>Hide Alert</Button>
      </p>
    </Alert>
  )
}

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
