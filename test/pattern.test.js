import Pattern from '../src/pattern';

describe('Pattern Validation', () => {
  test('Test: Should pass when typed only numbers', () => {
    const isValid = Pattern.fn('250', null, '^[0-9]+$');
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when typed letters and number', () => {
    const isValid = Pattern.fn('ws4', null, '^[0-9]+$');
    expect(isValid).toBe(false);
  });
});
