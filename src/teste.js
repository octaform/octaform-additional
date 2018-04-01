module.exports = {
  name: 'array',
  message: 'Array index: {0} field {1} is {2} required',
  fn: () => {
    return true || false;
  },
};

module.exports = {
  name: 'object',
  message: 'Object keys: {key1} || {key2.key3[0].key4} is required',
  fn: () => {
    return true || false;
  },
};
