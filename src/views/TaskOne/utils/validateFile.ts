export const validateFile = (file: File): string | null => {
  const MAX_BYTES = 1_000_000;
  console.log('validateFile called with file:', file);

  const isTXT = file.name.toLowerCase().endsWith('.txt');
  const isTextMime = file.type === 'text/plain';

  if (!file) {
    return 'No file selected.';
  }

  if (!isTXT && !isTextMime) {
    return 'Invalid file type. Please upload a .txt file.';
  }

  if (file.size > MAX_BYTES) {
    return 'File size exceeds the 1MB limit.';
  }

  return null;
};
