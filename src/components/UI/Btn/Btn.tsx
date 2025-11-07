import styles from "./Btn.module.scss";

interface Props {
  text: string;
  className?: string;
}
export const Btn = ({ text, className, ...props }: Props) => {
  return (
    <button className={className ?? styles.detailsBtn} {...props}>
      {text}
    </button>
  );
};
