import { forwardRef, type SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";

type NativeSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "className" | "children"
>;

interface Props extends NativeSelectProps {
  label?: string;
  id: string;
  error?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, id, error, options, className, ...rest }, ref) => {
    return (
      <label htmlFor={id} className={styles.label}>
        {label && <span>{label}</span>}
        <select
          ref={ref}
          id={id}
          {...rest}
          className={className ?? styles.select}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div className={styles.controlError}>{error && <p>{error}</p>}</div>
      </label>
    );
  }
);
