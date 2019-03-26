export default {
  name: 'minlength',
  message: 'Please enter at least {0} characters',
  paramType: Number,
  fn: (value, element, param) => {
    return (value.length >= param);
  },
};
