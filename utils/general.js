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
  let result = {};
  array.map((item) => {
    const name = item[key];
    if (!tryFn(() => result[name])) result[name] = [];
    result[name].push(item);
  });
  return result;
};

export const getTitleAndCount = ({object = {}}) =>
  Object.entries(object).map((item) => {
    return {
      title: item[0],
      count: item[1].length,
    };
  });

export const organiseListByKey = ({
  key = "",
  listArray = [],
  filterList = [],
  filterType = "",
}) => {
  let filtered;
  let grouped;
  if (filterType === "exclude") {
    filtered = listArray.filter((item) => filterFn(item[key], filterList, "exclude"));
  } else if (filterType === "include") {
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
  let result = {};
  sheet.headerValues.map((header) => {
    result[header] = row[header];
  });
  return result;
};

export const formatDateSimple = (date, yearLength) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let year = date.getFullYear();
  yearLength === 2 ? (year = year.toString().slice(yearLength)) : year;
  return `${year}/${month}/${day}`;
};

export const sliceArrayIntoChunks = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

export const makeRepeatedArray = (arr, repeats) =>
  [].concat(...Array.from({length: repeats}, () => arr));

export const dynamicSort = (property) => {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return (a, b) => {
    let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

export const calcPercentage = (value, total) => Math.round((value / total) * 100);

export const calcChartLabelLength = (string, value, maxLength) => {
  if (value === 100 && string.length <= maxLength) return string;
  return string.substring(0, Math.round(maxLength * (value / 100))).trim() + "...";
};

export const generateChartData = ({chartData = [], label = "", maxLength = 60}) => {
  return {
    name: label,
    children: chartData.map((item) => {
      const {label, value} = item;
      return {
        name: calcChartLabelLength(label, value, maxLength),
        detail: label,
        loc: value,
      };
    }),
  };
};
