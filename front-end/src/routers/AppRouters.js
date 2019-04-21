import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import NotFoundPage from "../components/NotFoundPage";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
