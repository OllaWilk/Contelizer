import styles from './LoadingIndicator.module.scss';

export function LoadingIndicator({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className={styles.ldsWrap}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{text}</p>
    </div>
  );
}
