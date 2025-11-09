import type { PeselCode } from '../../types/task-two-types';

export const MESSAGES: Record<PeselCode, { message: string; hint?: string }> = {
  empty: { message: '', hint: undefined },
  too_short: { message: 'Enter 11 digits.', hint: "You're almost there — keep typing." },
  too_long: { message: 'Too many characters.', hint: 'PESEL should be exactly 11 digits.' },
  non_digit: { message: 'Digits only, please.', hint: 'Remove spaces and letters (0-9 only).' },
  invalid_date: {
    message: "This date doesn't look right.",
    hint: 'Check month and day encoded in PESEL.',
  },
  invalid_checksum: {
    message: "The control digit doesn't match.",
    hint: 'Double-check the last digit.',
  },
  ok: { message: 'PESEL looks good.', hint: undefined },
};

export const UI_TEXTS = {
  task: 'Write a React program to validate a PESEL number according to the official format specification. Prepare unit tests that check several invalid cases and at least one valid PESEL number.',
  note: "The PESEL validation logic and unit tests are located in src/views/TaskTwo . I would fix one of the test cases, but due to limited time I left it as is. In the future, I'd like to improve the visual design of this page and enhance the input UX — for example, by showing the error message only after pressing a validation button instead of immediately while typing.",
};
