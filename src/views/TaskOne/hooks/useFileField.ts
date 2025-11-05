import { useState } from 'react';
import type { UseFileFieldResult } from '../../../types/task-one-types';
import { validateFile } from '../utils/validateFile';

export const useFileField = (): UseFileFieldResult => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resetFile, setResetFile] = useState(0);

  const clearFileInput = () => setResetFile((k) => k + 1);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setFile(null);
      setError(null);
      return;
    }

    const msg = validateFile(file);

    if (msg) {
      setError(msg);
      setFile(null);
      clearFileInput();
      return;
    }

    setError(null);
    setFile(file);
  };

  const reset = () => {
    setFile(null);
    setError(null);
    clearFileInput();
  };

  return { file, error, onChange: onFileChange, reset, resetSignal: resetFile };
};
