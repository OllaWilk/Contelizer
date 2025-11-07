import { useEffect, useState } from "react";
import type { User } from "../../types/task-three-types";
import { fetchUsers } from "./utils/http";
import { UI_TEXTS } from "../TaskOne/content";
import { Btn, Card, InfoRow, TaskHeader } from "../../components";
import styles from "./TaskThree.module.scss";

const mockupUsers: User[] = [
  {
    id: 1,
    name: "lorem",
    email: "ipsum",
    gender: "male",
    status: "active",
  },
  {
    id: 2,
    name: "Dolor",
    email: "setamet",
    gender: "female",
    status: "inactive",
  },
];

export const TaskThree = () => {
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers();
        console.log("DATA", data);
        console.log("Fetched users:", data);
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div className={styles.taskThree}>
      <TaskHeader paragraph={UI_TEXTS.tasktwo} />
      {error && <p className={styles.error}>Error: {error}</p>}
      <div className={styles.grid}>
        {mockupUsers.map((user) => (
          <Card key={user.id}>
            <TaskHeader paragraph={user.name} />
            {[
              { label: "Email", value: user.email },
              { label: "Gender", value: user.gender },
              { label: "Status", value: user.status },
            ].map((item, idx) => (
              <InfoRow key={idx} label={item.label} value={item.value} />
            ))}
            <div className={styles.actions}>
              <Btn text="Edit" className={styles.editBtn} />
              <Btn text="Delete" className={styles.deleteBtn} />
            </div>
          </Card>
        ))}
      </div>
      <div></div>
    </div>
  );
};
