import type { ReactNode } from "react";
import styles from "./Card.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}
export const Card = ({ children, className }: Props) => {
  return <div className={`${styles.card} ${className ?? ""}`}>{children}</div>;
};
