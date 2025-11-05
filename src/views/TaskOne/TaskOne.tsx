import { TaskHeader } from "../../components";
import styles from "./TaskOne.module.scss";

export const TaskOne = () => {
  return (
    <div className={styles.taskOne}>
      <TaskHeader text={"Recruitment Task 1"} />
      <p>
        Write a React program that includes a form for uploading a text file.
        After uploading, the program should randomly shuffle the order of the
        letters in each word, except for the first and last letters. Make sure
        to handle punctuation, uppercase/lowercase letters, multiline texts, and
        Polish characters properly.
      </p>
    </div>
  );
};
