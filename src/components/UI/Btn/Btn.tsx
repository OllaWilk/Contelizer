import styles from "./Btn.module.scss";

interface Props {
  text: string;
  url: string;
  download?: boolean;
  className?: string;
}
export const Btn = ({ text, url, download, className, ...props }: Props) => {
  return (
    <a
      href={url}
      className={className ?? styles.detailsBtn}
      download={download ? "" : undefined}
      {...props}
    >
      {text}
    </a>
  );
};
