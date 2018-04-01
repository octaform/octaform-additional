module.exports = {
  name: 'number',
  message: 'Please enter a valid number',
  fn: (value) => {
    return /^\d+$/g.test(value);
  },
};
