import { useEffect } from "react";
import { UI_TEXTS } from "../TaskOne/content";
import { TaskHeader } from "../../components";
import styles from "./TaskThree.module.scss";
import { fetchUsers } from "./utils/http";

export const TaskThree = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers();
        console.log("DATA", data);
        console.log("Fetched users:", data);
      } catch (err: any) {
        console.log("OJOJ ERORO", err.message);
      }
    })();
  }, []);

  return (
    <div className={styles.taskTwo}>
      <TaskHeader paragraph={UI_TEXTS.tasktwo} />
    </div>
  );
};
