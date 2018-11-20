export default {
  name: 'minchecked',
  message: 'Please select at least {0} options',
  fn: (value, element, param) => {
    const qtdChecked = element.reduce((acc, option) => {
      if (option.checked) acc++;
      return acc;
    }, 0);
    return (qtdChecked >= param);
  },
};
