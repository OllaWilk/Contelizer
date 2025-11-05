import { Link } from "react-router-dom";
import { NAV_LOGO_IMG } from "../../config/app";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        <img src={NAV_LOGO_IMG} alt="Logo" className={styles.logoImg} />
      </Link>
    </h1>
    <Navbar />
  </header>
);
