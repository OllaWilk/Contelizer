interface Props {
  label: string;
  value: string | number;
  className?: string;
}

export const InfoRow = ({ label, value, className }: Props) => {
  return (
    <p className={className}>
      <strong>{label}:</strong> {value}
    </p>
  );
};
