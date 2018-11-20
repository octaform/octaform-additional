import Numbers from '../../src/number';

describe('Number Validation', () => {
  test('Test: Should pass when typed only numbers', () => {
    const isValid = Numbers.fn('250');
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when typed letters and number', () => {
    const isValid = Numbers.fn('ws4');
    expect(isValid).toBe(false);
  });
});
