import Modules from '../../src';

describe('Index Validation', () => {
  test('Test: Should be defined all validations', () => {
    expect(Modules).toHaveLength(10);
  });
});
