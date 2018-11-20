export default {
  name: 'letter',
  message: 'Please enter only letters',
  fn: (value) => {
    return (/^[a-zA-Z]+$/).test(value);
  },
};
