import styles from "./TaskHeader.module.scss";

interface Props {
  text: string;
}

export const TaskHeader = ({ text }: Props) => {
  return <h2 className={styles.taskHeader}>{text}</h2>;
};
