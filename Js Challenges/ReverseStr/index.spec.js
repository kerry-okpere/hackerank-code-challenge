const reverse = require('./index');

test('Hello tobe olleH', () => {
  expect(reverse('Hello')).toBe('olleH');
});