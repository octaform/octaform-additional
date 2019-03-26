export default {
  name: 'range',
  message: 'Please enter a value between {0} and {1}',
  paramType: Array,
  fn: (value, element, param) => {
    return (value >= param[0] && value <= param[1]);
  },
};
