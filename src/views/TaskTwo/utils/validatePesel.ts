import type { PeselResult } from '../../../types/task-two-types';
import { MESSAGES } from '../content';
import { decodeYearAndMonth } from './decodeYearAndMonth';
import { isValidDay } from './isValidDay';

export const validatePesel = (raw: string): PeselResult => {
  const pesel = (raw ?? '').trim();

  if (!pesel) return { ok: false, code: 'empty', ...MESSAGES.empty };

  //length and digit-only validation
  if (pesel.length < 11) {
    return { ok: false, code: 'too_short', ...MESSAGES.too_short };
  }

  if (pesel.length > 11) {
    return { ok: false, code: 'too_long', ...MESSAGES.too_long };
  }

  if (!/^\d{11}$/.test(pesel)) {
    return { ok: false, code: 'non_digit', ...MESSAGES.non_digit };
  }

  //birth date validation
  const yy = Number(pesel.slice(0, 2));
  const mmRaw = Number(pesel.slice(2, 4));
  const dd = Number(pesel.slice(4, 6));

  const decoded = decodeYearAndMonth(mmRaw, yy);
  if (!decoded) {
    return { ok: false, code: 'invalid_date', ...MESSAGES.invalid_date };
  }

  const { month } = decoded;
  if (!isValidDay(month, dd)) {
    return { ok: false, code: 'invalid_date', ...MESSAGES.invalid_date };
  }
  //   checksum validation
  const weigths = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = pesel.split('').map((d) => Number(d));
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += weigths[i] * digits[i];
  }
  const control = (10 - (sum % 10)) % 10;

  if (control !== digits[10]) {
    return { ok: false, code: 'invalid_checksum', ...MESSAGES.invalid_checksum };
  }

  return { ok: true, code: 'ok', ...MESSAGES.ok };
};
