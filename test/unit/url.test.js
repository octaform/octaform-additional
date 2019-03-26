import Url from '../../src/url';

describe('Url Validation', () => {
  test('Test: Should be a valid url', () => {
    const isValidHttp = Url.fn('http://teste.com');
    const isValidHttps = Url.fn('https://teste.com');
    expect(isValidHttp).toBe(true);
    expect(isValidHttps).toBe(true);
  });

  test('Test: Should be a invalid url', () => {
    const isValid = Url.fn('https://teste.c');
    expect(isValid).toBe(false);
  });
});
