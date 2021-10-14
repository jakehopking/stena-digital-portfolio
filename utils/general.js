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

export const getGroupedListByKey = ({array = [], key = ""}) => {
  let data = {};
  array.map((item) => {
    const name = item[key];
    if (!tryFn(() => data[name])) data[name] = [];
    data[name].push(item);
  });
  return data;
};

export const organiseListByKey = ({
  categoryName = "explore",
  filterList = [],
  key = "phase",
  listArray = [],
}) => {
  let filtered;
  let grouped;
  if (categoryName === "explore") {
    filtered = listArray.filter((item) => filterFn(item[key], filterList, "exclude"));
  } else if (categoryName === "exploit") {
    filtered = listArray.filter((item) => filterFn(item[key], filterList));
  } else {
    filtered = listArray;
  }
  grouped = getGroupedListByKey({array: filtered, key});

  return Object.keys(grouped).map((item) => {
    return {title: item, list: grouped[item]};
  });
};
