export default {
  name: 'extension',
  message: 'Please choose a file with a valid extension: (...{})',
  paramType: Array,
  fn: (value, element, params) => {
    const file = Array.from(element[0].files);
    return file.some((item) => {
      const fileType = (item.type).split('/')[1];
      if (fileType === 'jpeg' && params.includes('jpg') && !params.includes('jpeg')) params.push('jpeg');
      return params.includes(fileType);
    });
  },
};
