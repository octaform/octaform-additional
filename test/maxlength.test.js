import Maxlength from '../src/maxlength';

describe('Maxlength Validation', () => {
  test('Test: Should have a valid length', () => {
    const isValid = Maxlength.fn('word', null, 5);
    expect(isValid).toBe(true);
  });

  test('Test: Should\'t have a valid length', () => {
    const isValid = Maxlength.fn('word', null, 2);
    expect(isValid).toBe(false);
  });
});
