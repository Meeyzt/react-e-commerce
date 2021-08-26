import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function LoginRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (currentUser) {
          console.log(location);
          return children;
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }
      }}
    />
  );
}

export default LoginRoute;
