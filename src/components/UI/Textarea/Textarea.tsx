import { type TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

type NativeTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "className" | "children"
>;

interface Props extends NativeTextareaProps {
  label?: string;
  id: string;
  error?: string;
  className?: string;
}
export const Textarea = ({ label, id, error, className, ...rest }: Props) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span>{label}</span>
      <textarea id={id} {...rest} className={className ?? styles.textarea} />
      <div className={styles.controlError}>{error && <p>{error}</p>}</div>
    </label>
  );
};
