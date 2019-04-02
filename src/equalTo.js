export default {
  name: 'equalTo',
  message: 'Please enter the same value again.',
  paramType: String,
  fn: (value, element, param) => {
    // Valid selectors #id / .class / [name=field]
    const hasValidSelector = /^(?:#([\w-]+)|\.([\w-]+)|\[(.*?)\])$/.test(param);
    if (hasValidSelector) {
      const selector = document.querySelectorAll(param);
      return Array.from(selector).some(field => value === field.value);
    }

    return false;
  },
};
