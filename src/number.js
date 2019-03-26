export default {
  name: 'number',
  message: 'Please enter a valid number',
  paramType: Boolean,
  fn: (value) => {
    return /^\d+$/g.test(value);
  },
};
