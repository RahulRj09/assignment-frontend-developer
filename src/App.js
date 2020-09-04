import React from 'react';
import Login from './components/Login';
import { Provider } from 'react-redux'
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Logout from './components/Logout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
