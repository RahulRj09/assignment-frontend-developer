import React from 'react';
import Login from './components/Login';
import { Provider } from 'react-redux'
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
