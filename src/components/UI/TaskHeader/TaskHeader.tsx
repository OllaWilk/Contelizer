import styles from "./TaskHeader.module.scss";

interface Props {
  text?: string;
  paragraph?: string;
}

export const TaskHeader = ({ text, paragraph }: Props) => {
  return (
    <div className={styles.taskHeader}>
      <h2>{text}</h2>
      <p>{paragraph}</p>
    </div>
  );
};
