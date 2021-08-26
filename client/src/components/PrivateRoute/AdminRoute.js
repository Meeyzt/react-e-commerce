import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AdminRoute({ children, ...rest }) {
  const { isAdmin } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
          children
        ) : (
          <div>
            <p style={{ fontWeight: "bold" }}>You're not admin</p>
          </div>
        )
      }
    />
  );
}

export default AdminRoute;
