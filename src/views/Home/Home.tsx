import { Btn } from "../../components";
import { NAV_ITEMS } from "../../config/navigation";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div>
      <p>
        This small application was built as part of a React recruitment task
        set. Each challenge demonstrates a different aspect of frontend
        development — from working with text and validation to API integration
        and data handling. Dive in and explore how each problem has been solved
        in an interactive and user-friendly way.
      </p>
      <ul className={styles.linksWrap}>
        {NAV_ITEMS.map((el) => (
          <li key={el.key}>
            <Btn text={`Checkout  ${el.label}`} url={el.to} />
          </li>
        ))}
      </ul>
    </div>
  );
};
