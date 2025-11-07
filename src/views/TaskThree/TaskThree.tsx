import { useQuery } from "@tanstack/react-query";
import type { User } from "../../types/task-three-types";
import { fetchUsers } from "./utils/http";
import { UI_TEXTS } from "../TaskOne/content";
import { Btn, Card, InfoRow, TaskHeader } from "../../components";
import styles from "./TaskThree.module.scss";

export const TaskThree = () => {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading cocktails...</p>;

  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div className={styles.taskThree}>
      <TaskHeader paragraph={UI_TEXTS.taskthree} />
      <div className={styles.grid}>
        {data?.map(({ id, name, email, gender, status }) => (
          <Card key={id}>
            <TaskHeader paragraph={name} />
            {[
              { label: "Email", value: email },
              { label: "Gender", value: gender },
              { label: "Status", value: status },
            ].map((item, idx) => (
              <InfoRow key={idx} label={item.label} value={item.value} />
            ))}
            <div className={styles.actions}>
              <Btn text="Edit" className={styles.editBtn} />
            </div>
          </Card>
        ))}
      </div>
      <div></div>
    </div>
  );
};
