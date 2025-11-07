import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { User } from "../../types/task-three-types";
import { fetchUsers } from "./utils/http";
import { UI_TEXTS } from "../TaskOne/content";
import {
  Btn,
  Card,
  ErrorBlock,
  InfoRow,
  LoadingIndicator,
  TaskHeader,
  UserForm,
} from "../../components";
import styles from "./TaskThree.module.scss";

export const TaskThree = () => {
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleEditUser = (userId: number) => {
    setEditingUserId((prev) => (prev === userId ? null : userId));
  };

  if (isLoading) return <LoadingIndicator text="Loading coctails..." />;

  if (error instanceof Error)
    return (
      <ErrorBlock
        title="An error occurred"
        message={"Failed to fetch events."}
      />
    );

  return (
    <div className={styles.taskThree}>
      <TaskHeader paragraph={UI_TEXTS.taskthree} />
      <div className={styles.grid}>
        {data?.map(({ id, name, email, gender, status }) => (
          <Card key={id}>
            <TaskHeader paragraph={name} />
            {editingUserId === id ? (
              <UserForm user={{ id, email, gender, status }} />
            ) : (
              <>
                <InfoRow label={"Email"} value={email} />
                <InfoRow label={"Gender"} value={gender} />
                <InfoRow label={"Status"} value={status} />
              </>
            )}
            <div className={styles.actions}>
              {editingUserId === id ? (
                <button onClick={() => handleEditUser(id)}>cancel</button>
              ) : (
                <Btn
                  text="Edit"
                  className={styles.editBtn}
                  onClick={() => handleEditUser(id)}
                />
              )}
            </div>
          </Card>
        ))}
      </div>
      <div></div>
    </div>
  );
};
