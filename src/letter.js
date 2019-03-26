export default {
  name: 'letter',
  message: 'Please enter only letters',
  paramType: Boolean,
  fn: (value) => {
    return (/^[a-zA-Z]+$/).test(value);
  },
};
