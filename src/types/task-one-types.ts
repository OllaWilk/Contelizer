export interface FormData {
  file: File | null;
  text: string;
}

export type Errors = { file?: string };

export type UseFileFieldResult = {
  file: File | null;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};
