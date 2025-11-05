import { Card, Input, TaskHeader, Textarea } from "../../components";
import styles from "./TaskOne.module.scss";

export const TaskOne = () => {
  const handleFile = () => {
    console.log("handleFile");
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
          <Input
            label="Uppload file .txt"
            id="file"
            type="file"
            accept=".txt,text/plain"
            onChange={handleFile}
          />
          <Textarea
            id="text"
            value={""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Paste your text here or upload a file..."
            rows={12}
          />
        </Card>
        <Card className={styles.right}>
          <h3>Twój tekst</h3>

          <div className={styles.output} aria-live="polite">
            {"A preview will be visible after entering text."}
          </div>
        </Card>
      </div>
    </section>
  );
};
