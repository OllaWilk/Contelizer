import { validatePesel } from './utils/validatePesel';

describe('validatePesel - basic format validatoin', () => {
  //Incorrect length (less/more than 11 )
  it('should return an error when PESEL has less or more than 11 characters.', () => {
    expect(validatePesel('123')).toBe('PESEL must be exactly 11 digits long.');
    expect(validatePesel('123456789012')).toBe('PESEL must be exactly 11 digits long.');
  });

  //Non-digit characters (letters, spaces, hypens)

  it('should return an error when PESEL contains non-digit characters.', () => {
    expect(validatePesel('12345a78901')).toBe('PESEL must contain only digits.');
    expect(validatePesel('12345 78901')).toBe('PESEL must contain only digits.');
    expect(validatePesel('12345-78901')).toBe('PESEL must contain only digits.');
  });
});

describe('validatePesel - checksum validation', () => {
  //valid pesel
  it('should return an error when PESEL has valid length and digits only.', () => {
    expect(validatePesel('12345678901')).toBe('Invalid PESEL checksum.');
  });

  // Incorrect checksum
  it('should return an error when PESEL has an invalid checksum digit.', () => {
    expect(validatePesel('44051401358')).toBe('Invalid PESEL checksum.');
  });

  // Correct checksum (valid PESEL)
  it('should confirm when PESEL is fully valid.', () => {
    expect(validatePesel('44051401359')).toBe('Valid PESEL number.');
  });
});

describe('validatePesel - birth date validation', () => {
  // Tu w następnym kroku dodamy testy z poprzedniej wiadomości:
  // - invalid month (00)
  // - invalid encoded century
  // - non-existent day (Feb 30, Apr 31)
  // - leap year edge cases
});
