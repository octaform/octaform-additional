import Minlength from '../../src/minlength';

describe('Minlength Validation', () => {
  test('Test: Should pass when min be 2 and typed 4', () => {
    const isValid = Minlength.fn('word', null, 2);
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when min be 2 and typed only 1', () => {
    const isValid = Minlength.fn('w', null, 2);
    expect(isValid).toBe(false);
  });
});
