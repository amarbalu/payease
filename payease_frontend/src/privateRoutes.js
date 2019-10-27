import React from "react";
import {Route,Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      rest.can_proceed === true
        ? <Component {...props} />
        : <Redirect to='/Login' />
    )} />
  )

 
  export default PrivateRoute;