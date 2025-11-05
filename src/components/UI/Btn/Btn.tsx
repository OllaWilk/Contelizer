import styles from './Btn.module.scss';

interface Props {
  text: string;
  url: string;
}
export const Btn = ({ text, url }: Props) => {
  return (
    <a href={url} className={styles.detailsBtn}>
      {text}
    </a>
  );
};
