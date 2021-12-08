import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ViewProductDetails from './CustomerEnd/ViewProductDetails';
import CustomerMyBids from './CustomerEnd/CustomerMyBids';
import CustomerHomepage from './CustomerEnd/CustomerHomepage';
import CustomerReview from './CustomerEnd/CustomerReview';
import CustomerPurchases from './CustomerEnd/CustomerPurchases';
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import { RestrictedRouter } from './utils/protectedRouter';

const RestrictedRoutes = () => (
  <Switch>
    <Route exact path="/homepage" component={CustomerHomepage} />
    <Route exact path="/ProductDetails/:productId" component={ViewProductDetails} />
    <Route exact path="/MyBids" component={CustomerMyBids} />
    <Route exact path="/MyPurchases" component={CustomerPurchases} />
    <Route exact path="/CustomerReview" component={CustomerReview} />
    <Redirect from="*" to="/homepage" />
  </Switch>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <RestrictedRouter path="/" isLoggedIn={localStorage.getItem('token')} component={RestrictedRoutes} />
        {/* TODO: Page not found */}
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
};
export default App;
