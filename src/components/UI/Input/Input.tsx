import { forwardRef, type InputHTMLAttributes } from 'react';
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
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, error, className, ...rest }, ref) => {
    return (
      <label htmlFor={id} className={styles.label}>
        {label && <span>{label}</span>}
        <input
          ref={ref}
          id={id}
          {...rest}
          className={className ?? styles.inputFile}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <div className={styles.controlError}>{error && <p>{error}</p>}</div>
      </label>
    );
  }
);
