import { type PeselResult } from '../../types/task-two-types';
import { validatePesel } from './utils/validatePesel';

const pesel = (YY: string, MM: string, DD: string, ZZZZ: string, K: string) =>
  `${YY}${MM}${DD}${ZZZZ}${K}`;

describe('validatePesel - basic format validatoin', () => {
  //Incorrect length (less/more than 11 )
  it('should return an error when PESEL has less or more than 11 characters.', () => {
    expect(validatePesel('123')).toEqual(
      expect.objectContaining<Partial<PeselResult>>({ ok: false, code: 'too_short' })
    );

    expect(validatePesel('123456789012')).toEqual(
      expect.objectContaining<Partial<PeselResult>>({ ok: false, code: 'too_long' })
    );
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

  // Incorrect checksum 1944-05-14 + checksum 8
  it('should return an error when PESEL has an invalid checksum digit.', () => {
    expect(validatePesel(pesel('44', '05', '14', '0135', '8'))).toBe('Invalid PESEL checksum.');
  });

  // Correct checksum (valid PESEL) 1944-05-14 + checksum 9
  it('should confirm when PESEL is fully valid.', () => {
    expect(validatePesel(pesel('44', '05', '14', '0135', '9'))).toBe('Valid PESEL number.');
  });
});

describe('validatePesel - birth date validation', () => {
  // - invalid month (00)  1999-00-00 → invalid month (00)
  it('should return an error for month 00', () => {
    expect(validatePesel(pesel('99', '00', '00', '1234', '5'))).toBe('Invalid PESEL birth date.');
  });
  // February never has 30 days 1999-02-30
  it('returns error for non-existent day (Feb 30)', () => {
    expect(validatePesel(pesel('99', '02', '30', '1234', '5'))).toBe('Invalid PESEL birth date.');
  });
  // April has only 30 days 1999-04-31
  it('should return an error when day does not exist (for example Apr 31)', () => {
    expect(validatePesel(pesel('99', '04', '31', '1234', '5'))).toBe('Invalid PESEL birth date.');
  });
});
