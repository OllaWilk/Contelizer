import { type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'className' | 'children'
>;

interface Props extends NativeInputProps {
  label?: string;
  id: string;
  error?: string;
  className?: string;
  resetSignal: number;
}

export const Input = ({ label, id, error, className, ...rest }: Props) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span>{label}</span>
      <input id={id} {...rest} className={className ?? styles.inputFile} />
      <div className={styles.controlError}>{error && <p>{error}</p>}</div>
    </label>
  );
};
