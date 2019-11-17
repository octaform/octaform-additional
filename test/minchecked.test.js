import Minchecked from '../src/minchecked';

describe('Minchecked Validation', () => {
  const elements = [
    { checked: true },
    { checked: true },
    { checked: false },
  ];

  test('Test: Should be checked at least 2 checkboxes', () => {
    const isValid = Minchecked.fn(null, elements, 2);
    expect(isValid).toBe(true);
  });

  test('Test: Should fail when checked 2 checkboxes when is waiting for min 3', () => {
    const isValid = Minchecked.fn(null, elements, 3);
    expect(isValid).toBe(false);
  });
});
