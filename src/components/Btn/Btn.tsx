import { Link } from 'react-router-dom';
import styles from './Btn.module.scss';

interface Props {
  text: string;
  url: string;
}
export const Btn = ({ text, url }: Props) => {
  return (
    <Link to={url} className={styles.detailsBtn}>
      {text}
    </Link>
  );
};
