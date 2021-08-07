import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>LOGO</div>
        <ul className={styles.menu}>
          <li>
            <Link to="/" exact>
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/Login">
          <Button primary>Login</Button>
        </Link>
        <Link to="/Register">
          <Button secondary>Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
