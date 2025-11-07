import styles from "./Btn.module.scss";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}
export const Btn = ({ text, className, onClick, ...props }: Props) => {
  return (
    <button
      className={className ?? styles.detailsBtn}
      {...props}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
