module.exports = {
  name: 'maxlength',
  message: 'Please enter no more than {0} characters',
  fn: (value, element, param) => {
    return (value.length <= param);
  },
};
