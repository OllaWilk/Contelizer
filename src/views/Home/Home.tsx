import { NavLink } from "react-router-dom";
import { LinkBtn, TaskHeader } from "../../components";
import { NAV_ITEMS } from "../../config/navigation";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <TaskHeader text={"Hi, My name is Aleksandra Wilk"} />
      <p>
        This small application was built as part of a React recruitment task
        set. Each challenge demonstrates a different aspect of frontend
        development — from working with text and validation to API integration
        and data handling. Dive in and explore how each problem has been solved
        in an interactive and user-friendly way.
      </p>
      <ul className={styles.linksWrap}>
        {NAV_ITEMS.map(({ to, label, key }) => (
          <li key={key} className={styles.buttonTask}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.btnWrap}>
        <LinkBtn
          url="https://www.linkedin.com/in/alex-wilk/"
          className={styles.buttonHome}
          text="Visit my LinkedIn"
        />
        <LinkBtn
          url="https://github.com/OllaWilk"
          text="Visit my Github"
          className={styles.buttonHome}
        />
      </div>
    </div>
  );
};
