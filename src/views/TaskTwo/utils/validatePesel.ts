export const validatePesel = (pesel: string): number | string => {
  if (pesel.length !== 11 || !pesel) {
    return 'PESEL must be exactly 11 digits long.';
  }

  if (!/^\d{11}$/.test(pesel)) {
    return 'PESEL must contain only digits.';
  }

  const weigths = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = pesel.split('').map((d) => Number(d));
  const sum = weigths.reduce((acc, w, i) => acc + w * digits[i], 0);
  const control = (10 - (sum % 10)) % 10;

  if (control !== digits[10]) {
    return 'Invalid PESEL checksum.';
  }

  return 'Valid PESEL number.';
};
