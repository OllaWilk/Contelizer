export const validatePesel = (pesel: string): number | string => {
  if (pesel.length !== 11 || !pesel) {
    return 'PESEL must be exactly 11 digits long.';
  }

  if (!/^\d{11}$/.test(pesel)) {
    return 'PESEL must contain only digits.';
  }

  return 'Read for further checks';
};
