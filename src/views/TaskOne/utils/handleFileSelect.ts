import type { FormData } from "../../../types/task-one-types";

export function handleFileSelect(
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) {
  const file = e.target.files?.[0] ?? null;
  setFormData((prev) => ({ ...prev, file }));
}
