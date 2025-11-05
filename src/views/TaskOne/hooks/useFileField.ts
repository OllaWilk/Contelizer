import { useState } from 'react';
import type { UseFileFieldResult } from '../../../types/task-one-types';
import { validateFile } from '../utils/validateFile';

export const useFileField = (): UseFileFieldResult => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setFile(null);
      setError(null);
      return;
    }

    const msg = validateFile(file);
    console.log('msg', msg);

    if (msg) {
      setError(msg);
      setFile(null);
      console.log('validation message:', msg);
      return;
    }

    setError(null);
    setFile(file);
  };

  const validateBeforeSubmit = () => {
    if (!file) {
      setError('Please select a .txt file before submitting.');
      return false;
    }
    return true;
  };

  const reset = () => {
    setFile(null);
    setError(null);
  };

  return { file, error, onChange: onFileChange, reset, validateBeforeSubmit };
};
