import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function ListProducts() {
  const { isAdmin } = useAuth();
  if (!isAdmin) {
    return <Redirect to="/" />;
  }
  return <div></div>;
}

export default ListProducts;
