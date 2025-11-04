import styles from './ErrorBlock.module.scss';

interface Props {
  title: string;
  message: string;
}

export function ErrorBlock({ title, message }: Props) {
  return (
    <div className={styles.errorBlock}>
      <div className={styles.icon}>!</div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
