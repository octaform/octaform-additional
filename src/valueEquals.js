export default {
  name: 'valueEquals',
  message: 'Value must be equal to {0}',
  paramType: String,
  fn: (value, element, param) => {
    return value === param;
  },
};
