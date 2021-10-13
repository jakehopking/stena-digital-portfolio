export const greatestValue = (array) =>
  array.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);

export const tryFn = (fn, fallback = null) => {
  try {
    return fn();
  } catch (error) {
    return fallback;
  }
};

export const filterFn = (check, filterArr, filterType) => {
  if (filterType === "exclude") return filterArr.indexOf(check) < 0;
  return filterArr.indexOf(check) !== -1;
};

export const multiplier = (val, factor) => val * factor;
