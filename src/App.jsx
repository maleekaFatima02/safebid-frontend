import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import { RestrictedRouter } from './utils/protectedRouter';
import Layout from './Components/Layout';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" component={Login} />
      <RestrictedRouter path="/" isLoggedIn={localStorage.getItem('token')} component={Layout} />
      {/* TODO: Page not found */}
      <Redirect from="*" to="/login" />
    </Switch>
  </Router>
);
export default App;
