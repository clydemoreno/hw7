import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import Container from './containers/Container';
// import Main from './containers/Main'

// import {connect} from 'redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Container} />
            <Route path="/about" component={Main} />
          </Switch>
        </BrowserRouter> */}
      </Provider>
    );
  }
}

export default App;
