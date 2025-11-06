import { decodeYearAndMonth } from './decodeYearAndMonth';
import { isValidDay } from './isValidDay';

export const validatePesel = (pesel: string): number | string => {
  //length and digit-only validation
  if (!pesel || pesel.length !== 11) {
    return 'PESEL must be exactly 11 digits long.';
  }

  if (!/^\d{11}$/.test(pesel)) {
    return 'PESEL must contain only digits.';
  }

  //birth date validation
  const yy = Number(pesel.slice(0, 2));
  const mmRaw = Number(pesel.slice(2, 4));
  const dd = Number(pesel.slice(4, 6));

  const decoded = decodeYearAndMonth(mmRaw, yy);
  if (!decoded) {
    return 'Invalid PESEL birth date.';
  }

  const { month } = decoded;
  if (!isValidDay(month, dd)) {
    return 'Invalid PESEL birth date.';
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
    return 'Invalid PESEL checksum.';
  }

  return 'Valid PESEL number.';
};
