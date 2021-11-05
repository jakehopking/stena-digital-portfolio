export const greatestValue = (array) =>
  array.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);

export const tryFn = (fn, fallback = null) => {
  try {
    return fn();
  } catch (error) {
    return fallback;
  }
};

export const filterFn = (key, filterArr, filterType) => {
  if (filterType === "exclude") return filterArr.indexOf(key) < 0;
  return filterArr.indexOf(key) !== -1;
};

export const multiplier = (val, factor) => val * factor;

export const schemeType = (colorScheme) => {
  if (!Array.isArray(colorScheme)) {
    return {scheme: colorScheme};
  } else {
    return colorScheme;
  }
};

export const getGroupedListByKey = ({array = [], key = ""}) => {
  // debugger;
  let data = {};
  array.map((item) => {
    const name = item[key];
    if (!tryFn(() => data[name])) data[name] = [];
    data[name].push(item);
  });
  return data;
};

export const getTitleAndCount = ({object = {}}) =>
  Object.entries(object).map((item) => {
    return {
      title: item[0],
      count: item[1].length,
    };
  });

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

export const serializeRow = (row, sheet) => {
  let temp = {};
  sheet.headerValues.map((header) => {
    temp[header] = row[header];
  });
  return temp;
};

export const formatDateSimple = (date, yearLength) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let year = date.getFullYear();
  yearLength === 2 ? (year = year.toString().slice(yearLength)) : year;
  return `${year}/${month}/${day}`;
};
