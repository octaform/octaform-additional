import ValueNotEquals from '../src/valueNotEquals';

describe('ValueNotEquals Validation', () => {
  test('Test: Should pass when values aren\'t equals', () => {
    const isValid = ValueNotEquals.fn('test', null, 'BR');
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when values are equals', () => {
    const isValid = ValueNotEquals.fn('BR', null, 'BR');
    expect(isValid).toBe(false);
  });
});
