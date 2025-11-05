import type { FormData } from '../../../types/task-one-types';

export function handleFileSelect(
  file: File | null,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) {
  setFormData((prev) => ({ ...prev, file }));
}
