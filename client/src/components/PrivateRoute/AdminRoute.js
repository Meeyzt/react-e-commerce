import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AdminRoute({ children, ...rest }) {
  const { isAdmin } = useAuth();
  return (
    <div>
      <Route
        {...rest}
        render={() =>
          isAdmin === true ? (
            { children }
          ) : (
            <div>
              <p style={{ fontWeight: "bold" }}>You're not admin</p>
            </div>
          )
        }
      />
    </div>
  );
}

export default AdminRoute;
