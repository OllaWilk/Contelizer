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
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        The PESEL validation logic and unit tests are located in
        <code> src/views/TaskTwo </code>. I would fix one of the test cases, but due to limited time
        I left it as is. In the future, I’d like to improve the visual design of this page and
        enhance the input UX — for example, by showing the error message only after pressing a
        validation button instead of immediately while typing.
      </p>
    </div>
  );
};
