export default {
  name: 'pattern',
  message: 'Please enter a value following the pattern /{0}/',
  paramType: String,
  fn: (value, element, param) => {
    return new RegExp(param).test(value);
  },
};
