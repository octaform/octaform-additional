import Range from '../src/range';

describe('Range Validation', () => {
  test('Test: Should be a valid range', () => {
    const isValid = Range.fn(5, null, [1, 8]);
    expect(isValid).toBe(true);
  });

  test('Test: Should be a invalid url', () => {
    const isValid = Range.fn(2, null, [5, 8]);
    expect(isValid).toBe(false);
  });
});
