import { useState } from 'react';
import { UI_TEXTS } from './content';
import type { FormData } from '../../types/task-one-types';
import { handleFileSelect } from './utils/handleFileSelect';
import { validateFile } from './utils/validateFile';
import { readTextFile } from './utils/readTextFile';
import { Card, ErrorBlock, FormButton, Input, TaskHeader } from '../../components';
import styles from './TaskOne.module.scss';

export const TaskOne = () => {
  const [formData, setFormData] = useState<FormData>({ file: null, text: '' });
  const [fileKey, setFileKey] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const clearFileInput = () => setFileKey((k) => k + 1);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      handleFileSelect(null, setFormData);
      setError('');
      return;
    }

    const msg = validateFile(file);
    if (msg) {
      setError(msg);
      handleFileSelect(null, setFormData);
      clearFileInput();
      return;
    }
    setError(null);
    handleFileSelect(file, setFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = formData.file;

    if (!file) {
      setError('Please choose a .txt file before submitting.');
      return;
    }

    const msg = validateFile(file);
    if (msg) {
      setError(msg);
      return;
    }

    setError(null);
    const text = await readTextFile(file);
    setFormData((prev) => ({ ...prev, text, file: null }));

    (e.currentTarget as HTMLFormElement).reset();
    clearFileInput();
  };

  const handleReset = () => {
    setFormData({ file: null, text: '' });
    setError(null);
    clearFileInput();
  };

  return (
    <section className={styles.taskOne}>
      <TaskHeader paragraph={UI_TEXTS.task} />
      <div className={styles.grid}>
        <Card className={styles.left}>
          <form
            onSubmit={handleSubmit}
            onReset={() => setFormData({ file: null, text: '' })}
            noValidate
          >
            <h3>{UI_TEXTS.uploadFile}</h3>
            <Input
              key={fileKey}
              id="file"
              type="file"
              accept=".txt,text/plain"
              onChange={onFileChange}
            />
            {error && <ErrorBlock title={'ups'} message={error} />}
            <div className={styles.formActions}>
              <FormButton variant="reset" onClick={handleReset} text={UI_TEXTS.reset} />
              <FormButton variant="submit" text={UI_TEXTS.submit} />
            </div>
          </form>
        </Card>
        <Card className={styles.right}>
          <h3>{UI_TEXTS.resultTitle}</h3>
          <div className={styles.output} aria-live="polite">
            {formData.text ? formData.text : UI_TEXTS.previewInfo}
          </div>
        </Card>
      </div>
    </section>
  );
};

/* Note for reviewer:
The `fileKey` state is used to force React to re-render the <Input type="file" /> component
whenever the form is reset or submitted. File inputs in React cannot be directly cleared by
simply setting their value to an empty string, so changing the `key` effectively unmounts
and remounts the input, ensuring it resets properly.*/
