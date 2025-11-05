import styles from './FormButton.module.scss';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'reset' | 'submit';
  text: string;
}

export const FormButton = ({ variant = 'submit', text, ...props }: FormButtonProps) => (
  <button
    type={variant === 'submit' ? 'submit' : 'button'}
    className={variant === 'reset' ? styles.buttonReset : styles.submitBtn}
    {...props}
  >
    {text}
  </button>
);
