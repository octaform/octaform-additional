module.exports = {
  name: 'valueNotEquals',
  message: 'Value must not be equal {0}',
  fn: (value, element, param) => {
    return param !== value;
  },
};
