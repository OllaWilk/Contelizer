export interface FormData {
  file: File | null;
  text: string;
}

export type Errors = { file?: string };
