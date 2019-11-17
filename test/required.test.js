import Required from '../src/required';

describe('Required Validation', () => {
  const element = [{ length: 1 }];

  test('Test: Should pass when typed something', () => {
    const isValid = Required.fn('test', element);
    expect(isValid).toBe(true);
  });

  test('Test: Should pass when is checkbox and some option is checked', () => {
    element.push({ checked: true });
    const isValid = Required.fn('test', element);
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when nothing was typed', () => {
    element.splice(1, 1);
    const isValid = Required.fn('', element);
    expect(isValid).toBe(false);
  });
});
