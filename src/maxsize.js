module.exports = {
  name: 'maxsize',
  message: 'File size must not exceed {0} bytes',
  fn: (value, element, param) => {
    const file = Array.from(element[0].files);
    return file.some(item => (item.size <= param));
  },
};
