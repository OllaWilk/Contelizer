import { useState } from "react";
import type { User } from "../../types/task-three-types";
import { Input } from "../UI/Input/Input";
import { Select } from "../UI/Select/Select";
import styles from "./UserForm.module.scss";

type Props = {
  user: Pick<User, "id" | "email" | "gender" | "status">;
};

export const UserForm = ({ user }: Props) => {
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState<User["gender"]>(user.gender);
  const [status, setStatus] = useState<User["status"]>(user.status);

  const handleSave = () => {
    console.log("[UserForm] Save clicked:", {
      id: user.id,
      email,
      gender,
      status,
    });
  };

  return (
    <div className={styles.form}>
      <Input
        id={`email-${user.id}`}
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Select
        id={`gender-${user.id}`}
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value as User["gender"])}
        options={[
          { value: "male", label: "male" },
          { value: "female", label: "female" },
        ]}
      />

      <Select
        id={`status-${user.id}`}
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value as User["status"])}
        options={[
          { value: "active", label: "active" },
          { value: "inactive", label: "inactive" },
        ]}
      />

      <div className={styles.actions}>
        <button type="button" className={styles.saveBtn} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
