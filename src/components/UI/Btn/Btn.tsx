import styles from './Btn.module.scss';

interface Props {
  text: string;
  url: string;
  download?: boolean;
}
export const Btn = ({ text, url, download, ...props }: Props) => {
  return (
    <a href={url} className={styles.detailsBtn} download={download ? '' : undefined} {...props}>
      {text}
    </a>
  );
};
