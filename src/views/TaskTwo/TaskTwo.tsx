import { useState, useMemo } from 'react';
import { validatePesel } from './utils/validatePesel';
import { Card, ErrorBlock, Input, TaskHeader } from '../../components';
import { UI_TEXTS } from '../TaskOne/content';

export const TaskTwo = () => {
  const [value, setValue] = useState('');
  const message = useMemo(() => (value ? validatePesel(value) : ''), [value]);

  return (
    <div>
      <TaskHeader paragraph={UI_TEXTS.tasktwo} />
      <Card>
        <Input
          id="pesel"
          aria-label="pesel"
          placeholder="Enter 11-digit PESEL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {message && <ErrorBlock title="sorry" message={message} />}
      </Card>
    </div>
  );
};
