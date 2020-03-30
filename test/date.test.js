import DateFormat from '../src/date';

describe('Date Validation', () => {
  test('Test: Should be a valid date MM/DD/YYYY', () => {
    const isValid = DateFormat.fn('10/23/2020', null, 'MM/DD/YYYY');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid date with format MM/DD/YY', () => {
    const isValid = DateFormat.fn('10/23/20', null, 'MM/DD/YY');
    expect(isValid).toBe(true);
  });

  test('Test: Should not be a valid date with format MM/DD/YY', () => {
    const isValid = DateFormat.fn('10/23/2020', null, 'MM/DD/YY');
    expect(isValid).toBe(false);
  });

  test('Test: Should be a valid date with format M/DD/YY', () => {
    const isValid = DateFormat.fn('2/23/20', null, 'M/DD/YY');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid date with format MM/D/YY', () => {
    const isValid = DateFormat.fn('02/3/20', null, 'MM/D/YY');
    expect(isValid).toBe(true);
  });

  test('Test: Should not be a valid date with format MM/D/YY', () => {
    const isValid = DateFormat.fn('02/03/20', null, 'MM/D/YY');
    expect(isValid).toBe(false);
  });

  test('Test: Should be a valid date with format M/D/YY', () => {
    const isValid = DateFormat.fn('2/3/20', null, 'M/D/YY');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid date MM-DD-YYYY', () => {
    const isValid = DateFormat.fn('10-23-2020', null, 'MM-DD-YYYY');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid date MM.DD.YYYY', () => {
    const isValid = DateFormat.fn('10.23.2020', null, 'MM.DD.YYYY');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid date MM DD YYYY', () => {
    const isValid = DateFormat.fn('10 23 2020', null, 'MM DD YYYY');
    expect(isValid).toBe(true);
  });

  test('Test: Should not be a valid date', () => {
    const isValid = DateFormat.fn('13/23/2020', null, 'MM/DD/YYYY');
    expect(isValid).toBe(false);
  });

  test('Test: Should not be a valid date format', () => {
    const isValid = DateFormat.fn('13232020', null, 'MM/DD/YYYY');
    expect(isValid).toBe(false);
  });

  test('Test: Should not be a valid day for the month/year', () => {
    const isValid = DateFormat.fn('02/29/2019', null, 'MM/DD/YYYY');
    expect(isValid).toBe(false);
  });

  test('Test: Should not be a valid year', () => {
    const isValid = DateFormat.fn('02/29/0000', null, 'MM/DD/YYYY');
    expect(isValid).toBe(false);
  });
});
