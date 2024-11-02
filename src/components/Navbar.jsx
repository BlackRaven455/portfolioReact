import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className="navbar-brand">
        <img
          className={styles.logo}
          src={"src/assets/logo.png"}
          alt={"logo image"}
        />
      </Link>
      <ul className={styles.navbar_list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}
