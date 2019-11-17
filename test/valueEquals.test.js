import valueEquals from '../src/valueEquals';

describe('valueEquals Validation', () => {
  test('Test: Should be equals', () => {
    const isValid = valueEquals.fn('12345', null, '12345');
    expect(isValid).toBe(true);
  });

  test('Test: Should not be equals', () => {
    const isValid = valueEquals.fn('12345', null, '1234d');
    expect(isValid).toBe(false);
  });
});
