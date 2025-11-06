import styles from './SuccesBlock.module.scss';

interface Props {
  title: string;
  message: string;
}

export function SuccesBlock({ title, message }: Props) {
  return (
    <div className={styles.succsBlok}>
      <div className={styles.icon}>OK</div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
