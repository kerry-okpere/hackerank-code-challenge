const powersofTwo = require('./index');

test('The number 4 is a power of 2', () => {
  expect(powersofTwo(4)).toBe(true)
});
test('The number 124 is not a power of 2', () => {
  expect(powersofTwo(124)).toBe(false);
});