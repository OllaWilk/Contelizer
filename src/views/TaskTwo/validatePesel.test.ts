import { validatePesel } from './utils/validatePesel';

describe('validatePesel', () => {
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

  //valid pesel
  it('should return an error when PESEL has valid length and digits only.', () => {
    expect(validatePesel('12345678901')).toBe('Read for further checks');
  });
});

//Non-existent date
//Invalid month/century encoding
//correct format and date but wrong checksum digit
