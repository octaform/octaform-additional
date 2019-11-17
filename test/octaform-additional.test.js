import modules from '../src/octaform-additional';

describe('Index Validation', () => {
  test('Test: Should be defined all validations', () => {
    const validations = Object.keys(modules);
    expect(validations).toHaveLength(15);
    expect(validations).toEqual(
      expect.arrayContaining([
        'email', 
        'extension', 
        'letter',
        'maxlength',
        'maxsize',
        'minchecked',
        'minlength',
        'number',
        'range',
        'required',
        'url',
        'valueNotEquals',
        'equalTo',
        'valueEquals',
        'pattern'
      ])
    );
  });
});
