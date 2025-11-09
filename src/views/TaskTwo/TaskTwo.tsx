import { useState, useMemo } from 'react';
import { validatePesel } from './utils/validatePesel';
import { UI_TEXTS } from './content';
import { Card, ErrorBlock, Input, SuccesBlock, TaskHeader } from '../../components';
import styles from './TaskTwo.module.scss';

export const TaskTwo = () => {
  const [value, setValue] = useState('');

  const result = useMemo(() => {
    if (!value) return null;
    return validatePesel(value);
  }, [value]);

  const length = value.length;
  const remaining = 11 - length;
  const lengthMessage =
    length < 11
      ? `You need ${remaining} more ${remaining === 1 ? 'digit' : 'digits'}`
      : '11/11 digits';

  const handlePeselBlur = () => {};

  return (
    <div className={styles.taskTwo}>
      <TaskHeader paragraph={UI_TEXTS.task} />
      <p className={styles.note}>{UI_TEXTS.note}</p>
      <Card>
        <Input
          id="pesel"
          aria-label="pesel"
          placeholder="Enter 11-digit PESEL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          inputMode="numeric"
          onBlur={handlePeselBlur}
        />
        <p className={styles.counter}>{lengthMessage}</p>
        <div className={styles.errorBlock}>
          {result && (
            <>
              {result.ok ? (
                <SuccesBlock title="HURRAY" message={result.message} />
              ) : (
                <ErrorBlock message={result.hint + ''} title={result.message} />
              )}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
