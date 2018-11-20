export default {
  name: 'email',
  message: 'Please enter a valid email',
  fn: (value) => {
    return (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(value) || false;
  },
};
