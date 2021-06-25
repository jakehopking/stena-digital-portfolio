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

// Util to generate map of tags for given notion database, column name
// from "multi_select" data type
export const tagsFromMultiSelect = (database, colTitle) => {
  let tags = {};
  database.map((item) => {
    if (!!item.properties[colTitle].multi_select.length) {
      item.properties[colTitle].multi_select.map((tag) => {
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
export const tagsFromSelect = (database, colTitle) => {
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
// E.g. mappedListFromColumnSelect(database, "Status")
// => {Now: [{}, {}], Next: [{}], Future: [{}, {}, {}]}
export const mappedListFromColumnSelect = (database, columnName) => {
  let data = {};
  database.map((item) => {
    const {name} = item.properties[columnName].select;
    if (data[name] === undefined) data[name] = [];
    data[name].push(item);
  });
  return data;
};
