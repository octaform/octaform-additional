import Extension from '../../src/extension';

describe('Extension Validation', () => {
  const element = [{
    files: [{
      size: 89518,
      type: 'image/png',
    }],
  }];

  test('Test: Should be a valid extension', () => {
    const params = ['png', 'jpg'];
    const isValid = Extension.fn(null, element, params);
    expect(isValid).toBe(true);
  });

  test('Test: Should be a valid extension when jpeg format', () => {
    const params = ['jpg'];
    element[0].files[0].type = 'image/jpeg';
    const isValid = Extension.fn(null, element, params);
    expect(isValid).toBe(true);
  });

  test('Test: Should be a invalid extension', () => {
    const params = ['gif'];
    const isValid = Extension.fn(null, element, params);
    expect(isValid).toBe(false);
  });
});
