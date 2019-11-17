import Letter from '../src/letter';

describe('Letter Validation', () => {
  test('Test: Should be a valid letter', () => {
    const isValid = Letter.fn('word');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a invalid letter', () => {
    const isValid = Letter.fn('Word2');
    expect(isValid).toBe(false);
  });
});
