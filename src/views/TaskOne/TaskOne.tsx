import { useState, useRef } from 'react';
import { UI_TEXTS } from './content';
import type { FormData } from '../../types/task-one-types';
import { validateFile } from './utils/validateFile';
import { readTextFile } from './utils/readTextFile';
import { Card, ErrorBlock, FormButton, Input, Output, TaskHeader, Btn } from '../../components';
import { useFileField } from './hooks/useFileField';
import { useMixedText } from './hooks/useMixedText';
import styles from './TaskOne.module.scss';

export const TaskOne = () => {
  const [formData, setFormData] = useState<FormData>({ file: null, text: '' });
  const { file, error, onChange, reset, validateBeforeSubmit } = useFileField();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateBeforeSubmit()) return;
    if (file) {
      const msg = validateFile(file);
      if (msg) return;
      const text = await readTextFile(file);
      setFormData({ file: null, text });
    }
    reset();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleReset = () => {
    setFormData({ file: null, text: '' });
    reset();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const textDisplay = useMixedText(formData.text);

  return (
    <section className={styles.taskOne}>
      <TaskHeader paragraph={UI_TEXTS.task} />
      <div className={styles.grid}>
        <div className={`${styles.leftColumn}`}>
          <Card className={styles.left}>
            <form onSubmit={handleSubmit} onReset={() => setFormData({ file: null, text: '' })}>
              <h3>{UI_TEXTS.uploadFile}</h3>
              <Input
                ref={fileInputRef}
                id="file"
                type="file"
                accept=".txt,text/plain"
                onChange={onChange}
              />
              {error && <ErrorBlock title={'ups'} message={error} />}
              <div className={styles.formActions}>
                <FormButton variant="reset" onClick={handleReset} text={UI_TEXTS.reset} />
                <FormButton variant="submit" text={UI_TEXTS.submit} />
              </div>
            </form>
          </Card>
          <Card className={styles.preview}>
            <Btn url="/sample.txt" text={UI_TEXTS.downloadSample} download />
          </Card>
        </div>
        <Card className={styles.right}>
          <h3>{UI_TEXTS.resultTitle}</h3>
          <Output text={textDisplay} />
        </Card>
      </div>
    </section>
  );
};
