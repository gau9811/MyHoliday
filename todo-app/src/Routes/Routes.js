import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import EditPage from "../Pages/EditPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/Home" component={Home} />
        <PrivateRoute path="/EditPage/:id" component={EditPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
