export default {
  name: 'maxlength',
  message: 'Please enter no more than {0} characters',
  paramType: Number,
  fn: (value, element, param) => {
    return (value.length <= param);
  },
};
