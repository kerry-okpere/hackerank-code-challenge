const sockMerchant = require('./index');

test(' The number of pairs is 2', () => {
  expect(sockMerchant([1, 2, 1, 2, 1, 3, 2], 7)).toBe(2);
});
test(' The number of pairs is 3', () => {
  expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20], 9)).toBe(3);
});