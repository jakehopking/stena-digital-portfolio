// Util to return number of rows with .properties.Name.title in database
export const titleCount = (database) => {
  let titleCount = 0;
  database.map((post) => {
    const {text} = post.properties.Name.title[0];
    debugger;
    if (!text) {
      return null;
    } else {
      titleCount++;
    }
  });
  return titleCount;
};

// Check to see if multi_select has a length, therefore entries.
export const isMultiSelect = (key) =>
  Boolean(key.multi_select && key.multi_select.length);

// Return object of unique tags, with colour, count and id keys
export const mappedMultiSelect = (key) => {
  let tags = {};
  key.multi_select.map((tag) => {
    const {name, color, id} = tag;
    tags[name] = {
      count: tags[name] ? tags[name].count + 1 : 1,
      color,
      id,
    };
  });
  return tags;
};

// Util to generate map of tags for given notion database, column name
// from "multi_select" data type
export const getColumnMultiSelectTags = (database, colTitle) => {
  let tags = {};
  database.map((item) => {
    const column = item.properties[colTitle];
    // if (isMultiSelect(column)) tags = {...mappedMultiSelect(column), ...tags};
    if (isMultiSelect(column)) {
      column.multi_select.map((tag) => {
        const {name, color, id} = tag;
        tags[name] = {
          count: tags[name] ? tags[name].count + 1 : 1,
          color,
          id,
        };
      });
    }
  });
  return tags;
};

// Util to generate map of tags for given notion database, column name
// from "select" data type
export const getColumnSelectTags = (database, colTitle) => {
  let tags = {};
  database
    .filter((filterItem) => filterItem.properties[colTitle])
    .map((item) => {
      const {name, color, id} = item.properties[colTitle].select;
      tags[name] = {
        count: tags[name] ? tags[name].count + 1 : 1,
        color,
        id,
      };
    });
  return tags;
};

// If true, return select field type name
export const getSelectName = (key) => {
  if (key.select) return key.select.name;
  const err = "No select field data";
  console.log(err);
  return err;
};

// If true, return title field type plain_text
export const getTitleText = (key) => {
  if (key.title) return key.title[0].plain_text;
  const err = "No title field data";
  console.log(err);
  return err;
};

// If true, return title field type plain_text
export const getRichText = (key) => {
  if (key.rich_text) return key.rich_text[0].plain_text;
  const err = "No rich_text field data";
  console.log(err);
  return err;
};

// Util to return array of titles from Notion database
export const getDatabaseColumnTitles = (database) => {
  const notionColSet = new Set();
  database.forEach((item) =>
    Object.keys(item.properties).map((col) => notionColSet.add(col))
  );
  return [...notionColSet];
};

// Util to filter database by column title
export const filterByColName = (database, colName) =>
  database.filter((item) => item.properties[colName]);

// Util that returns an array of full row objects mapped to "select" tag name from chosen column name
// E.g. getMappedListFromColumnTitleSelectTags(database, "Status")
// => {Now: [{}, {}], Next: [{}], Future: [{}, {}, {}]}
export const getMappedListFromColumnTitleSelectTags = (database, columnName) => {
  let data = {};
  database.map((item) => {
    const {name} = item.properties[columnName].select;
    if (data[name] === undefined) data[name] = [];
    data[name].push(item);
  });
  return data;
};

export const getTotalCountFromTags = (object, key = "count") =>
  Object.keys(object).reduce((acc, curr) => acc + object[curr][key], 0);

// Return filtered array of objects (if tags have a " - " separator and we want to
// filter the 0 index of the split)
export const filterDirtyTagKeys = (object, filter) =>
  Object.keys(object)
    .filter((item) => item.split(" ")[0] === filter)
    .map((key) => object[key]);
