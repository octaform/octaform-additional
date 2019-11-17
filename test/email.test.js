import Email from '../src/email';

describe('Email Validation', () => {
  test('Test: Should be a valid email', () => {
    const isValid = Email.fn('myemail@gmail.com');
    expect(isValid).toBe(true);
  });

  test('Test: Should be a invalid email', () => {
    const isValid = Email.fn('myemail@co');
    expect(isValid).toBe(false);
  });
});
