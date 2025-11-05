import { useState } from "react";
import type { FormData } from "../../types/task-one-types";
import { handleFileSelect } from "./utils/handleFileSelect";
import { readTextFile } from "./utils/readTextFile";
import { Card, Input, TaskHeader } from "../../components";
import styles from "./TaskOne.module.scss";

export const TaskOne = () => {
  const [formData, setFormData] = useState<FormData>({ file: null, text: "" });
  const [fileKey, setFileKey] = useState(0);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e, setFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) return;
    const form = e.currentTarget as HTMLFormElement;

    const text = await readTextFile(formData.file!);
    setFormData((prev) => ({ ...prev, text, file: null }));
    form.currentTarget.reset();
    setFileKey((k) => k + 1);
  };

  const handleReset = () => {
    setFormData({ file: null, text: "" });

    setFileKey((k) => k + 1);
  };

  return (
    <section className={styles.taskOne}>
      <TaskHeader
        paragraph={
          "Write a React program that includes a form for uploading a text file.After uploading, the program should randomly shuffle the order of the letters in each word, except for the first and last letters. Make sure to handle punctuation, uppercase/lowercase letters, multiline texts, and Polish characters properly."
        }
      />
      <div className={styles.grid}>
        <Card className={styles.left}>
          <form
            onSubmit={handleSubmit}
            onReset={() => setFormData({ file: null, text: "" })}
            noValidate
          >
            <h3>Uppload file .txt</h3>
            <Input
              key={fileKey}
              id="file"
              type="file"
              accept=".txt,text/plain"
              onChange={onFileChange}
            />
            <div className={styles.formActions}>
              <button className={styles.buttonReset} onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </Card>
        <Card className={styles.right}>
          <h3>Your text</h3>
          <div className={styles.output} aria-live="polite">
            {formData.text
              ? formData.text
              : "A preview will be visible after entering text."}
          </div>
        </Card>
      </div>
    </section>
  );
};
