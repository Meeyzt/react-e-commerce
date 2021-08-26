import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { currentUser, isAdmin } = useAuth();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">
          <div className={styles.logo}>E-Commerce</div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {currentUser ? (
          <span>
            <Link to="/profile">
              <Button primary>Profile</Button>
            </Link>

            {isAdmin && (
              <Link to="/admin">
                <Button secondary>Admin</Button>
              </Link>
            )}
          </span>
        ) : (
          <span>
            <Link to="/Login">
              <Button primary>Login</Button>
            </Link>
            <Link to="/Register">
              <Button secondary>Register</Button>
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
