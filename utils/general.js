export const greatestValue = (array) =>
  array.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);
