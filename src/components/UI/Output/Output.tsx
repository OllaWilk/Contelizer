import styles from './Output.module.scss';

interface Props {
  text: string;
}

export const Output = ({ text }: Props) => {
  return (
    <div className={styles.output} aria-live="polite">
      {text}
    </div>
  );
};
