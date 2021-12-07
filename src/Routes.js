import ViewProductDetails from "./Customer End/ViewProductDetails";
import CustomerMyBids from "./Customer End/CustomerMyBids";
import CustomerHomepage from "./Customer End/CustomerHomepage";
import CustomerReview from "./Customer End/CustomerReview";
import CustomerPurchases from "./Customer End/CustomerPurchases";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUp from "./Profile/SignUp";
import Login from "./Profile/Login";

const Routes = () => {

    return (
        <BrowserRouter>
          <Switch>
            <Route path="/Homepage">
              <CustomerHomepage />
            </Route>
            <Route path="/ProductDetails">
              <ViewProductDetails />
            </Route>
            <Route path="/MyBids">
              <CustomerMyBids />
            </Route>
            <Route path="/MyPurchases">
              <CustomerPurchases />
            </Route>
            <Route path="/CustomerReview">
              <CustomerReview />
            </Route>
            <Route path="/" exact>
              <SignUp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      );

}

export default Routes;