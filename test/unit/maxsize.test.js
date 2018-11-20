import Maxsize from '../../src/maxsize';

describe('Maxsize Validation', () => {
  const element = [{
    files: [{
      size: 89518,
      type: 'image/png',
    }],
  }];

  test('Test: Should have a valid size', () => {
    const isValid = Maxsize.fn(null, element, 90000);
    expect(isValid).toBe(true);
  });

  test('Test: Should\'t have a valid size', () => {
    const isValid = Maxsize.fn(null, element, 80000);
    expect(isValid).toBe(false);
  });
});
