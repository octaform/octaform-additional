import browser from './__mocks__/browser';
import equalTo from '../src/equalTo';

describe('equalTo Validation', () => {
  beforeAll(() => browser());
  
  test('Test: Should be a valid selector', () => {
    document.querySelector('.password').value = '12345';

    const isValid = equalTo.fn('12345', null, '.password');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a invalid selector', () => {
    const isValid = equalTo.fn('12345', null, 'invalidSelector');
    expect(isValid).toBe(false);
  });

  test('Test: The field should have different values', () => {
    const isValid = equalTo.fn('myPass', null, '.password');
    expect(isValid).toBe(false);
  });
});
