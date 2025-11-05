import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../config/navigation';
import styles from './Navbar.module.scss';

export const Navbar = () => (
  <nav className={styles.navbar} aria-label="Main navigation">
    <ul className={styles.list}>
      {NAV_ITEMS.map(({ key, label, to }) => (
        <li key={key}>
          <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : '')}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
