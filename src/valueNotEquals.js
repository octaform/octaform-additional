module.exports = {
  name: 'valueNotEquals',
  message: 'Value must be not equal to {0}',
  fn: (value, element, param) => {
    return param !== value;
  },
};
